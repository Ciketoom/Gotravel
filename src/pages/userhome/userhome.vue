<template>
 <div class="userhome">
    <div class="userhome-top">
        <div class="left">
            <img src="http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg" alt="头像">
        </div>
        <div class="right">
            <h1>Hello</h1>
            <div class="zhong">
                关注  <span>87</span>   |   粉丝  <span>976</span>
            </div>
            <p>中国--北京</p>
        </div>
        
    </div>
    <div class="userhome-bottom">
        <mt-navbar v-model="selectedhome">
            <mt-tab-item id="1">我的游记</mt-tab-item>
            <mt-tab-item id="2">我的收藏</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selectedhome">
            <div ref="userhome" class="uhmain">
                <mt-tab-container-item id="1">
                    <div class="bottom-main">
                        <div class="time-tile">
                            <span>2019</span>
                            <span>06/12</span>
                            <h1>欢乐谷--游记f大方过分的好地方dgdfsh地方给第三方好地方</h1>
                        </div>
                        <div class="tj-img">
                            <li class="img-one">
                                <img src="https://imgs.qunarzz.com/sight/p0/1912/8e/8e363c082affa93da3.water.jpg_710x360_3def7871.jpg" alt="风景照">
                            </li>
                            <li class="img-one">
                                <img src="https://img1.qunarzz.com/travel/d1/1411/a8/a8ca5343675230bb213a9cdb.jpg_200x150x95_8ff97134.jpg" alt="风景照">
                            </li>  
                            <li class="img-one">
                                <img src="https://img1.qunarzz.com/travel/d2/1411/eb/eb091e12e862cba7213a9cdb.jpg_200x150x95_323e5d36.jpg" alt="风景照">
                            </li>   
                        </div>
                    </div>
                    <div class="bottom-main">
                        <div class="time-tile">
                            <span>2018</span>
                            <span>04/27</span>
                            <h1>故宫--东方宫殿建筑代表，世界宫殿建筑典范</h1>
                        </div>
                        <div class="tj-img">
                            <li class="img-one">
                            <img src="http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg" alt="风景照">
                            </li>                       
                        </div>
                    </div>
                    <div class="bottom-main">
                        <div class="time-tile">
                            <span>2017</span>
                            <span>11/02</span>
                            <h1>水立方--中国的荣耀，阳光下的晶莹水滴</h1>
                        </div>
                        <div class="tj-img">
                            <li class="img-one">
                            <img src="https://img1.qunarzz.com/travel/d8/1604/12/a5f27a770978c9f7.jpg_200x150x95_929617bf.jpg" alt="风景照">
                            </li>
                            
                            <li class="img-one">
                                <img src="http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg" alt="风景照">
                            </li>   
                        </div>
                    </div>
                </mt-tab-container-item>
            </div>
            <div ref="userhometwo" class="uhmain">
                <div class="bcollect">
                <mt-tab-container-item id="2">
                    <div class="usercollectone">
                        <img src="https://img1.qunarzz.com/travel/d4/1808/c6/1430abe228166ab5.jpg_200x150x95_ac284b2d.jpg" alt="风景照">
                        <div class="cltitle">
                            <h1>快速的减肥搜到把经东方红过电风扇的水电费和反光镜适房</h1>
                        </div>
                    </div>
                    <div class="usercollectone">
                        <img src="https://img1.qunarzz.com/travel/d9/1711/dc/cc66d18f03b156b5.jpg_200x150x95_8e538506.jpg" alt="风景照">
                        <div class="cltitle">
                            <h1>快速的减肥搜到把经东方红过电风扇的水电费和反光镜适房</h1>
                        </div>
                    </div>
                    <div class="usercollectone">
                        <img src="https://img1.qunarzz.com/travel/d6/1410/24/34a0ed8cc2e53eb9ffffffffc8d65eac.jpg_200x150x95_aa4c99e6.jpg" alt="风景照">
                        <div class="cltitle">
                            <h1>快速的减肥搜到把经东方红过电风扇的水电费和反光镜适房</h1>
                        </div>
                    </div>
                    <div class="usercollectone">
                        <img src="https://img1.qunarzz.com/travel/d1/1411/a8/a8ca5343675230bb213a9cdb.jpg_200x150x95_8ff97134.jpg" alt="风景照">
                        <div class="cltitle">
                            <h1>快速的减肥搜到把经东方红过电风扇的水电费和反光镜适房</h1>
                        </div>
                    </div>
                </mt-tab-container-item>
                </div>
            </div>
        </mt-tab-container>
    </div>
    <div class="shezhi">
        <i class="iconfont iconshezhi"></i>
    </div>
 </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Userhome',
  data() {
    return {
      selectedhome:'1'
    };
  },
  mounted () {
    this.$nextTick(() => { 
        this.onescroll = new Bscroll(this.$refs.userhome, {}) 
        this.scroll = new Bscroll(this.$refs.userhometwo, {}) 
        console.log(this.scroll)
        console.log(this.onescroll)
    })
  },
  components: {
  },
  methods:{
      
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .mint-navbar
    border-radius : .5rem
    a
     color :#000 
  .mint-navbar .mint-tab-item.is-selected
    border-bottom: 2px solid $bgColor
    color: $bgColor
  .mint-tab-container-item
    padding-bottom :2.5rem
  .userhome
    background :$bgColor
    width: 100%
    height: 100%
    .shezhi
     position : absolute
     top :.5rem
     right :.5rem
     i 
      font-size :.5rem
      color :#fff
    .userhome-top
     height: 3.5rem
     display: flex
     justify-content :center
     align-items :center
     flex-direction : row
     .left
      width :1.5rem
      height :1.5rem
      margin : .9rem .5rem
      border: 3px solid #77DDB4
      border-radius 50%
      img 
       width 100%
       height 100%
       border-radius 50%
     .right
       flex:1
       display : flex
       justify-content :space-around
       align-items : flex-start
       flex-direction : column
       color : #fff
       .zhong
         margin .2rem 0
    .userhome-bottom
     background :#fff
     border-radius : .5rem  
     min-height : 10rem
     padding-bottom:1.5rem
     .uhmain
      overflow :hidden 
      height :10rem 
      .bcollect
       .usercollectone
        position :relative
        padding : .15rem .2rem
        text-align :center
        height :3rem
        img
         width :6rem
         height : 3rem
         border-radius :.4rem
        .cltitle
          position :absolute
          margin:0 auto
          left:50%
          transform :translateX(-50%)
          border-bottom-left-radius :.4rem
          border-bottom-right-radius :.4rem
          top:75%
          width :93.5%
          background : rgba(0,0,0,0.7);
          h1
           padding : .2rem .3rem
           font-weight : 500
           max-width : 6rem
           color :#fff
           ellipsis()   
      .bottom-main 
        display : flex
        justify-content :center
        align-items : flex-start
        flex-direction : column   
        .time-tile
          padding-left : .4rem
          padding-top : .4rem
          h1
           padding : .2rem .3rem
           font-weight : 500
           margin-left : .3rem
           max-width : 6rem
           ellipsis()
         span:nth-child(1)
             font-size : .5rem
             font-weight : 800
         .tj-img
          padding : .15rem 0
          margin : 0 .3rem
          overflow hidden
          border-bottom : 1px solid $bgColor
          .img-one
           float : left
           list-style:none
           margin : 0 .15rem 
           width :2rem
           height : 2rem
           img
            width : 100%
            height : 100%
            border-radius : .15rem
</style>
