<template>
    <div v-muban:colors="'narrow'" id="showblog">

        <h1>博客总览</h1>

        <input type="text" placeholder="搜索" v-model="serach">

        <div v-for="blog in filtersBlogs" :key="blog.id" class="single-blog">
                <!-- 当我们加了路由标签之后 ， 我们所设置的标题在页面上就可以点击了 ， 但是需要绑定属性才能跳转 -->
            <router-link :to="'/blog/' + blog.id"> 
                <h3 v-rainbow> {{ blog.title | toUp }} </h3>
            </router-link>

            <span> {{ blog.body }} </span>
        </div>

    </div>
</template>


<script>
export default {
    name : 'showblog',
    data() {
        return {
            blogs:[],
            serach:''
        }
    },
    created() {
        //  get  HTTP接收数据的方法  跟post差不多
        this.$http.get('./../static/post.json')
        .then((data)=> {
           // console.log(data)
            this.blogs = data.body.splice(0 , 10)
           // console.log(this.blogs)
        })
    },
    computed:{
        filtersBlogs() {
            //  自定义数据属性 ， 返回我们get到的数据然后调用过滤器filter 通过双向绑定input框 搜索框搜什么就过滤什么找出来
            // 此时循环的将不是blogs 而是我们定义的filters  将搜索的内容显示出来
            return this.blogs.filter((blog) => {
                return blog.title.match(this.serach)
                //  title 就表示搜索 的是标题
                // match方法是字符串方法  可以在指定的 区域内进行字符串匹配
            })
        }
    },

    // 局部过滤器
    filters :{
        toUp(value) {
            return value.toUpperCase()
        }
    },

    //   局部自定义指令  只对当前组件有用
    // directives :{
    //     rainbow:{
    //         bind(el , binding , vnode) {
    //             el.style.color = 'red'
    //         }
    //     }
    //}
}
</script>

<style>
#showblog {
    margin:0px auto
}

.single-blog {
    padding: 10px;
    margin: 30px 0px;
    background: #cccccc
}

#showblog a {
    text-decoration: none;
}

input[type="text"] {
    padding: 8px;
    width: 80%;
    box-sizing: border-box
}
</style>