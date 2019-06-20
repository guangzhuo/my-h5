<template>
  <div class="hello">
    <h1 class="abc">{{ msg }}</h1>
    <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
    <van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>  
<van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
    <div class="demoClass">
    </div>
  </div>
</template>

<script>
import { Button, Cell, CellGroup, Swipe, SwipeItem } from 'vant';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    'van-button': Button,
    'van-cell-group': CellGroup,
    'van-cell': Cell,
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color: red;
  .abc{
    width:100%;
    height:300px;
    box-sizing: border-box;
    border: 1px solid blue;
  }
</style>
