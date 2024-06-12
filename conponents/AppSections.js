import AppSectionsList from './AppSectionsList.js';
import AppSectionsForm from './AppSectionsForm.js';

export default {
    components: {AppSectionsList, AppSectionsForm},
    template: `
      <app-sections-list
          headline="未完成"
          :doChild="filters.beforeDo">
      </app-sections-list>
      <app-sections-list
          headline="已完成"
          :doChild="filters.afterDo">
      </app-sections-list>
      <app-sections-form @add="fatherAdd"></app-sections-form>
    `,
    data() {
        return {
            // 返回从 localStorage 中获取的数据，如果没有则返回默认数据
            todos: JSON.parse(localStorage.getItem('todos')) || [
                {id: 1, name: '吃饭', done: false},
                {id: 2, name: '睡觉', done: false},
                {id: 3, name: '打豆豆', done: false}
            ],
        }
    },
    computed: {
        filters() {
            return {
                beforeDo: this.todos.filter(item => !item.done),
                afterDo: this.todos.filter(item => item.done)
            }
        }
    },
    methods: {
        fatherAdd(todo) {
            this.todos.push({
                id: this.todos.length + 1,
                name: todo,
                done: false
            });
            this.saveTodos();
        },
        // 保存数据到 localStorage
        saveTodos() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        }
    },
    // 监听 todos 数据的变化，当数据发生变化时，自动保存数据到 localStorage
    watch: {
        todos: {
            handler() {
                this.saveTodos();
            },
            deep: true // 深度监听（即监听对象内部的属性）
        }
    }
}