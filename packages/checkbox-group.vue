<template>
    <div class="cc-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'CcCheckboxGroup',
    props:{
        value:{
            type:Array
        }
    },
    provide(){
        return {
            checkboxGroup:this
        }
    }
}
</script>
<style lang="less" scoped>

</style>