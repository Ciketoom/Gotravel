<template>
 <div class="header">
   <div class="header-left">
    <i class="iconfont iconziyuan"></i>
   </div>
   <div class="header-input">
     <input class="header-inputt" type="text" placeholder="请输入城市/景点/游玩主题">
   </div>
   <router-link to='/city'>
     <div class="header-right">
     {{this.city}}
     <span class="iconfont iconxiala"></span>
     </div>
   </router-link>
 </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
 .header
   display: flex
   height: .86rem
   background: $bgColor
   color: #fff
   .header-left
     width: .64rem
     float: left
     margin-top:.24rem
     margin-left .2rem
    i
      font-size :.45rem
     .back-icon
       text-align: center
       font-size: .4rem
       padding: 0.2rem
   .header-input
     flex: 1
     height: .64rem
     line-height: .58rem
     margin-top: .12rem
     margin-left: .2rem
     background: #fff
     color: #ccc
     border-radius: .3rem
     .header-inputt
        margin-left: .4rem
   .header-right
     min-width: 1.04rem
     margin-top: .28rem
     float: right
     padding: 0 .1rem
     text-align: center
     color: #fff
     .arrow-icon
       margin-top: .06rem
       margin-right: .1rem
       font-size: .24rem
       float: right
</style>/
