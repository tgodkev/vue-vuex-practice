<template>
<button @click='addOne'>
  add2
</button>
</template>

<script>
export default {
  methods:{
    addOne(){
      // commit is built in method for vuex
      this.$store.dispatch('addOne');
    }
  }
};
</script>

<style scoped>

</style>
