<script lang="ts" setup>
import { RuntimeConfig } from '@nuxt/schema'

interface ApiDetail {
  main_contents: string[]
}

const config: RuntimeConfig = useRuntimeConfig()
const route: any = useRoute()

const slug: string = route.params.slug
const url = `${config.apiEndpoint}/rcms-api/15/contents/details/${slug}`
const { data: result } = await useFetch(url)
const v: any = result.value
const detail: ApiDetail = v.details
</script>

<template>
  <section>
    <div v-for="data in detail.main_contents" :key="data" v-html="data"></div>
  </section>
</template>
