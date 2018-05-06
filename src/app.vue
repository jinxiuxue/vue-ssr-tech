<template>
    <div id="app">
      <div id="cover"></div>
      <Header/>
      <Todo/>
      <Footer/>
    </div>
</template>

<script>
import Header from './assets/todo/header.vue'
import Footer from './assets/todo/footer.jsx'
import Todo from './assets/todo/todo.vue'
export default {
  components:{
    Header,
    Footer,
    Todo,
  }
};
</script>

<style lang="less" scoped>
#app{
  position: absolute;
  top: 0;
  bottom:0;
  left:0;
  right: 0;
  background: url("./assets/images/index-bg.jpg") no-repeat;
  #cover{
    position: absolute;
    top: 0;
    bottom:0;
    left:0;
    right: 0;
    background: #ccc;
    opacity: 0.5;

  }
}
</style>