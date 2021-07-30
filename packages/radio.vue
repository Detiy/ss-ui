<template>
  <label class="cc-radio" :class="{ 'is-checked': label === myValue }">
    <span class="cc-radio_input">
      <span class="cc-radio_inner"></span>
      <input
        class="cc-radio_original"
        type="radio"
        :value="label"
        v-model="myValue"
      />
    </span>
    <span class="cc-radio_label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "CcRadio",
  props: {
    label: {
      type: [String, Boolean, Number],
      default: "",
    },
    value: null,
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    myValue: {
      get() {
        return this.isGroup ? this.radioGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.radioGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isGroup() {
      //用于判断radio是否被radioGroup包裹
      return !!this.radioGroup;
    },
  },
  inject: {
    radioGroup: {
      default: "",
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.cc-radio {
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
  .cc-radio_input {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    .cc-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
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
    .cc-radio_original {
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
  .cc-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.cc-radio.is-checked {
  .cc-radio_input {
    .cc-radio_inner {
      border-color: #fffc40;
      background: #fffc40;
      &:after {
        transform: translate(-50% -50%) scale(1);
      }
    }
  }
}
</style>