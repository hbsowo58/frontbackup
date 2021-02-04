<template>
  <div>
    <ReadMiracom />
  </div>
</template>

<script>
import ReadMiracom from './ReadMiracom.vue'
export default {
  components: { ReadMiracom },
  name: 'Board-miracom',
  data () {
    return {
    }
  },
  updated() {
    // this.$router.go(this.$router.currentRoute);
  },
}
</script>
