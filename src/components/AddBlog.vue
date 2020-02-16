<template>
    <div id="head">
        <h2>添加博客</h2>
        <form v-if="!submited">
            <label>博客标题</label>
            <input type="text" v-model="blog.title" required>

            <label>博客内容</label>
            <textarea v-model="blog.content"></textarea>

            <div id="checkes">
                <label for="">node.js</label>
                <input type="checkbox" value="node.js" v-model="blog.arr">
                <label for="">vue.js</label>
                <input type="checkbox" value="vue.js" v-model="blog.arr">
                <label for="">react.js</label>
                <input type="checkbox" value="react.js" v-model="blog.arr">
                <label for="">webpack.js</label>
                <input type="checkbox" value="webpack.js" v-model="blog.arr">
            </div>

            <label for="">作者:</label>
                <select v-model="blog.author">
                    <option v-for="authors in author" :key="authors">{{ authors }}</option>
                </select>
        </form>

        <div v-if="submited">
            <h3>你的博客发送成功</h3>
        </div>

        <button @click.prevent="handle">添加博客</button>

        <div id="preview">
            <h3>博客总览</h3>
            <p>博客标题:{{ blog.title }}</p>
            <p>博客内容:</p>
            <p>{{ blog.content }}</p>
            <p>博客类别:</p>
            <ul>
                <li v-for="item in blog.arr" :key="item">{{ item }}</li>
            </ul>
            <p>作者:{{ blog.author }}</p>
        </div>

    </div>
</template>


<script>
export default {
    name : 'add-blog' ,
    data() {
        return {
            blog:{
                title:'',
                content:'',
                arr:[],
                author:'',
            },
            author:['jack' , 'rous' , 'maikou' ] ,
            submited:false  
        }
    },
    methods:{
        handle() {
            //  提交数据 ， 方法类似与ajax 
            this.$http.post("http://jsonplaceholder.typicode.com/posts" , {
                title:this.blog.title,
                body:this.blog.content,
                userId:1
            })
            // 当数据post成功之后返回的值  用then（）来查看
            .then((data)=> {
                console.log(data)
            })
            this.submited = true
        }
    }

}
</script>


<style scoped>
#head * {
    box-sizing: border-box
}
#head{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px
}
#head label{
    display: block
}
input[type="text"],textarea,select {
    display: block;
    width: 100%;
    padding: 8px
}
textarea {
    height: 200px
}
#checkes label{
    display: inline-block;
    margin: 5px
}
#checkes input {
    display: inline-block;
    margin-left: 2px;
}
button {
    display: block;
    margin: 10px 0px;
    border: 0px;
    background: crimson;
    color: white;
    font-size: 20px;
    border-radius: 8px;
    padding: 14px
}

#preview {
    border: 1px solid #cccccc;
    padding: 10px 20px;
    margin: 30px 0px
}
#preview h3 {
    margin-top: 10px
}
</style>
