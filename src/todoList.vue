<template>
    <div id="app">
        <div>
            <input class="item" v-model="inputValue"/>
            <button @click="handleSubmit">提交</button>
        </div>
        <div>
            <ul>
                <todo-item 
                    v-for="(item, index)  of list" 
                    :content="item"  
                    :key="index"
                    :index = "index"
                    @delete="handleDelete"  >  <!--监听子组件广播的delete方法 监听到了调用主组件的handleDelete方法-->
                </todo-item>
            </ul>
        </div>
    </div>
        <!-- -->
</template>

<script>

//引入子组件
import todoItem  from './components/todoItem'
export default {
    components: { //注册子组件
        "todo-item" : todoItem
    },
    data(){
        return{
            inputValue : '',
            list : []
        }
    },
    methods: {
        handleSubmit: function(){
            this.list.push(this.inputValue)
            this.inputValue = ""
        },
        handleDelete: function(index){
            this.list.splice(index,1)
        }
    }


}
</script>