import { createApp } from 'vue';
import { createStore} from 'vuex'

import App from './App.vue';

const store = createStore({
  state(){
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  // always use mutations for manipulating state.
  mutations:{
    // do not call  mutations directly in components.
    addOne(state){

        state.counter = state.counter +2;


    },
    // mutations can take a payload.
    increase(state, payload){
      state.counter = state.counter + payload.value;
    },
    setAuth(state, payload){
      state.isLoggedIn = payload.isAuth
    }
  },
  actions:{
    // use actions for asynchronous code.
    addOne(context){
      setTimeout(() => {
      context.commit('addOne')
      },2000)
    },
    login(context){
      context.commit('setAuth', {isAuth: true})
    },
    logout(context){
      context.commit('setAuth', {isAuth: false})
    }

  },
  getters: {
    // all getter methods get two arguments, current state and other getters
    finalCounter(state){
        return state.counter * 3;
    },
    normalizedCounter(_, getters){
        const finalCounter = getters.finalCounter;
        if(finalCounter < 0){
          return 0;
        }
        if (finalCounter > 100){
          return 100;
        }
        return finalCounter
    },
    userIsAuthenticated(state){
      return state.isLoggedIn;
    }
  },
})

const app = createApp(App);
app.use(store);

app.mount('#app');
