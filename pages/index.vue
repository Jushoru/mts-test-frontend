<script setup lang="ts">
import type { cityUi } from "~/types/formTypes";

interface apiUi {
  data: cityUi[];
}

const toast = useToast()

const selectedValue = ref<cityUi | null>(null)
const email = ref('')

const { error, data, pending: isLoading } = useFetch('http://localhost:1337/api/options', {
  transform(data: apiUi) {
    return data.data.map((item: cityUi) => ({
      title: item.title,
      value: item.value,
    }))
  }
})

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Ошибка загрузки данных',
    fatal: true,
  })
}

const handleSubmit = async () => {
  if (!selectedValue.value) {
    toast.error({ title: 'Ошибка!', message: 'Выберите значение из списка' })
    return false
  }
  if (!email.value) {
    toast.error({ title: 'Ошибка!', message: 'Email обязателен' })
    return false
  } else if (!validateEmailFormat(email.value)) {
    toast.error({ title: 'Ошибка!', message: 'Неверный формат email' })
    return false
  }

  try {
    const formData = {
      option: selectedValue.value,
      email: email.value,
    }

    const { error: responseError } = await useFetch('http://localhost:1337/api/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        data: {
          content: JSON.stringify(formData)
        }
      }
    })

    if (responseError.value) {
      toast.error({ title: 'Ошибка!', message: 'Не удалось отправить форму' })
    } else {
      toast.success({ title: 'Успех!', message: 'Форма успешно отправлена' })
      selectedValue.value = null
      email.value = ''
    }
  } catch (err) {
    toast.error({ title: 'Ошибка!', message: 'Произошла непредвиденная ошибка' })
  }
};
</script>

<template>
<div class="w-screen h-screen p-[24px] flex flex-col justify-center items-center bg-background">
  <Loader v-if="isLoading"/>
  <div v-else class="content-container">
    <article class="flex flex-col font-Roboto leading-[28px] text-foreground">
      <h1 class="font-medium text-[24px]">Заполните форму</h1>
      <p class="font-normal text-[20px] pt-[12px]">
        На основе ваших ответов теста мы сформируем рекомендации для применения инструментов у вас в компании
      </p>
    </article>
    <form @submit.prevent="handleSubmit" novalidate>
      <UiSelect v-model="selectedValue"
                :options="data"
      />
      <UiInput v-model="email" class="mt-[12px]"/>
      <UiButton class="mt-[16px]" type="submit"/>
    </form>
    <NuxtImg class="absolute left-0 bottom-0 w-[80px]"
             src="/accentLine.svg"
    />
    <NuxtImg class="absolute right-0 top-0 w-[88px]"
             src="/corner.svg"
    />
  </div>
</div>
</template>

<style scoped>
.content-container {
  @apply relative grid grid-cols-[repeat(2,_minmax(200px,_509px))] justify-center bg-white
         rounded-[30px] w-full max-w-[1552px] py-[64px] px-[32px] gap-[32px] rounded-tr-[90px]
}
</style>