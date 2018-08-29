<template>
  <div id="app">
    <button @click="minus()">-</button>
    {{$store.state.count}}
    <button @click="add()">+</button>
    <p>奇偶数：{{$store.getters.val}}</p>
  </div>
</template>

<script>
 import * as Types from './store/mutation-types.js';
export default {
  data(){
    return {count:0}
  },
  methods:{
    add(){
      this.$store.commit(Types.ADD,3)
    },
    minus(){
      this.$store.commit(Types.MiNUS)
    }
  }
}
</script>

<style>

</style>
