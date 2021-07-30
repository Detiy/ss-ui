<template>
  <label class="cc-switch" :class="{'is-checked' : value}" @click="handleSwitch">
    <span class="cc-switch_core">
      <span class="cc-switch_button"></span>
    </span>
  </label>
</template>
<script>
export default {
  name: "CcSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleSwitch() {
      this.$emit("input", !this.value);
    },
  },
};
</script>
<style lang="less" scoped>
.cc-switch {
  display: inline-flex;
  align-item: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .cc-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    .cc-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background: #fff;
    }
  }
}
.cc-switch.is-checked {
  .cc-switch_core {
    border-color: #d9e623;
    background-color: #d9e623;
    .cc-switch_button {
      transform: translateX(20px);
    }
  }
}
</style>