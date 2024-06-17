import AppTitle from "./AppTitle.js";
import AppSections from "./AppSections.js";

export default {
    // 注册子组件
    components: {AppTitle, AppSections},
    // 定义组件的 HTML 结构
    template: `
      <app-title></app-title>
      <app-sections></app-sections>
    `
}