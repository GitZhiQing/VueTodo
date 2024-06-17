export default {
    template: `
      <form @submit.prevent="add">
        <input type="text" placeholder="添加任务" v-model="newTodo">
        <button type="submit">添加</button>
      </form>
    `,
    data() {
        // 初始化新任务的数据
        return {
            newTodo: ''
        }
    },
    methods: {
        add() {
            // 检查新任务是否为空，如果为空则不进行后续操作
            if (!this.newTodo.trim()) {
                return;
            }
            // 触发添加新任务的事件，并传递新任务的数据
            this.$emit('add', this.newTodo);
            // 清空输入框
            this.newTodo = '';
        }
    }
}