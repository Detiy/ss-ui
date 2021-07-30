<template>
  <label class="cc-checkbox" :class="{ 'is-checked': isChecked }">
    <span class="cc-checkbox_input">
      <span class="cc-checkbox_inner"></span>
      <input
        class="cc-checkbox_original"
        type="checkbox"
        :name="name"
        :value="label"
        v-model="myValue"
      />
    </span>
    <span class="cc-checkbox_label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "CcCheckbox",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  computed: {
    myValue: {
      get() {
        return this.isGroup ? this.checkboxGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.checkboxGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isGroup() {
      //用于判断checkbox是否被checkboxGroup包裹
      return !!this.checkboxGroup;
    },
    isChecked(){
        //如果是group包裹,判断label是否在myValue中
        //如果没有 直接使用myValue
        return this.isGroup ? this.myValue.includes(this.label) : this.myValue;
    }
  },
  inject: {
    checkboxGroup: {
      default: "",
    },
  },
};
</script>
<style lang="less" scoped>
.cc-checkbox {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  .cc-checkbox_input {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    .cc-checkbox_inner {
      border: 1px solid #dcdfe6;
      //   border-radius: 100%;
      width: 14px;
      height: 14px;
      background: #fff;
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50% -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .cc-checkbox_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .cc-checkbox_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.cc-checkbox.is-checked {
  .cc-checkbox_input {
    .cc-checkbox_inner {
      border-color: #fffc40;
      background: #fffc40;
      &:after {
        transform: translate(-50% -50%) scale(1);
      }
    }
  }
}
</style>