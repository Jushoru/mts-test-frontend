<script setup lang="ts">
const modelValue = defineModel<string>('modelValue', {
  default: '',
})
</script>

<template>
  <input v-model="modelValue"
         class="inline-flex w-full items-center justify-between rounded-[10px] text-Roboto leading-[28px] font-normal
                text-[16px] py-[10px] gap-[5px] bg-white hover:bg-stone-50 border shadow-sm px-[12px]
                placeholder:text-placeholder"
         type="email"
         placeholder="Электронная почта"
  />
</template>