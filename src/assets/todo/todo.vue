<template lang='html'>
    <section id="todo">
        <input 
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="接下来我们要做什么？"
            @keyup.enter="addTodo"
        >
        <Item 
            :todo="todo"
            v-for="todo in filteredTodos"
            :key="todo.id"
            @del="deleteTodo"
         />
        <Tabs 
            :filter="filter"
            :todos="todos"
            @toggle="toggleFilter"
            @clearAllCompleted='clearAllCompleted'
        />
    </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './Tabs.vue'
let id = 0
export default {
    data() {
        return {
            todos:[],
            filter:'all'
        }
    },
    components: {
        Item,
        Tabs,
    },
    computed: {
        filteredTodos(){
            if(this.filter === 'all'){
                return this.todos
            }
            const completed = this.filter === 'completed'
            return this.todos.filter(todo => completed === todo.completed)
        }
    },
    methods: {
        addTodo(e) {
            this.todos.unshift({
                id:id++,
                content:e.target.value.trim(),
                completed:false,
            }),
            e.target.value = ''
        },
        deleteTodo(id){
            this.todos.splice(this.todos.findIndex(todo => todo.id === id),1)
        },
        toggleFilter(state){
            this.filter = state
        },
        clearAllCompleted(){
            this.todos = this.todos.filter(todo => !todo.completed)
        }
    }
}
</script>

<style lang='less' scoped>
#todo{
    width: 600px;
    padding: 30px;
    // height: 600px;
    background: #fff;
    position: relative;
    z-index: 10;
    margin: 0 auto;
    .add-input{
        box-sizing: border-box;
        width: 100%;
        border: none;
        height: 30px;
        padding: 30px 60px;
        font-size: 25px;
    }
}
</style>