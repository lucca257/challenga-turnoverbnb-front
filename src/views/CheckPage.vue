<template>
  <div class="justify-center" v-if="depositCheck">
    <CheckList />
  </div>
  <div class="justify-center" v-else>
    <CheckList />
  </div>
</template>

<script>
export default {
  name: "CheckPage",
  components: {
    'CheckList': () => import('@/components/check/ChecksListComponent'),
  },
  data () {
    return {
      depositCheck: false
    }
  },
}
</script>