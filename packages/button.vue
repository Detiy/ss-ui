<!--slot上不能绑定事件 通过像父组件传递事件-->
<template>
  <button class="cc-button" :class="[`cc-button--${type}`]" @click="handleClick" >
    <span><slot></slot></span>
  </button>
 
</template>
<script>
export default {
  name: "CcButton",
  props: {
    //props校验类型 详情见官方文档
    type: {
      type: String,
      default:'default'
    },
    // disabled: {
    //   type: Boolean,
    //   default:false
    // },
  },
  created() {
    console.log(this.type);
  },
  methods:{
    handleClick(e){
      this.$emit('click',e);
    }
  }
};
</script>
<style  scoped lang="less">
.cc-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.is-disabled{
  color:#fff;
  background: #333;
  border-color:#333;
  &:hover {
    color:#fff;
  background: #333;
  border-color:#333;
  }
}
}

.cc-button--primary{
  color:#fff;
  background: #409eff;
  border-color:#409eff;
   &:hover {
    color: #66b1ff;
    border-color: #66b1ff;
    background-color: #fff;
  }
}
.cc-button--success{
  color:#fff;
  background: #67c23a;
  border-color:#67c23a;
   &:hover {
    color: #85ce61;
    border-color: #85ce61;
    background-color: #fff;
  }
}
.cc-button--info{
  color:#fff;
  background: #909399;
  border-color:#909399;
   &:hover {
    color: #a6a9ad;
    border-color: #a6a9ad;
    background-color: #fff;
  }
}
.cc-button--warning{
  color:#fff;
  background: #e6a23c;
  border-color:#e6a23c;
   &:hover {
    color: #ebb563;
    border-color: #ebb563;
    background-color: #fff;
  }
}
.cc-button--danger{
  color:#fff;
  background: #f56c6c;
  border-color:#f56c6c;
   &:hover {
    color: #f78989;
    border-color: #f78989;
    background-color: #fff;
  }
}
</style>