<template>
  <div>
    <h1>请注册</h1>
    <span>姓名</span>
    <input v-model="username" name="username"/><br><br>
    <span>手机</span>
    <input v-model="phone" name="phone"/><br><br>
    <button>注册</button>

  </div>

</template>

<script>
    export default {
        name: "user-register",
      data(){
          return{
            username:"",
            phone:""


          }
      }
    }
</script>

<style>

</style>
