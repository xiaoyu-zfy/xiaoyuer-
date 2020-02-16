// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

// 自定义指令  directive 第一个参数为指令的名字， 第二个是调用方法
Vue.directive('rainbow' , {
  // bind 当我们的标签当中使用了我们的自定义指令，就会调用bind方法 （钩子函数） 三个参数 ，el为指令绑定的元素标签，可以直接操作dom元素 ，相当于js里的getElementById('div)
  //  binding是一个对象 ， 里面是自定义指令的名字（name）， 不带V- ，value 是指令绑定的值  , 当我们的指令设置； 参数 就会调用该对象方法
  bind(el , binding , vnode) {
    //  el 所绑定的元素是h3标签 ，  所以他代表h3标签 可以设置属性 为h3设置color属性 ， 调用math方法 设置随机数 +‘#’
    el.style.color = '#' + Math.random().toString(16).slice(2,8)
  }
})

//  muban 这是我自定义的另一个指令， 我们给他设置了一个绑定的值wide ，所以在下面调用binding方法  binding里面的name为指令名字muban ， value 为指令绑定的值， 在div中我们绑定的是wide
// 需要注意的是， wide 传过去是以字符串传过去的 ， 所以在指令里需要“ ‘wide’ ”,如果不加引号， 会报错说wide没有定义
Vue.directive('muban' ,{
  bind(el , binding , vnode) {
    if(binding.value == 'wide') {   //  判断绑定的值是否为我们设置的wide
      el.style.width= '1000px'
    } 
    else if (binding.value == 'narrow'){
      el.style.width = '700px'
    }

      //  colors为我们绑定的指令的参数  类似于v-on:click=“” ，里面的click ， 然后binding里的arg就是传给指令的参数 所以我们可以拿arg来判断
    if(binding.arg == 'colors') {
      el.style.background = '#826060'
      el.style.padding = '20px'
    }
  }
} )

//  创建路由
const router = new VueRouter({
    routes : Routes ,
    mode : 'history'               //  该属性是去掉路由上面的＃号
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
