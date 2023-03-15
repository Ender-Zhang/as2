<!--
 * @Author: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @Date: 2023-03-11 20:57:20
 * @LastEditors: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @LastEditTime: 2023-03-12 23:13:02
 * @FilePath: \as2\as2_js\src\components\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="todo-header">
        <!-- <ui-textfield outlined @keyup.enter="add" v-model="title">New Task</ui-textfield>click Enter to confirm
        <ui-datepicker
            v-model="date"
            :config="config"
            placeholder="Select Date.."
            toggle
            clear
        ></ui-datepicker> -->

        <ui-button raised @click="open = true">New Task</ui-button>
        
        <!-- open dialog to add new task-->
        <ui-dialog v-model="open" scrollable @confirm="onConfirm">
        <ui-dialog-title>New Task</ui-dialog-title>
        <ui-dialog-content>
            <ui-textfield outlined @keyup.enter="add" v-model="title">Description</ui-textfield>
            <br />
            <!-- pick date -->
            <ui-datepicker
                v-model="date"
                :config="config"
                placeholder="Select Date.."
                toggle
                clear
            ></ui-datepicker>
            <!-- detailed information -->
            <h3>Detailed Information</h3>
            <ui-editor v-model="content"></ui-editor>
        </ui-dialog-content>
        <ui-dialog-actions>
            <ui-button @click="open = false">Cancel</ui-button>
            <ui-button @click=clickAdd()>Save</ui-button>
        </ui-dialog-actions>
        </ui-dialog>


    </div>
</template>
<script>
import { nanoid } from 'nanoid'

export default {
    name: 'myHeader',
    props: ['addTodo'],
    data() {
        return {
            title: '',
            config: {
                defaultDate: 'today'
                },
            date: '',
            open: false,
            customColor: false,
            content: '',
        }
    },
    methods: {
        // trim space
        add() {
            if (!this.title.trim()) return
            const todoObj = { id: nanoid(), title: this.title, done: false, deadline: this.date, content: this.content }
            this.addTodo(todoObj)
            this.title = ''
            this.deadline = ''
            this.content = ''
            // console.log(this.date)
 
        },
        onConfirm(result) {
            if (result) {
                console.log('ok');
            } else {
                console.log('cancel');
            }
        },
        // add data to list
        clickAdd() {
            this.open = false
            this.add()
        }
    }
}
</script>
<style scoped>

.mdc-text-field--outlined {
    height: 70px;
    overflow: visible;
}
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}
 
.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>