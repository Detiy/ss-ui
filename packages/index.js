//整个包的入口
//定义install方法,接收Vue作为参数,如果使用use注册插件,则所有的组件都将被注册

import Button from './button.vue'
import Dialog from './dialog.vue'
import Input from './input.vue'
import Checkbox from './checkbox.vue'
import CheckboxGroup from './checkbox-group.vue'
import Radio from './radio.vue'
import RadioGroup from './radio-group.vue'
import Switch from './switch.vue'

const components = [
    Button,
    Dialog,
    Input,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Switch
]

const install = function (Vue){
    //遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name,component)
    });
}

//判断是否是直接引入文件 如果是 就不调用Vue.use()
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install
}