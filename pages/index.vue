<script setup lang="ts">
const { data: options } = await useFetch('http://localhost:1337/api/options')
console.log(options)
</script>

<template>
<div class="w-screen h-screen p-[24px] flex flex-col justify-center items-center bg-background">
  <div class="relative grid grid-cols-[repeat(2,_minmax(200px,_509px))] justify-center bg-white
              rounded-[30px] w-full max-w-[1552px] py-[64px] px-[32px] gap-[32px] rounded-tr-[90px]">
    <article class="flex flex-col font-Roboto leading-[28px] text-foreground">
      <h1 class="font-medium text-[24px]">Заполните форму</h1>
      <p class="font-normal text-[20px] pt-[12px]">
        На основе ваших ответов теста мы сформируем рекомендации для применения инструментов у вас в компании
      </p>
    </article>
    <form>

    </form>
    <NuxtImg class="absolute left-0 bottom-0 w-[80px]"
             src="/Accent_Line.svg"
    />
    <NuxtImg class="absolute right-0 top-0 w-[88px]"
             src="/Corner.svg"
    />
  </div>
</div>
</template>