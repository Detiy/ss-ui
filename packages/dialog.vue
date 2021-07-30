<template>
    <transition name="dialog">

  <div class="cc-dialog__wrapper" v-show="visible" >
    <div class="cc-dialog" :style="{width,'margin-top':top}">
      <div class="cc-dialog__header">
        <slot name="title">
          <span class="dd-dialog__title">{{ title }}</span>
        </slot>
        <button class="cc-dialog__headerbtn">
          <span class="cc-icon-close" @click="handleClose">x</span>
        </button>
      </div>
      <div class="cc-dialog__body">
        <slot></slot>
      </div>
      <div class="cc-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        
      </div>
    </div>
  </div>
    </transition>

</template>
<script>
export default {
  name: "CcDialog",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods:{
      handleClose(){
          this.$emit('close',false);
      }
  }
};
</script>
<style lang="less" scoped>
.cc-dialog__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  margin: 0;
  z-index: 2021;
  background: rgba(0, 0, 0, 0.5);
  .cc-dialog { 
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &__header {
      padding: 20px 20px 10px;
      .cc-dialog__tittle {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .cc-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .cc-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-enter-active{
  animation:run .5s;
}
@keyframes run {
  0%{
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>