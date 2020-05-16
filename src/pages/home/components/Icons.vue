<template>
<div class="icons">
  <h1 class="title">热门美食</h1>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div
        class="icon"
        v-for="item of page"
        :key="item.id"
      >
        <img class="icon-img-content" :src="item.imgUrl"/>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 4)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    
  .icons
    margin-top: .15rem
    .title
        font-size: .3rem
        font-weight :600
        padding-left: 42%
        padding-top: .1rem
    .icon
      position:relative
      float: left
      width: 45%
      height: 1.6rem
      padding: .15rem
      .icon-img-content
        height:100%
        width 100%
        border-radius: .3rem
        display: block
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: -.1rem
        width 85%
        height: .44rem
        margin-left:.4rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
