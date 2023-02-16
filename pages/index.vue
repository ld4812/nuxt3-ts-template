<script lang="ts" setup>
import NewArticles from '~/components/home/NewArticles.vue'
import { Api } from '~/composables/api'
import { listContentsStore } from '~/composables/state'
const listContents = listContentsStore('index_category')
const api: Api = new Api()
const { data: result } = await useFetch(api.getUrl(), {
  query: {
    cnt: 10,
  },
})
listContents.setList(result)
const resultContentsList: any = listContents.state.map((d: any) => {
  return {
    slug: d.slug,
    path: d.contents_type_ext_col_01,
    corner: d.contents_type_nm,
    ymd: d.ymd,
    subject: d.subject,
    thumbnail_url: d.thumbnail,
  }
})
</script>

<template>
  <section>
    <h2>記事一覧</h2>
    <dl id="new">
      <NewArticles
        v-for="data in resultContentsList"
        :key="data"
        :slug="data.slug"
        :path="data.path"
        :corner="data.corner"
        :date="data.ymd"
        :subject="data.subject"
      />
    </dl>
  </section>
</template>
