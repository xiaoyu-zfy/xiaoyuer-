<template>
    <div id="single-blog">
        <h1> {{ blog.title }} </h1>
        <span> {{ blog.body }} </span>
    </div>
</template>

<script>
export default {
    name : 'single-blog',
    data() {
        return {
            id:this.$route.params.id,               //  通过路径拿到我们的数据id
            blog:{}
        }
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
        .then((data) => {
            console.log(data)

            // get到的数据赋值给我们定义的blog的对象数据 ， 然后在页面展示出来  data是我们用来接收数据的参数 ，get到的数据里有body这个属性
            this.blog = data.body
        })
    }
}
</script>


<style>
#single-blog{
    width: 600px;
    background: #CCC;
    margin: 50px auto;
    padding: 20px;
    border:1px dotted black
}
</style>