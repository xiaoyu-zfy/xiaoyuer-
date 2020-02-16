import showBlog from './components/showBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'

// 路由文件 ，它是js文件 ，  有多少组件就引入多少组件在这里

export default [
    // 注意这里的component  没有s  不然会报错
    { path:"/", component: showBlog },
    { path:"/add", component: AddBlog },

    // 路由参数， 当我们在网页路径上搜索想要的内容时 ，直接搜索我们设置的路由参数找到指定的位置  下面id就是我们设置的参数
    { path:"/blog/:id", component: SingleBlog }
    
]
