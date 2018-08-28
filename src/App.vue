<template>
  <div id="app">
    <button @click="minus()">-</button>
    {{$store.state.count}}
    <button @click="add()">+</button>
  </div>
</template>

<script>
export default {
  data(){
    return {count:0}
  },
  methods:{
    add(){
      this.$store.commit('add',3)
    },
    minus(){
      this.$store.commit('minus')
    }
  }
}
</script>

<style>

</style>
