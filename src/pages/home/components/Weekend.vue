<template>
  <div>
    <div class="title">去哪儿住呢</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        >
        <div item-img-wrapper>
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
    ul
      padding-bottom:1.5rem
    .title
      line-height: .8rem
      background: #eee
      text-indent: .2rem
      .item-img-wrapper
        height: 0
        overflow: hidden
        padding-bottom: 37.09%
    .item-img
      width: 100%
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
