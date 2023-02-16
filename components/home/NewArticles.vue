<script lang="ts" setup>
interface Props {
  slug: string
  path: string
  corner: string
  date: string
  subject: string
}

withDefaults(defineProps<Props>(), {
  slug: '',
  path: '',
  corner: '',
  date: '',
  subject: '',
})
</script>

<template>
  <dt>
    {{ date }}<span>{{ corner }}</span>
  </dt>
  <dd>
    <NuxtLink :to="`/${path}/${slug}`">{{ subject }}</NuxtLink>
  </dd>
</template>
