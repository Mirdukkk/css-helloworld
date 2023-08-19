<template>
  <div class="container container-green">
    <h1 class="text-heading-1">Making best lalkas on the planet</h1>
    <p class="text">background is green 600</p>
  </div>
  <div class="container container-white">
    <h2 class="text-heading-2">Best lalkas</h2>
    <div class="avatars-grid">
      <Avatar v-for="avatar in avatars" :key="avatar.name" v-bind="avatar"/>
    </div>
  </div>
  <div class="container container-green">
    <h3 class="text-heading-3">Apply now in order to become true a lalka!</h3>
    <button class="button" @click="navigate()">Become a lalka</button>
  </div>
</template>

<script setup lang="ts">
import Avatar from './components/Avatar.vue'
import { avatars } from './utils/constants'

const navigate = () => {
  window.location.href = 'https://api.boticord.top/v3/resources/boosts/add'
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  min-height: 34%;
  max-height: 100%;

  &-green {
    background: var(--color-green);
    color: var(--color-white);

    p {
      margin-top: -32px;
    }
  }

  &-white {
    background: var(--color-white);
    color: var(--color-mint);
  }
}

.avatars-grid {
  display: grid;
  width: 50vw;
  align-self: center;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1320px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: auto;
  }
}
</style>
