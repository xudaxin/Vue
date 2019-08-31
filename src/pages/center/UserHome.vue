<template>
<div>

  <span>跳转成功！！！！！！！！！</span>

  <button @click="this.setUserInfo.username('lisi')">修改</button>


{{this.getUser.username}}}


</div>
</template>

<script>

  import { mapGetters } from 'vuex'


  import { mapActions } from 'vuex'

    export default {
        name: "UserHome",
      computed:{
        ...mapGetters(['getUser'])
      },
      methods:{
          xiu:function () {

          },
            ...mapActions(['setUserInfo'])  //调用action中的方法
      }
    }
</script>


<style >

</style>
