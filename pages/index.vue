<template>
  <div class="w-[300px] bg-slate-500">
    <h1>
      base button
    </h1>
  </div>
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
