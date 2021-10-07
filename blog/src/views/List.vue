<!--
 * @Description: 
 * @Author: Huang.zq
 * @Date: 2021-09-16 14:01:19
 * @LastEditors: Huang.zq
 * @LastEditTime: 2021-09-23 10:10:37
-->
<template>
  <div>
    <Head></Head>
    <!-- 内容 -->
    <div class="content">
      <div class="wrapper">
        <!-- 标题 -->
        <div class="title">
          {{ category.name }}
        </div>
        <!-- 文章列表 -->
        <div class="arcListArea" v-if="arcData.total>0">
          <div class="articleList" @click="toArticle(arc)" v-for="arc in arcData.list" :key="arc.id">
          <!-- 封面 -->
          <div class="logo">
            <img :src="arc.cover" alt="" />
          </div>
          <!-- 文章详细信息 -->
          <div class="detailMsg">
            <!-- 标题 -->
            <div class="title">{{ arc.title }}</div>
            <!-- 发布时间 -->
            <div class="publicTime">发布时间：{{ arc.publishTime|fmtDate }}</div>
            <!-- 阅读次数 -->
            <div class="readTime">阅读次数：{{ arc.readTimes }}</div>
          </div>
        </div>
        <!-- 分页 -->
        <div class="page">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="param.page"
            :page-size="param.pageSize"
            layout="total, prev, pager, next"
            :total="arcData.total"
          >
          </el-pagination>
        </div>
        </div>
        <div class="noData" v-else>暂无数据</div>
      </div>
    </div>
    <Foot></Foot>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import { get } from "../utils/request";
import Head from "./components/Head.vue";
import Foot from "./components/Foot.vue";
export default {
  components: {
    Head,
    Foot,
  },
  data() {
    return {
      category: {},
      // 分页参数
      param: {
        page: 1,
        pageSize: 4,
      },
      // 文章列表数据
      arcData: {},
    };
  },
  methods: {
    getArticleData() {
      this.param.categoryId = this.category.id;
      get("/index/article/pageQuery", this.param).then((res) => {
        // console.log(res.data);
        this.arcData = res.data;
      });
    },

    handleCurrentChange(val) {
      this.param.page = val;
      this.getArticleData();
    },
    toArticle(arc){
      this.$router.push({
        path:'/article',
        query:arc,
      })
    }
  },
  // 侦听器
  watch: {
    "$route.query": {
      handler(query) {
        //  alert(query)
        this.category = query;
        // 每次点击菜单时，重置为第一页
        this.param.page = 1;
        this.getArticleData();
      },
    },
    // 深度侦听
    deep: true,
  },
  created() {
    this.category = this.$route.query;
    this.getArticleData();
  },
};
</script>

<style lang="scss" scoped>
.content {
  min-height: 500px;
  background-color: #ecf6f2;
  padding: 10px;
  .wrapper {
    .title {
      color: #000;
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 5px;
    }
    .articleList {
      // min-height: 300px;
      width: 100%;
      background-color: white;
      display: flex;
      border-bottom: 2px solid rgb(196, 196, 196);
      padding: 5px;
      cursor: pointer;
      .logo {
        flex: 1;
        img {
          width: 200px;
        }
      }
      .detailMsg {
        // background-color: yellow;
        flex: 2;
        line-height: 2em;
        .title {
          color: black;
          
        }
        .title:hover{
          color: red;
        }
       
        
      }
    }
  }
}
</style>