<!--
 * @Description: 
 * @Author: Huang.zq
 * @Date: 2021-09-16 14:01:19
 * @LastEditors: Huang.zq
 * @LastEditTime: 2021-09-22 15:28:41
-->
<template>
  <div class="footer">
    <div class="wrapper">
      <div class="top">
        <div class="message">
          <p>广西科技大学东环校区</p>
          <p>邮编：545006</p>
          <p>地址：柳州市城中区东环大道268号</p>
        </div>
        <div class="message">
          <p>站点作者：quan</p>
          <p>邮箱：xxxxxxx@qq.com</p>
          <p>地址：xxx省xx市xxxxxx</p>
        </div>
      </div>
      <!-- <div class="bot">
        <span>山西农业大学党委宣传部</span>
        <span>晋ICP备05000473号<i><img src="../../../public/ba_sxau.png" alt=""></i></span>
        <span> 晋公网安备14072602000114号</span>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #1b6dc1;
  height: 160px;
  .wrapper {
    color: white;
    .top {
      overflow: hidden;
      .message {
        float: left;
        padding-top: 10px;
        padding-right: 20px;
      }
    }
    .bot{
      span{
        display: inline-block;
        margin-right: 1em;
      }
    }
  }
}
</style>