<template>
<div>
  <input
    class="cc-input_inner"
    :class="{'is-disabled' : disabled}"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="handleInput"
  >
  </div>
</template>
<script>
export default {
  name: "CcInput",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  methods:{
      handleInput(e){
        this.$emit('input',e.target.value);
      }
  }
};
</script>
<style lang="less" scoped>
.cc-input_inner {
  background: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  &:focus {
    outline: none;
    border-color: #409eff;
  }
  &.is-disabled {
    background: #fff;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
</style>