<template>
 <div>
   <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
          <i class="iconfont iconshouye"></i>
          <p>首页</p>
      </mt-tab-item>
      <mt-tab-item id="发现">
          <i class="iconfont iconu138"></i>
          <p>发现</p>
      </mt-tab-item>
      <mt-tab-item id="添加">
          <div class="tianjia">
            <i class="iconfont icontianjia"></i>
          </div>
      </mt-tab-item>
      <mt-tab-item id="消息">
          <i class="iconfont iconwodexiaoxi"></i>
          <p>消息</p>
      </mt-tab-item>
      <mt-tab-item id="我的">
            <i class="iconfont iconwode"></i>
            <p>我的</p>
      </mt-tab-item>
    </mt-tabbar>
    
 </div>
</template>

<script>
export default {
  name: 'HomeTab',
  data() {
    return {
      selected: sessionStorage.getItem('selected')? JSON.parse(sessionStorage.getItem('selected')):'首页',
    };
  },
  mounted(){

  },
  watch: {
    selected(newval, oldVal){
      sessionStorage.setItem('selected', JSON.stringify(newval))
      switch (newval) {
          case '首页':
            this.$router.replace({
              path:'/home'
            })
            break;
          case '发现':
            this.$router.replace({
              path:'/found'
            })
            break;
          case '添加':
            this.$router.replace({
              path:'/add'
            })
            break;
          case '消息':
            this.$router.replace({
              path:'/message'
            })
            break;
          case '我的':     
            this.$router.replace({
              path:'/userhome'
            })
            break;
        }
    }
  },
  methods:{
    
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
  i 
    font-size :.45rem
  .tianjia
   position :fixed
   bottom :.45rem
   left :50%
   transform :translateX(-50%)
   z-index : 1
   border :6px solid $bgColor
   border-radius : 50%
   width : .9rem
   height : .9rem
   line-height :.9rem
   background :#fff
   text-align :center
  .is-fixed 
    font-weight : 400
    background : #ffffff
    border-top :1px solid #ccc
   .mint-tab-item
    padding: .2rem 0
    p
      padding: .1rem
    i 
      padding :.1rem
   .is-selected
    background:none!important
    color:$bgColor!important
   a
    color :#333333 
   a:nth-child(3)
    color :$bgColor
</style>
