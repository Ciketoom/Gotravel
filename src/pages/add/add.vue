<template>
 <div>
   <mt-header title="发布游记">
    <router-link to="/home" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button slot="right" to="/found">发布</mt-button>
  </mt-header>
  <div class="title"><input type="text" placeholder="请输入标题" v-model="title"></div>
  <mt-field placeholder="请输入游记内容" type="textarea" rows="4" v-model="content"></mt-field>
  <div class="upload"><img src="http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg" alt=""></div>
  <div class="upload"><i class="iconfont icontianjia"></i></div>
  <div>
    <mt-button  size="small" type="danger" @click="openPicker('go')">出发时间:{{godate}}</mt-button>
    <mt-button  size="small" type="danger" @click="openPicker('to')">结束时间:{{todate}}</mt-button>
  </div>
    <mt-datetime-picker
    ref="picker"
    v-model="pickerVisible"
    type="date"
    year-format="{value} 年"
    month-format="{value} 月"
    date-format="{value} 日"
    @confirm="handleConfirm('go')">
  </mt-datetime-picker>
  <mt-datetime-picker
    ref="picker1"
    v-model="pickerVisible1"
    type="date"
    year-format="{value} 年"
    month-format="{value} 月"
    date-format="{value} 日"
    @confirm="handleConfirm('to')">
  </mt-datetime-picker>
 </div>
</template>

<script>
export default {
  name: 'Found',
  data() {
    return {
      title:'',
      content:'',
      pickerVisible:'',
      pickerVisible1:'',
      godate:'',
      todate:''
    };
  },
  watch: {

  },
  methods:{
    openPicker(e) {
      if(e=='go'){
        this.$refs.picker.open();
      }else if(e=='to'){
        this.$refs.picker1.open();
      }    
    },
    handleConfirm(e){
      console.log(e)
      if(e=='go'){
        var d =new Date(this.pickerVisible);
        this.godate =d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); 
      }else if(e=='to'){
        var c =new Date(this.pickerVisible1);
        this.todate =c.getFullYear() + '-' + (c.getMonth() + 1) + '-' + c.getDate(); 
      }
    },
    
    sendtravel(){
      console.log(this.date)
    }, 
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .upload
    display :inline-block
    width :1.5rem 
    height :1.5rem
    line-height :1.5rem
    text-align :center
    border: 1px dashed #666
    border-radius :.1rem
    margin :0 0 .2rem .2rem 
    img 
     width :100%
     height :100%
    i
     font-size .5rem
  .mint-button--danger
    background-color:$bgColor
    margin :0 .2rem
  .mint-header
    background-color:$bgColor
    height :1rem
    line-height :1rem
  .title 
    height :.7rem
    line-height :.7rem
    text-align :center
    border:1px solid $bgColor
    border-radius :.4rem
    width :90%
    margin:.2rem auto
    input 
      width :80%
      padding-right :.5rem
      height :.5rem
      font-size :.35rem
</style>