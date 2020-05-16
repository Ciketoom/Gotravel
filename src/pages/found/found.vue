<template>
 <div class="f-main">
   <div class="f-top">
     <ul class="top-tab">
       <li v-bind:class="{'select':selected=='附近'}" @click="select('fj')">附近</li>
       <li v-bind:class="{'select':selected=='推荐'}" @click="select('tj')">推荐</li>
       <li v-bind:class="{'select':selected=='关注'}" @click="select('gz')">关注</li>
     </ul>
   </div>
   <div class="f-center">
     <input type="search" placeholder="输入相关内容">
     <span class="iconfont iconziyuan"></span>
   </div>
   <div class="f-bmain" ref="bmain">
    <div class="f-bottom">
      <div class="f-bleft">
        <ul class="f-blmain">
          <li class="f-blone">
              <div class="f-boneimg">
              <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/5519072527219e5797721cb488096cc3.jpg_200x150x95_17e07dc7.jpg" alt="df">
                <div class="f-bonelocation">
                  <i class="iconfont iconlocation"></i>
                  <span>圣歌迪亚</span>
                </div>
              </div>
              <h1>经历过就两块多放假过水电费</h1>
              <div class="f-blonetou">
                <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/a64a16a0a836042c9ede1f86dc1eee2a.jpg_200x150x95_afbad823.jpg" alt="tou">
                <span>Jack</span>
                <span class="iconfont iconheart-regular"></span>
                <span>214</span>
              </div>
          </li>
          <li class="f-blone">
              <div class="f-boneimg">
              <img src="https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/77eb36582b01a6d8ef0029b1bbbfaa84.jpg_200x150x95_d0790a38.jpg" alt="df">
                <div class="f-bonelocation">
                  <i class="iconfont iconlocation"></i>
                  <span>广州</span>
                </div>
              </div>
              <h1>经历过就两块多放假过水电费</h1>
              <div class="f-blonetou">
                <img src="https://img1.qunarzz.com/travel/d2/1611/a5/3c43a57fad19b5b5.png_200x150x95_a33a0fe1.png" alt="tou">
                <span>Jack</span>
                <span class="iconfont iconheart-regular"></span>
                <span>214</span>
              </div>
          </li>
          <li class="f-blone">
              <div class="f-boneimg">
              <img src="https://img1.qunarzz.com/travel/d4/1808/c6/1430abe228166ab5.jpg_200x150x95_ac284b2d.jpg" alt="df">
                <div class="f-bonelocation">
                  <i class="iconfont iconlocation"></i>
                  <span>广州</span>
                </div>
              </div>
              <h1>经历过就两块多放假过水电费</h1>
              <div class="f-blonetou">
                <img src="https://imgs.qunarzz.com/sight/p0/1912/8e/8e363c082affa93da3.water.jpg_710x360_3def7871.jpg" alt="tou">
                <span>Jack</span>
                <span class="iconfont iconheart-regular"></span>
                <span>214</span>
              </div>
          </li>
        </ul>
      </div>
      <div class="f-bleft">
        <ul class="f-blmain">
          <li class="f-blone">
              <div class="f-boneimg" style="height:3.5rem">
              <img src="https://img1.qunarzz.com/travel/d6/1611/79/d50ef01fe69d4db5.jpg_200x150x95_31839669.jpg" alt="df">
                <div class="f-bonelocation">
                  <i class="iconfont iconlocation"></i>
                  <span>广州</span>
                </div>
              </div>
              <h1>经历过就两块多放假过水电费</h1>
              <div class="f-blonetou">
                <img src="https://img1.qunarzz.com/travel/d2/1506/22/5e46c15fd2b5b9.jpg_200x150x95_b585b4de.jpg" alt="tou">
                <span>Jack</span>
                <span class="iconfont iconheart-regular"></span>
                <span>999+</span>
              </div>
              <li class="f-blone">
              <div class="f-boneimg" style="height:3.5rem">
              <img src="https://img1.qunarzz.com/travel/d1/1411/a8/a8ca5343675230bb213a9cdb.jpg_200x150x95_8ff97134.jpg" alt="df">
                <div class="f-bonelocation">
                  <i class="iconfont iconlocation"></i>
                  <span>广州</span>
                </div>
              </div>
              <h1>经历过就两块多放假过水电费</h1>
              <div class="f-blonetou">
                <img src="https://img1.qunarzz.com/travel/d6/1410/24/34a0ed8cc2e53eb9ffffffffc8d65eac.jpg_200x150x95_aa4c99e6.jpg" alt="tou">
                <span>Jack</span>
                <span class="iconfont iconheart-regular"></span>
                <span>999+</span>
              </div>
              <li class="f-blone">
              <div class="f-boneimg" style="height:3.5rem">
              <img src="https://img1.qunarzz.com/travel/d7/1807/ee/3524af55a64583b5.jpg_200x150x95_5c68ed80.jpg" alt="df">
                <div class="f-bonelocation">
                  <i class="iconfont iconlocation"></i>
                  <span>广州</span>
                </div>
              </div>
              <h1>经历过就两块多放假过水电费</h1>
              <div class="f-blonetou">
                <img src="https://img1.qunarzz.com/travel/d9/1808/e9/c1bcd1156f2270b5.jpg_200x150x95_421dabac.jpg" alt="tou">
                <span>Jack</span>
                <span class="iconfont iconheart-regular"></span>
                <span>999+</span>
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
  name: 'Found',
  data() {
    return {
      selected:'推荐'
    };
  },
  mounted () {
    this.$nextTick(() => { 
        this.scroll = new Bscroll(this.$refs.bmain, {
        }) 
    })
  },
  watch: {
  
  },
  methods:{
    select(e){
      if(e=='fj'){
        this.selected='附近'
      }else if(e=='tj'){
        this.selected='推荐'
      }else if(e=='gz'){
        this.selected='关注'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
   .select
     color: $bgColor
   .f-main
    display :flex
    justify-content :space-around
    flex-direction :column
    .f-top
      height : 1.5rem
      line-height :1.5rem
      text-align : center
      li
        list-style :none
        font-weight :500
        font-size :.4rem
        display :inline-block
        padding :.15rem .4rem
    .f-center 
      height :.7rem
      line-height :.7rem
      text-align :center
      border:1px solid $bgColor
      border-radius :.4rem
      width :90%
      margin:.2rem auto
      input 
        width :70%
        padding-right :.5rem
        height :.5rem
        padding-bottom :.1rem
      i 
        font-size :.4rem
    .f-bmain
      height :10rem
      overflow: hidden
      .f-bottom
        padding :0 .2rem 1rem
        display :flex
        justify-content :space-around
        flex-direction :row
        .f-bleft
          display :flex
          justify-content :flex-start
          flex-direction :column
          width : 43%
          .f-blone
            display :flex
            justify-content :flex-start
            flex-direction :column
            i   
              font-size :.3rem
            .f-boneimg
              position:relative
              width :100%
              height :4rem
              padding-top:.1rem
              img
                width :100%
                height :100%
                border-radius :.2rem
              .f-bonelocation
                position:absolute
                padding :.05rem .1rem
                top : 85%
                left : .2rem              
                height :.4rem
                line-height :.3rem
                font-size : .2rem
                text-align : center
                border-radius :.3rem
                color :#fff
                font-weight :500
                background : rgba(0,0,0,0.6);
                ellipsis()
                max-width :2rem
            h1
              padding : .2rem .1rem .1rem
              ellipsis()
              max-width :3.5rem
            .f-blonetou
              color : #999
              img 
                width :.4rem
                height :.4rem
                border-radius :50%
              span:nth-child(2)  
                font-weight : 400
                font-size :.35rem
                color : #000
              span:nth-child(3)  
                padding-left :20%
</style>
