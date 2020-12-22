<template>
<div class="todo-container">
    <div class="todo-wrap">
        <Header @addTodo="addTodo"></Header>
        <List :todos="todos" :upda="upda"></List>
        <Footer :todos="todos" :updaAll="updaAll"></Footer>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import List from '@/components/List'
import Footer from '@/components/Footer'
export default {
  name: '',
  components:{
      Header,
      List,
      Footer
  },
  data(){
      return{
          todos:[
              {id:1,content:'刘永健',isOver:false},
              {id:2,content:'王硕',isOver:true},
              {id:3,content:'王嘉乐',isOver:false},
              {id:4,content:'健健很6啊',isOver:true},
              {id:5,content:'王硕是狗',isOver:true},
              {id:6,content:'乐乐是狗',isOver:true}
          ]
      }
  },
  methods:{
      addTodo(todo){
         this.todos.unshift(todo) 
      },
      deleted(index){
          this.todos.splice(index,1)
      },
      upda(index){
          this.todos[index].isOver =!this.todos[index].isOver
      },
      updaAll(val){
          this.todos=this.todos.forEach(item=>item.isOver=val)
      }
  },
  mounted(){
      this.$bus.$on('deleted',this.deleted)
  }
  
}
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
