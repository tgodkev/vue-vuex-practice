<template>
  <base-container title="Vuex" v-if='isAuth'>
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click='addOne'>Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title='Auth'>
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from '@/components/TheCounter';
import ChangeCounter from '@/components/ChangeCounter';
import FavoriteValue from '@/components/FavoriteValue';
import UserAuth from '@/components/UserAuth';
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    isAuth(){
      return this.$store.getters.userIsAuthenticated;
    }
  },
  methods:{
    addOne(){
      // commit can take a second argument as the payload.
      this.$store.dispatch('addOne', {value: 10 } )
      // alternative way to commit.
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10,
      // })
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
