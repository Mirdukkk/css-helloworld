<template>
  <div>
    <img class="avatar-image" :src="url" :alt="'Аватарка ' + name"/>
    <h4 class="text-heading-4">{{ name }}</h4>
    <p class="text">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { AvatarContent } from '../utils/constants'

defineProps<AvatarContent>()
</script>

<style scoped lang="scss">
.avatar-image {
  border-radius: 50%;
}

p {
  margin-top: -16px;
  padding-bottom: 32px;
}
</style>
