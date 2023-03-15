<!--
 * @Author: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @Date: 2023-03-11 20:29:58
 * @LastEditors: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @LastEditTime: 2023-03-12 23:39:01
 * @FilePath: \as2\as2\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="root">
      <div class="todo-container">
        <h1>Todo List</h1>
          <div class="todo-wrap">
              <myHeader :addTodo="addTodo" />
              <myList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
              <!-- <myFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" /> -->

          </div>
      </div>
  </div>

</template>
<script>
import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';
import myList from './components/List.vue';



export default {
  name: 'App',
  components: {
      myHeader,
      myList,
      myFooter
  },
  data() {
      return {
          todos: [
              { id: '001', title: 'Mock unfinished task1', done: false , deadline: '2021-03-11' },
              { id: '002', title: 'Mock unfinished task2', done: false , deadline: '2021-03-11' },
              { id: '003', title: 'Mock finished task1', done: true , deadline: '2021-03-11' },
              // { id: '002', title: 'vue知识点回顾', done: false },
              // { id: '003', title: '英语PPT制作', done: false },
              
          ],
          message: 'Hello World'
      }
  },
  methods: {
      //添加一个todo
      addTodo(todoObj) {
          this.todos.unshift(todoObj)
      },
      //勾选or取消勾选一个todo
      checkTodo(id) {
          this.todos.forEach((todo) => {
              if (todo.id === id) todo.done = !todo.done
          })
      },
      //删除一个todo
      deleteTodo(id) {
          this.todos = this.todos.filter(todo => todo.id !== id)
      },
      //全选or取消勾选
      checkAllTodo(done) {
          this.todos.forEach(todo => todo.done = done)
      },
      //删除已完成的todo
      clearAllTodo() {
          this.todos = this.todos.filter(todo => !todo.done)
      },
      alertHello() {
          this.$alert(this.message)
      }
  }
}

</script>
<style>
body {
  /* background: #fff; */
  background: #E0EAFC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

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