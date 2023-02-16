<script lang="ts" setup>
import SideMenu from '~/components/common/SideMenu.vue'
import TopicsList from '~/components/home/TopicsList.vue'
</script>

<template>
  <main>
    <div class="c2">
      <div class="main">
        <slot />
      </div>
      <SideMenu />
    </div>
    <TopicsList />
  </main>
</template>
