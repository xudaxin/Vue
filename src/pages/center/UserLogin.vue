<template>

    <div>

      <h1>登陆界面</h1>
      <span>用户名：</span>
      <input v-model="username" name="username"/><br><br>
      <span>密码：</span>
      <input v-model="password" name="password"/><br>
      <button @click="userlogin">登录</button>

    </div>

</template>

<script>
    export default {
        name: " UserLogin",
      data(){

          return{
            username:"",
            password:""
          }

      },
      methods:{
          userlogin:function () {


            this.service.get("/user/login",{

              params:{
                "username":this.username,
                "password":this.password

              }
            }).then(function (response) {
              console.log(response);
            })
              .catch(function (error) {
                console.log(error);
              });

          }
      }
    }
</script>

<style>

</style>
