<template>
  <Tutorial />
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useDaerah } from '@/compositions'
export default defineComponent({
  name: 'IndexPage',
  setup () {
    const { fetchProvince } = useDaerah()

    fetchProvince()
    return {}
  }
})
</script>
