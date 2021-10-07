<!--
 * @Description: 
 * @Author: Huang.zq
 * @Date: 2021-09-16 14:01:19
 * @LastEditors: Huang.zq
 * @LastEditTime: 2021-09-23 10:11:56
-->
<template>
  <div>
    <Head></Head>
    <div class="content">
      <div class="wrapper">
        <div class="title">
          <h2>{{arcDetail.title}}</h2>
        </div>
        <div class="arcDetailMsg">
          <div class="detailHeader">
            <span>发布时间：{{arcDetail.publishTime|fmtDate}}</span>
            <span>作者：{{arcDetail.baseUser.realname}}</span>
          </div>
          <hr>
          <div class="arcText" v-html="arcDetail.content"></div>
        </div>
      </div>
      <!-- {{arcDetail}} -->
    </div>
    <Foot></Foot>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import {get} from '../utils/request'
import Head from './components/Head.vue';
import Foot from './components/Foot.vue';
  export default {
    components:{
      Head,
      Foot
    },
    data(){
      return{
        arcitem:{},
        arcDetail:{}
      }
    },
    methods: {
      getArticleDetail(){
        get('/index/article/findById',{id:this.arcitem.id}).then(res=>{
          // console.log(res);
          this.arcDetail=res.data

        })
      }
    },
    created () {
      this.arcitem=this.$route.query
      this.getArticleDetail()
    },
  }
</script>

<style lang="scss" scoped>
  .content{
    margin-bottom: 50px;
    .wrapper{
      .title{
        text-align: center;
      }
      .detailHeader{
        text-align: center;
        span{
          margin-right: 10px;
        }
      }
    }
  }
</style>