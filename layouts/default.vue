<script lang="ts" setup>
import MenuBar from '~/components/common/MenuBar.vue'
import MainFooter from '~/components/common/MainFooter.vue'
import SideMenu from '~/components/common/SideMenu.vue'
import TopicsList from '~/components/home/TopicsList.vue'
import MenuBarHdr from '~/components/common/MenuBarHdr.vue'
import ToPageTop from '~/components/common/ToPageTop.vue'
</script>

<template>
  <div id="container">
    <MenuBar />
    <main>
      <div class="c2">
        <div class="main">
          <slot />
        </div>
        <SideMenu />
      </div>
      <TopicsList />
    </main>
    <MainFooter />
    <MenuBarHdr />
    <ToPageTop />
  </div>
</template>
