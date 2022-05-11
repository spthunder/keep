<template>
  <div class="wrapper">
    <el-table
        :data="tableData"
        style="width: calc(100vw - 200px)">
      <el-table-column
          prop="name"
          label="项目名称"
          align="center"
          min-width="160">
      </el-table-column>
      <el-table-column
          prop="type"
          label="记时类型"
          align="center"
          min-width="160">
      </el-table-column>
      <el-table-column
          prop="duration"
          label="时长(min)"
          align="center"
          min-width="160">
      </el-table-column>
      <el-table-column
          label="操作"
          align="center"
          fixed="right"
          min-width="160">
        <template slot-scope="scope">
          <el-tooltip  effect="dark" content="开始" placement="top-end">
            <el-button type="danger" icon="el-icon-video-play" size="mini"></el-button>
          </el-tooltip>
          <el-tooltip  effect="dark" content="编辑" placement="top">
            <el-button type="danger" icon="el-icon-edit-outline" size="mini"></el-button>
          </el-tooltip>
          <el-tooltip  effect="dark" content="删除" placement="top">
            <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-button id="new" plain type="danger" >新建任务</el-button>

    </div>


  </div>
</template>

<script>
export default {
  name: "toDoList",
  data(){
    return{
      tableData: [
        {
          name: '学习js',
          type: '正向记时',
          duration: '2a1',
        },
        {
          name: 'electron开发',
          type: '倒计时',
          duration: '90',
        },

      ],
    }
  }
}
</script>

<style scoped lang="scss">
.footer{
  width: 100%;
  margin-top: 5px;
  position: relative;
  #new{
    position: absolute;
    display: block;
    top: 0;
    right: 10px;
  }

}

</style>