<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'
import type { cityUi } from "~/types/formTypes";

defineProps<{
  modelValue?: string
  options?: cityUi[]
}>()

const modelValue = defineModel<cityUi | null>('modelValue', {
  default: '',
})
</script>

<template>
  <SelectRoot v-model="modelValue">
    <SelectTrigger
        class="inline-flex w-full items-center justify-between rounded-[10px] text-Roboto leading-[28px] font-normal
               text-[16px] py-[10px] gap-[5px] bg-white hover:bg-stone-50 border shadow-sm outline-none px-[12px]
               data-[placeholder]:text-placeholder"
        aria-label="Customise options"
    >
      <SelectValue placeholder="Выберите вариант" />
      <NuxtImg src="/downArrowIcon.svg"
               class="w-[25px]"
      />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
          class="min-w-[160px] bg-white rounded-[10px] border shadow-sm will-change-[opacity,transform]
          data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade
          data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
          :side-offset="5"
      >
        <SelectScrollUpButton class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <NuxtImg src="/downArrowIcon.svg"
                   class="w-[20px] rotate-180"
          />
        </SelectScrollUpButton>

        <SelectViewport class="p-[5px]">
          <SelectGroup>
            <SelectItem
                v-for="option in options"
                :key="option.value"
                class="text-grass11 rounded-[3px] flex items-center  text-Roboto leading-[28px] font-normal text-[16px]
                pr-[35px] pl-[35px] relative select-none data-[disabled]:text-mauve8 data-[highlighted]:text-green1
                data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9"
                :value="option"
            >
              <SelectItemIndicator class="absolute left-0 inline-flex items-center justify-center">
                <NuxtImg src="/checkIcon.svg"
                         class="w-[25px]"
                />
              </SelectItemIndicator>
              <SelectItemText>
                {{ option.title }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>

        <SelectScrollDownButton class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <NuxtImg src="/downArrowIcon.svg"
                   class="w-[20px]"
          />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>