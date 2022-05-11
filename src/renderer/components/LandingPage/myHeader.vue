<template>
  <div class="windowOption" >
    <img src="@/assets/icon/lzuixiaohua.png" id="min" @click="min">
    <img src="@/assets/icon/lzuidahua_1.png" id="max"  @click="max">
    <img src="@/assets/icon/lguanbi.png" id="close" @click="close">
  </div>
</template>

<script>
export default {
  name: "myHeader",
  data() {
    return {
      isMax: false,
      maxIcon: '@/assets/icon/lzuidahua_1.png',
      maxIconHover: '@/assets/icon/zuidahua_1.png',
    };
  },
  methods:{
    // 最小化
    min() {
      this.$electron.ipcRenderer.send('window-min');
    },
    // 最大化
    max() {
      this.$electron.ipcRenderer.send('window-max');
      if (!this.isMax) {
        this.maxIcon = '@/assets/icon/lzuidahua.png';
        this.maxIconHover = '@/assets/icon/zuidahua.png';
        this.isMax = true;
      } else {
        this.maxIcon = '@/assets/icon/lzuidahua_1.png';
        this.maxIconHover = '@/assets/icon/lzuidahua_1.png';
        this.isMax = false;
      }
    },
    // 关闭
    close() {
      this.$electron.ipcRenderer.send('window-close');
    },
  }
}
</script>

<style scoped lang="scss">
.windowOption{
  position: absolute;
  right: 24px;
  height: 54px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-app-region: no-drag;
/*如果不设置将无法触发点击事件*/
#min, #max, #close{
  height: 20px;
  width: 20px;
  line-height: 54px;
}
#min:hover{
  content: url("../../assets/icon/zuixiaohua.png");
}
#max:hover{
  /*content: url("../../../static/icon/zuidahua_1.png");*/

}
#close:hover{
  content: url("../../assets/icon/guanbi.png");
}
}
</style>