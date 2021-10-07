<!--
 * @Description: 
 * @Author: Huang.zq
 * @Date: 2021-09-16 14:01:19
 * @LastEditors: Huang.zq
 * @LastEditTime: 2021-09-22 16:48:09
-->
<template>
  <div class="header">
    <!-- 底部 -->
    <div class="header-bottom">
      <div class="wrappers">
        <!-- logo -->
        <div class="logo">
          <img src="../../../public/blog3.png" alt="" />
        </div>
        <!-- 菜单 -->
        <div class="menu">
          <ul>
            <li class="li" @click="toHome()">首页</li>
            <li
              class="li"
              v-for="cate in categories"
              :key="cate.id"
              @click="toList(cate)"
            >
              {{ cate.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils/request";
export default {
  data() {
    return {
      categories: [],
      // active:false
    };
  },
  methods: {
    getCategory() {
      get("/index/category/findAll").then((res) => {
        this.categories = res.data;
      });
    },
    toList(c) {
      this.$router.push({
        path: "/list",
        query: c,
      });
      // this.active=!this.active
    },
    toHome() {
      this.$router.push({
        path: "/home",
      });
    },
  },
  created() {
    this.getCategory();
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: url("../../../public/carmer.jpg") no-repeat center;
  background-size: 100%;
  height: 500px;
  width: 100%;
  .header-bottom {
    // border-bottom: 1px solid #bcbdbe;
    .wrappers {
      display: flex;
      justify-content: space-between;
      // height: 50px;
      .logo {
        margin-left: 10px;
        // flex-grow: 1;
        img {
          width: 200px;
        }
      }
      .menu {
        // height: 50px;
        // flex-grow: 2;
        margin-right: 20px;
        .li {
          float: left;
          line-height: 60px;
          padding: 0 0.5em;
          font-size: 20px;
          color: #fff;
          cursor: pointer;
        }
        .li:hover {
          border-bottom: 2px solid #000;
          // background-color: rgb(38, 63, 143);
          // color: white;
        }
        // .active{
        //   background-color: rgb(38, 63, 143);
        //   color: white;
        //   border-bottom: 2px solid #29a762;
        // }
      }
    }
  }
}
</style>