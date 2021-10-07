<!--
 * @Description: 
 * @Author: Huang.zq
 * @Date: 2021-09-16 14:01:19
 * @LastEditors: Huang.zq
 * @LastEditTime: 2021-09-23 16:17:32
-->
<template>
  <div class="home">
    <!-- 头部 -->
    <Head></Head>
    <!-- 内容 -->
    <div class="content">
      <div class="wrapper">
        <!-- 板块 -->
        <div class="plates">
          <div class="platesLeft">
            <!-- 轮播图 -->
            <div class="swiper">
              <el-carousel height="250px">
                <el-carousel-item v-for="swi in swipers" :key="swi.id">
                  <img :src="swi.url" alt="" />
                </el-carousel-item>
              </el-carousel>
            </div>

            <div class="plate" v-for="item in plateData" :key="item.id">
              <div class="header">
                <div class="title">{{ item.category.name }}</div>
                <div class="more" @click="toList(item.category)">
                  /MORE&gt;&gt;
                </div>
              </div>
              <ul class="list" v-if="item.aritcle.length > 0">
                <li
                  class="li"
                  v-for="pData in item.aritcle"
                  :key="pData.id"
                  @click="toArticle(pData)"
                >
                  {{ pData.title }}
                  <br />
                  <span
                    ><img src="../../public/Time.png" alt="" width="10px" />{{
                      pData.publishTime | fmtDate
                    }}</span
                  >
                  <span
                    ><img
                      src="../../public/readTimes.png"
                      alt=""
                      width="13px"
                    />{{ pData.readTimes }}</span
                  >
                  <span
                    ><img src="../../public/thumb.png" alt="" width="10px" />{{
                      pData.thumpUp
                    }}</span
                  >
                </li>
              </ul>
              <ul class="list" v-else>
                <li>暂无数据</li>
              </ul>
            </div>
          </div>
          <div class="platesRight">
            <div class="calendar">
              <el-calendar> </el-calendar>
            </div>
            <div class="timeLine">
              <el-timeline :reverse="true">
                <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :timestamp="activity.publishTime | fmtDate"
                >
                  发布文章：{{ activity.title }}
                </el-timeline-item>
              </el-timeline>
            </div>
            <div class="aboutMe">
              <div class="photo">
                <img src="../assets/girl.jpg" alt="" height="70px">
              </div>
              <div class="message">
                <p><span>博主:</span>&nbsp;黄智全</p>
                <p>简介：初生程序员，因为语文不好，想不出来就写了这几个字</p>
              </div>
              <div class="contact">
                <div class="qq"></div>
                <div class="wechat"></div>
                <div class="weibo"></div>
              </div>
            </div>
            <div class="friendLink">
              <p>收藏网站</p>
              <div class="link">
                <a href="https://www.csdn.net/" target="_blank">CSDN</a>
              </div>
              <div class="link">
                <a
                  href="https://developer.mozilla.org/zh-CN/docs/MDN/About"
                  target="_blank"
                  >MDN</a
                >
              </div>
              <div class="link">
                <a href="http://momentjs.cn/" target="_blank">Moment.js</a>
              </div>
              <div class="link">
                <a href="https://www.lodashjs.com/" target="_blank">Lodash</a>
              </div>
              <div class="link">
                <a href="https://segmentfault.com/questions" target="_blank"
                  >思否</a
                >
              </div>
              <div class="link">
                <a href="https://leetcode-cn.com/" target="_blank">Leetcode</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
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
      swipers: [],
      plateData: [],
      activities: [],
    };
  },
  methods: {
    getSwiper() {
      get("/index/carousel/findAll").then((res) => {
        // console.log(res);
        this.swipers = res.data;
      });
    },
    getPlateData() {
      get("/index/article/findCategoryArticles").then((res) => {
        // console.log(res.data);
        this.plateData = res.data;
        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res.data[i].aritcle.length; j++) {
            this.activities.push(res.data[i].aritcle[j]);
          }
        }
        // console.log(this.activities);
      });
    },
    toList(list) {
      this.$router.push({
        path: "/list",
        query: list,
      });
    },
    toArticle(arcitem) {
      this.$router.push({
        path: "/article",
        query: arcitem,
      });
    },
  },
  created() {
    this.getSwiper();
    this.getPlateData();
  },
};
</script>

<style lang='scss' scoped>
.content {
  background-color: #ecf6f2;
  // height: 600px;
  .wrapper {
    // 轮播图
    .swiper {
      padding: 10px 0;
      width: 100%;
      // margin: 0 auto;
      img {
        width: 100%;
      }
    }
    // 板块样式
    .plates {
      display: flex;
      flex-wrap: wrap;
      margin-top: 15px;
      // padding: 10px;
      // border: 1px solid red;
      justify-content: space-between;
      .platesLeft {
        width: 68%;
        // border: 1px solid blue;
        .plate {
          width: 100%;
          background-color: #fff;
          border-radius: 5px;
          min-height: 250px;
          margin-bottom: 15px;
          // padding: 10px;
          // box-sizing: border-box;
          .header {
            display: flex;
            justify-content: space-between;
            .title {
              color: black;
              font-size: 18px;
              font-weight: bold;
              padding-left: 0.5em;
            }
            .more {
              color: #999;
              cursor: pointer;
              padding-right: 0.5em;
            }
            .more:hover {
              color: crimson;
            }
          }
          .list {
            .li {
              height: 50px;
              line-height: 2em;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              cursor: pointer;
              padding-top: 1em;
              margin-left: 1em;
              color: #0c0c0c;
              font-size: 14px;
              font-weight: bold;
              border-bottom: 1px solid rgb(199, 197, 197);
              span {
                color: #999;
                font-size: 10px;
                font-weight: normal;
                margin: 0 0.5em;
              }
            }
          }
          .li:hover {
            color: crimson;
            font-weight: bolder;
            // text-decoration: underline;
          }
        }
      }
      .platesRight {
        width: 30%;
        // border: 1px solid rgb(34, 0, 128);
        .calendar {
          // height: 260px;
          margin-bottom: 15px;
          // background-color: green;
        }
        .timeLine {
          height: 500px;
          background-color: white;
          overflow: hidden;
          padding-left: 5px;
          padding-top: 20px;
        }
        .aboutMe {
          height: 300px;
          background-color: white;
          margin-top: 15px;
          border: 1px solid white;
          
          .photo{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin:5px auto;
            overflow: hidden;
            // background-color: orangered;
            
          }
          .message{
            height: 100px;
            // background-color: orchid;
            font-size: 16px;
            text-align: center;
            padding: 5px;
            span{
              background-color: rgb(67, 122, 241);
              color: white;
              border-radius: 5px;
              font-size: 18px;
            }
          }
          .contact{
            height: 100px;
            // background-color: palegreen;
          }
        }
        .friendLink {
          height: 200px;
          background-color: white;
          margin-top: 15px;
          border: 1px solid white;
          p {
            font-weight: bold;
          }
          .link {
            width: 70px;
            height: 30px;
            display: inline-block;
            border: 1px solid orangered;
            border-radius: 15px;
            text-align: center;
            line-height: 30px;

            margin: 2px;
            a {
              color: #000;
            }
          }
          .link:hover {
            background-color: orangered;
            a {
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>