<template>
  <div>
    <Read1 />
  </div>
</template>

<script>
import Read1 from './Read1.vue'
export default {
  components: { Read1 },
  name: 'Board1',
  data () {
    return {
    }
  },
  updated() {
    this.$router.go(this.$router.currentRoute);
  },
}
</script>
