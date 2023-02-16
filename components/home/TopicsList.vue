<script lang="ts" setup>
import ToListBtn from '~/components/home/ToListBtn.vue'
import { listContentsStore } from '~/composables/state'
import { Api } from '~/composables/api'
const listContents = listContentsStore('topics_category')
const api: Api = new Api()
const { data: result } = await useFetch(api.getUrl(), {
  query: {
    cnt: 3,
  },
})
listContents.setList(result)
const resultContentsList: any = listContents.state.map((d: any) => {
  return {
    slug: d.slug,
    subject: d.subject,
    headline: d.headline,
    thumbnail_url: d.thumbnail,
  }
})
</script>

<template>
  <section class="bg1">
    <h2>Topics</h2>

    <div class="list-container">
      <div
        v-for="data in resultContentsList"
        :key="data"
        class="list blur blurstyle"
      >
        <NuxtLink :to="`${data.slug}`">
          <figure>
            <img alt="" :src="data.thumbnail_url" />
          </figure>
          <div class="text">
            <h4>{{ data.subject }}</h4>
            <p style="color: black">{{ data.headline }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>

    <ToListBtn />
  </section>
</template>
