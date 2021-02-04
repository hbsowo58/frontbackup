<template>
  <div>
    <Read_miracom />
  </div>
</template>

<script>
import Read_miracom from './Read_miracom.vue'
export default {
  components: { Read_miracom },
  name: 'Board_miracom',
  data () {
    return {
    }
  },
  updated() {
    this.$router.go(this.$router.currentRoute);
  },
}
</script>
