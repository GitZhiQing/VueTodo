export default {
    // 使用 template 定义组件的 HTML 结构
    template: `
      <section v-show="doChild.length">
        <h2>{{ headline }}</h2>
        <ul>
          <li v-for="todo in doChild" :key="todo.id">
            <label>
              <input type="checkbox" v-model="todo.done">
              <span>{{ todo.name }}</span>
            </label>
          </li>
        </ul>
      </section>
    `,
    // 定义组件的 props
    props: {
        headline: String,
        doChild: Array
    }
}