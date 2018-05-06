<template lang='html'>
    <div class="helper">
        <span class="left">{{unFinishedTodoLength}} items left</span>
        <span class="tabs">
            <span 
                v-for="state in states" 
                :key="state"
                :class="[state, filter === state ?  'actived' : '']"
                @click="toggleFilter(state)"
            >
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted">Clear completed</span>
    </div>
</template>

<script>
export default {
    props:{
        filter: {
            type: String,
            required: true,
        },
        todos:{
            type: Array,
            required: true,
        }
    },
    computed:{
        unFinishedTodoLength(){
            return this.todos.filter(todo => !todo.completed).length
        }
    },
    data(){
        return {
            states: ['all','active','completed']
        }
    },
    methods: {
        toggleFilter(state){
            this.$emit('toggle',state)
        },
        clearAllCompleted(){
            this.$emit('clearAllCompleted')
        }
    }
}
</script>

<style lang='less'>
.helper{
    font-size: 16px;
    line-height: 44px;
    overflow: hidden;
    .left{
        float: left;
        display: block;
        // display: inline-block;
    }
    .tabs{
        display: block;
        float: left;
         .actived{
            border:1px solid red;
        }
        span{
            height: 44px;
            line-height: 32px;
            display: inline-block;
            box-sizing: border-box;
            padding: 5px 10px;
            margin-right: 10px;
        }
       
    }
    .clear{
        display: block; 
        float: right;
    }
}
</style>