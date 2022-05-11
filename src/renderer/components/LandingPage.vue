<template>
  <div id="wrapper">
    <div class="myHeader">
      <my-header></my-header>
    </div>
    <div class="content">
      <div class="menu">
        <nav-menu></nav-menu>
      </div>
      <router-view class="main"></router-view>
    </div>
  </div>
</template>

<script>
  import navMenu from './LandingPage/navMenu';
  import MyHeader from "./LandingPage/myHeader";
  export default {
    name: 'landing-page',
    components: {
      MyHeader,
      navMenu,
    },

    methods: {

    },
  };
</script>

<style lang="scss">
  $img: var(--hover);
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background-color: rgb(240,240,240);
    height: 100vh;
    width: 100vw;
    min-width: 700px;
    position: relative;
    overflow: hidden;
    .myHeader {
      position: fixed;
      right: 0;
      top: 0;
      width: 100%;
      height: 54px;
      line-height: 54px;
      background-color: rgb(236,65,65);
      /* 值为no-drag时不可拖拽 */
      -webkit-app-region: drag;

    }
    .content{
      margin-top: 54px;
      width: 100%;
      height: calc(100vh - 54px);
      display: flex;
      .menu{
        width: 200px;
      }
      .main{
        width: calc(100vw - 100px);
        height: 100%;
        background-color: #fff;
      }
    }
  }




</style>
