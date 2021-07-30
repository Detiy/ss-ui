<template>
    <div class="cc-radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'CcRadioGroup',
    props:{
        value:null
    },
    provide(){
        return {
            radioGroup:this
        }
    }
}
</script>
<style lang="less" scoped>

</style>