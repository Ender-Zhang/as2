<!--
 * @Author: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @Date: 2023-03-11 20:57:20
 * @LastEditors: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @LastEditTime: 2023-03-12 23:26:06
 * @FilePath: \as2\as2_js\src\components\List.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @Date: 2023-03-11 20:50:18
 * @LastEditors: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @LastEditTime: 2023-03-12 20:35:14
 * @FilePath: \as2\as2\src\components\list.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <!-- <ul class="todo-main">
        <myItem v-for="todo in todos" :key="todo.id" :todo="todo" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
    </ul> -->
    
    <!-- Display the todolist in the table -->
    <h2>Unfinished Task</h2>
    <ui-table
        v-model="selectedRows"
        fullwidth
        :data="todos.filter(todo => todo.done == false)"
        :thead="thead"
        :tbody="tbody"
        
        row-checkbox
        @update:modelValue="finished('selectedRows', $event)"
        selected-key="id"
    >
    <ui-pagination
        v-model="page"
        :total="total"
        show-total
        @change="onPage"
    ></ui-pagination>
    </ui-table>

    <!-- show the finished task  -->
    <h2>Finished Task</h2>
    <ui-table
        v-model="selectedRows"
        fullwidth
        :data="todos.filter(todo => todo.done == true)"
        :thead="thead"
        :tbody="tbody"

        row-checkbox
        @update:modelValue="unfinished('selectedRows', $event)"
        selected-key="id"
    >
    <ui-pagination
        v-model="page"
        :total="total"
        show-total
        @change="onPage"
    ></ui-pagination>
    </ui-table>
</template>
<script>
import myItem from './Item.vue';
 
export default {
    name: 'myList',
    data() {
        return {
        data: [],
        thead: [
        'Description',
        'Deadline',
      ],
      tbody: [
        {
          field: 'title',
          width: 80,
          fixed: 'left'
        },
        {
          field: 'deadline',
          width: 100
          // fixed: 'left'
        }
    ],
    tfoot: [
        { value: 1 },
        { value: 2 }
    ],
        };
  },
  created() {
    let { data } = this.data;
    this.data = this.todos.filter(todo => todo.done == false);
    console.log(this.todos);
  },
  methods: {
    show(data) {
      console.log(data);
    },
    onPage(page) {
      // your code
      console.log(page);
    },
    finished(name, event) {
        console.log(event);
        for (let i = 0; i < this.todos.length; i++) {
            for (let j = 0; j < event.length; j++) {
                if (this.todos[i].id == event[j]) {
                    this.todos[i].done = true;
                }
            }
        }

    },
    // for unfinished task
    unfinished(name, event) {
        for (let i = 0; i < this.todos.length; i++) {
            for (let j = 0; j < event.length; j++) {
                if (this.todos[i].id == event[j]) {
                    this.todos[i].done = false;
                }
            }
        }
    }
  },
    components: {
        myItem
    },
    props: ['todos', 'checkTodo', 'deleteTodo']
}
</script>
<style scoped>
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}
 
.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>