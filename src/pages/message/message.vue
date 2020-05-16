<template>
  <div>
   <div class="m-main">
     <div class="m-title"><h1>消息</h1></div>
     <div class="m-size">
       <div class="m-sizeone">
         <div class="m-sizeimg" v-bind:class="{'mselect':mselected=='通知'}" @click="mselect('tz')">
           <i class="iconfont icontongzhi"></i>
          </div>
         <h2>通知</h2>
       </div>
       <div class="m-sizeone" >
         <div class="m-sizeimg" v-bind:class="{'mselect':mselected=='私信'}" @click="mselect('sx')">
           <i class="iconfont iconpinglun"></i>
         </div>
         <h2>私信</h2>
       </div>
       <div class="m-sizeone">
         <div class="m-sizeimg" v-bind:class="{'mselect':mselected=='评论'}" @click="mselect('pl')">
           <i class="iconfont iconpinglun1"></i>
         </div>
         <h2>评论</h2>
       </div>
     </div>
     <div class="m-list" >
       <div class="wrappers" ref="wrapper">
         <ul class="content">
          <li class="m-lists">
            <div class="tou">
              <img src="https://qcommons.qunar.com/headshot/headshotsById/136554720.png?m&ssl=true" alt="头像">
            </div>
            <div class="right">
              <span>法国号</span>
              <span>10:25</span>
              <p>你上课老地方价格昆仑山口附近</p>
            </div>
          </li>
          <li class="m-lists">
            <div class="tou">
              <img src="https://imgs.qunarzz.com/sight/p0/1912/8e/8e363c082affa93da3.water.jpg_710x360_3def7871.jpg" alt="头像">
            </div>
            <div class="right">
              <span>巴格达</span>
              <span>10:25</span>
              <p>你上课老地方价格昆仑山口附近</p>
            </div>
          </li>
          <li class="m-lists">
            <div class="tou">
              <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/ca1c147eed3d07df3c87a4bb86dc8cc9.jpg_200x150x95_996945f4.jpg" alt="头像">
            </div>
            <div class="right">
              <span>巴但是</span>
              <span>10:25</span>
              <p>你上课老地方价格昆仑山口附近</p>
            </div>
          </li>
          <li class="m-lists">
            <div class="tou">
              <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/3aa0cdba0fe07a9723fc734cb4fc109a.jpg_200x150x95_edeba954.jpg" alt="头像">
            </div>
            <div class="right">
              <span>而无法的</span>
              <span>10:25</span>
              <p>你上课老地方价格昆仑山口附近</p>
            </div>
          </li>
          <li class="m-lists">
            <div class="tou">
              <img src="https://qcommons.qunar.com/headshot/headshotsById/275263181.png?m&ssl=true" alt="头像">
            </div>
            <div class="right">
              <span>好机会的地位</span>
              <span>10:25</span>
              <p>你上课老地方价格昆仑山口附近</p>
            </div>
          </li>
          <li class="m-lists">
            <div class="tou">
              <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/3216d00de984ed0433b4d3fc97f24e5f.jpg_200x150x95_a823ee44.jpg" alt="头像">
            </div>
            <div class="right">
              <span>儿童</span>
              <span>10:25</span>
              <p>你上课老地方价格昆仑山口附近</p>
            </div>
          </li>
          <li class="m-lists">
            <div class="tou">
              <img src="https://qcommons.qunar.com/headshot/headshotsById/150514887.png?m&ssl=true" alt="头像">
            </div>
            <div class="right">
              <span>巴格达</span>
              <span>10:25</span>
              <p>你上课老地方价格昆仑山口附近</p>
            </div>
          </li>
        </ul> 
       </div>
     </div>
   </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Message',
  data() {
    return {
      mselected:'私信'
    };
  },
  mounted () {
    this.$nextTick(() => { 
        this.scroll = new Bscroll(this.$refs.wrapper, {
        }) 
    })
  },
  watch: {
  
  },
  methods:{
    mselect(e){
      if(e=='tz'){
        this.mselected='通知'
      }else if(e=='sx'){
        this.mselected='私信'
      }else if(e=='pl'){
        this.mselected='评论'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
   .mselect
    border:2px solid $bgColor!important
    color:$bgColor!important
   i 
    font-size :.4rem
   .m-main
    background :$bgColor
    width: 100%
    height: 100%
    display :flex
    justify-content :flex-start
    flex-direction : column
    .m-title
     margin :0 auto
     color :#fff
     font-size :.4rem
     padding:.4rem .2rem
     font-weight :400
    .m-size
      z-index :1
      width :90%
      background :#fff
      border-radius :.2rem
      border:1px solid #ccc
      display :flex
      justify-content :space-around
      margin :0 auto
      flex-direction : row
      .m-sizeone
        padding : .2rem
        text-align :center
        .m-sizeimg 
          border:2px solid #999
          border-radius :50%
          width :.9rem
          height :.9rem
          line-height :.9rem     
          color :#111
        h2
          font-weight :300
          padding :.15rem
    .m-list
     background :#fff
     position :relative
     padding-top:1.3rem
     top:-1rem
     .wrappers
      height :10rem
      overflow: hidden     
      .content
        background :#fff
        padding :.2rem .4rem
        display :flex 
        justify-content :flex-start
        flex-direction : column 
        padding-bottom:1.5rem
        .m-lists
          border-bottom: 1px solid #ccc
          height :1.5rem
          .tou
           float : left
           padding :.1rem
           width :1rem
           height :1rem 
           img   
            width :100%
            height :100%
            border-radius : 50%
          .right
            float : left
            padding:.1rem 
            width :75%
            padding : .15rem
            span:nth-child(1)
             font-size :.3rem
             font-weight :300
            span:nth-child(2)
             color:#ccc
             float :right
            p
             max-width :3.5rem
             color:#666
             padding:.3rem 0
             ellipsis()
</style>
