<template>
  <div class="the-home">
    <el-row class="app-header" :gutter="1">
      <el-col class="flex-center shouye" :offset="13" :span="2" style="cursor:pointer">
        <el-image class="butn-img" lazy :src="require('../assets/home/yuan2.png')"></el-image>
        <div>首页</div>
      </el-col>
      <el-col :offset="1" :span="2">
        <div @click="changeRoute('2-1')" class="flex-center" style="cursor:pointer">
          <el-image class="butn-img" lazy :src="require('../assets/home/yuan2.png')"></el-image>
          <div>潜爱护礁</div>
        </div>
      </el-col>
      <el-col class="sign-in-up" v-if="(!loginData.isLogin)" :offset="2" :span="4">
        <div>
          <span @click="changeRoute('2-1')" class="login-btn">登录</span>
        </div>

        <div>
          <span @click="changeRoute('2-1')" class="regist-btn">注册</span>
        </div>
      </el-col>

      <!-- <el-col :span="1" v-if="(loginData.isLogin)">
        <el-popover trigger="hover" placement="bottom" width="150">
          <p class="text-align">{{loginData.currentUserName}}</p>

          <div class="MyDivider"></div>
          <el-button
            type="text"
            icon="el-icon-user"
            @click="changeRoute('1')"
            size="mini"
            class="top-btn top-btn-color"
          >个人中心</el-button>
          <div class="MyDivider"></div>
          <el-button
            type="text"
            icon="el-icon-switch-button"
            @click="logout"
            size="mini"
            class="top-btn"
          >退出登陆</el-button>
          <div class="MyDivider"></div>
          <el-button
            type="text"
            class="top-btn"
            size="mini"
            icon="el-icon-edit-outline"
            @click="registeredData.visible = true"
          >注册</el-button>
          <p slot="reference" class="text-align" type="text">
            <img :src="require('../assets/boy.png')" class="top-user-icon" />
          </p>
        </el-popover>
      </el-col>-->
    </el-row>

    <el-row class="video-container">
      <video :style="fixStyle" autoplay loop class="fillWidth" muted>
        <source src="../assets/video/video.mp4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
      </video>
    </el-row>

    <div class="homepage-hero-module">
      <el-row class="qianAi-logo">
        <el-image lazy :src="require('../assets/home/logo_x.svg')"></el-image>
      </el-row>

      <el-row class="intro-logo">
        <el-image lazy :src="require('../assets/home/big_title2.png')"></el-image>
      </el-row>

      <el-row class="meng-ban" style="width: 100%;">
        <el-image style="width:100%" :src="require('../assets/home/meng1.png')"></el-image>
      </el-row>

      <el-row class="all-intro">
        <el-row>
          <el-col class="coral-title" :offset="1" :span="2">
            <div>关于潜爱</div>
            <div class="coral-title-line"></div>
          </el-col>
          <el-col :offset="18" :span="3" class="two-gif">
            <div @click="changeIsShowVideo">
              <el-image
                lazy
                v-show="!isShowVideo"
                :src="require('../assets/home/cycle_jitter.gif')"
              ></el-image>
              <el-image
                lazy
                class="close-video"
                v-if="isShowVideo&&!isInCloseVideo"
                :src="require('../assets/home/change_once.gif')"
              ></el-image>
              <el-image
                lazy
                class="in-close-video"
                v-if="isInCloseVideo"
                :src="require('../assets/home/go_back.gif')"
              ></el-image>
            </div>
          </el-col>
        </el-row>
        <el-row class="intro-text">
          <el-col :offset="3" :span="13" class="line-height">
            <div class="text-width">
              &nbsp;&nbsp;&nbsp;&nbsp;“潜爱大鹏”，是由大鹏新区管委会和磨房网共同发起的民间珊瑚保育组织，倡导并践行珊瑚礁生态的自然恢复，构建海洋意识教育体系，传播海洋保护理念和方法，激发公众、企业、政府等各类社会组织的跨界参与。共同推进珊瑚保护机制的建设，为珊瑚礁生态的恢复营造更好的条件。
              <br />&nbsp;&nbsp;&nbsp;&nbsp;“潜爱大鹏”经过7年的珊瑚保育实践探索，以“种珊瑚，种人心”为口号，
              衍生了“潜爱护礁”和”潜爱课堂“两大核心公益项目，以此领跑海洋意识教育传播，成为珊瑚保育的民间专业组织。
              <br />&nbsp;&nbsp;&nbsp;&nbsp;“潜爱大鹏”项目落地于2012年，正式注册于2014年。
            </div>
          </el-col>
          <el-col class="tips-video" :offset="1" :span="7">
            <el-image lazy :src="require('../assets/home/tips.png')"></el-image>
          </el-col>
        </el-row>

        <el-row class="the-video-row">
          <el-col>
            <div v-show="isVideoPause&&isShowVideo&&!isInCloseVideo" class="action-svg">
              <el-image :src="require('../assets/home/action.svg')"></el-image>
            </div>
            <video id="showVideo" class="intro-video-no" autoplay controls>
              <source src="http://dayy.xyz/resource/4.mp4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
            </video>
          </el-col>
        </el-row>
      </el-row>
    </div>

    <el-row class="text-align weixin-weibo">
      <el-col :span="12" id="introdus-title" class="weixin-weibo-title fen-height">
        <div class="wexin-weibo-first">
          <el-image lazy :src="require('../assets/home/big_title2.svg')"></el-image>
        </div>
      </el-col>

      <el-col
        :span="6"
        @mouseenter.native.stop="hoverChang(2)"
        @mouseleave.native.stop.stop="leaveChang(2)"
        id="introdus-weixin"
        class="fen-height"
      >
        <div class="weixin-svg">
          <el-image lazy :src="require('../assets/home/weixin.svg')"></el-image>
        </div>
        <div v-show="showWeixin" class="e-wei-ma">
          <img :src="require('../assets/home/wx120.jpg')" />
        </div>
      </el-col>
      <el-col
        :span="6"
        @mouseenter.native.stop="hoverChang(1)"
        @mouseleave.native.stop.stop="leaveChang(1)"
        id="introdus-weibo"
        class="fen-height"
      >
        <div class="weibo-svg">
          <el-image lazy :src="require('../assets/home/weibo.svg')"></el-image>
        </div>
        <div v-show="showWeibo" class="e-wei-ma">
          <img :src="require('../assets/home/wb120.jpg')" />
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-row>
        <el-col class="coral-title" :offset="1" :span="2">
          <div>潜爱护礁</div>
          <div class="coral-title-line"></div>
        </el-col>
      </el-row>
      <el-row class="intro-text">
        <el-col class="zuoYe" :offset="2" :span="11">
          <div
            class="text-width"
          >“潜爱护礁”是由珊瑚作业、促进渔村海上观光发展和推进珊瑚礁保护区建立等三个部分组成的珊瑚保育项目。目前项目正在以建立一条百米长的珊瑚观光带为目标，通过创建潜水员珊瑚保护参与体系，同时配合渔业转型，将渔民收入导向珊瑚观光，推动渔村主动保护珊瑚，最终为建设有深圳特色的珊瑚礁保护区域提供范例。</div>
        </el-col>
        <el-col class="zuoYe" :offset="1" :span="10">
          <div class="flex-center" v-for="(item,index) in QAHJmsg" :key="index">
            <el-image class="butn-img" lazy :src="require('../assets/home/yuan2.png')"></el-image>
            <div class="mar-right intro-text-height">{{item}}</div>
          </div>
          <!-- <div>
            <el-image lazy :src="require('../assets/home/yuan2.png')" ></el-image>
            <span class="mar-right intro-text-height"></span>打捞海底垃圾1.7顿，收集渔网2000多米
          </div>
          <div>
            <el-image lazy :src="require('../assets/home/yuan2.png')" ></el-image>
            <span class="mar-right intro-text-height"></span>种植5802株珊瑚，救助残肢257株珊瑚
          </div>
          <div>
            <el-image lazy :src="require('../assets/home/yuan2.png')" ></el-image>
            <span class="mar-right intro-text-height"></span>已建立2个海上珊瑚试点保护区
          </div>-->
        </el-col>
      </el-row>
    </el-row>
    <el-row>
      <el-row>
        <el-col class="coral-title" :offset="1" :span="2">
          <div>主要活动</div>
          <div class="coral-title-line"></div>
        </el-col>
      </el-row>
      <el-row class="text-align all-activities">
        <div class="one-activities">
          <div class="activity-card" @mouseenter="showTheBg1=true;" @mouseleave="showTheBg1=false;">
            <el-image
              v-show="showTheBg1"
              class="activity_bg"
              :src="require('../assets/home/com_bg.png')"
            ></el-image>
            <span class="activity-text" v-show="showTheBg1">
              <span class="activity-card-title">残肢培育：</span>
              <br />搜集珊瑚碎片，
              <br />暂养在苗圃，
              <br />回播到自然礁石
            </span>
            <el-image
              style="width: 100%;"
              lazy
              v-show="!showTheBg1"
              :src="require('../assets/home/activity1.png')"
            ></el-image>
          </div>
          <div class="activity-title">残肢培育</div>
        </div>
        <div class="one-activities">
          <div class="activity-card" @mouseenter="showTheBg2=true;" @mouseleave="showTheBg2=false;">
            <el-image
              v-show="showTheBg2"
              class="activity_bg"
              :src="require('../assets/home/com_bg.png')"
            ></el-image>
            <span class="activity-text" v-show="showTheBg2">
              <span class="activity-card-title">珊瑚普查：</span>
              <br />底栖动物、
              <br />经济型鱼类、
              <br />珊瑚覆盖率调查
            </span>
            <el-image
              style="width: 100%;"
              lazy
              v-show="!showTheBg2"
              :src="require('../assets/home/activity2.png')"
            ></el-image>
          </div>
          <div class="activity-title">珊瑚普查</div>
        </div>
        <div class="one-activities">
          <div class="activity-card" @mouseenter="showTheBg3=true;" @mouseleave="showTheBg3=false;">
            <el-image
              v-show="showTheBg3"
              class="activity_bg"
              :src="require('../assets/home/com_bg.png')"
            ></el-image>
            <span class="activity-text" v-show="showTheBg3">
              <span class="activity-card-title">生境维护：</span>
              <br />海底捡垃圾，
              <br />搜集渔网，
              <br />台风后水底巡查
            </span>
            <el-image
              style="width: 100%;"
              lazy
              v-show="!showTheBg3"
              :src="require('../assets/home/activity3.png')"
            ></el-image>
          </div>
          <div class="activity-title">生态维护</div>
        </div>
        <div class="one-activities">
          <div class="activity-card" @mouseenter="showTheBg4=true;" @mouseleave="showTheBg4=false;">
            <el-image
              v-show="showTheBg4"
              class="activity_bg"
              :src="require('../assets/home/com_bg.png')"
            ></el-image>
            <span class="activity-text" v-show="showTheBg4">
              <span class="activity-card-title">水文观测：</span>
              <br />水质、透光率、水温检测
            </span>
            <el-image
              style="width: 100%;"
              lazy
              v-show="!showTheBg4"
              :src="require('../assets/home/activity4.png')"
            ></el-image>
          </div>
          <div class="activity-title">水文观测</div>
        </div>
        <div class="one-activities">
          <div class="activity-card" @mouseenter="showTheBg5=true;" @mouseleave="showTheBg5=false;">
            <el-image
              v-show="showTheBg5"
              class="activity_bg"
              :src="require('../assets/home/com_bg.png')"
            ></el-image>
            <span class="activity-text" v-show="showTheBg5">
              <span class="activity-card-title">
                珊瑚多样性监测：
                <br />监测珊瑚礁生物多样性
              </span>
            </span>
            <el-image
              style="width: 100%;"
              lazy
              v-show="!showTheBg5"
              :src="require('../assets/home/activity5.png')"
            ></el-image>
          </div>
          <div class="activity-title">珊瑚多样性监测</div>
        </div>
      </el-row>
    </el-row>

    <el-row class="noShowInPhone">
      <el-row>
        <el-col class="coral-title" :offset="1" :span="2">
          <div>珊瑚案列</div>
          <div class="coral-title-line"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="10" :span="4" class="example-title line-height">“蓝35号” 珊瑚档案</el-col>
      </el-row>

      <el-row>
        <el-col class="example-carousel" :offset="2" :span="20">
          <el-row>
            <el-col :offset="4" :span="9">
              <div style="height:300px">
                <!-- <el-image style="width: 100%;" lazy :src="exanImgUrl"></el-image> -->
                <el-carousel
                  height="300px"
                  :autoplay="false"
                  arrow="never"
                  indicator-position="none"
                >
                  <el-carousel-item v-for="(item,index) in exampleData" :key="index">
                    <!-- <el-image style="width: 100%;" :src="item.url"></el-image> -->
                    <img :src="item.url" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </el-col>

            <el-col :offset="3" :span="8">
              <div>
                <div class="example-one-msg">
                  <span class="mar-right">
                    <el-image
                      lazy
                      class="example-one-el-image lazy"
                      :src="require('../assets/home/coral.png')"
                    ></el-image>
                  </span>品种：十字牡丹
                </div>

                <div class="example-one-msg">
                  <span class="mar-right">
                    <el-image
                      lazy
                      class="example-one-el-image lazy"
                      :src="require('../assets/home/positon.png')"
                    ></el-image>
                  </span>位置：深圳大鹏-苗圃1号-8区
                </div>

                <div class="intro-line">
                  <el-image lazy :src="require('../assets/home/intro_line.png')"></el-image>
                </div>

                <div class="example-one-msg">
                  <span class="example-one-margin">
                    面积：{{examSize}}cm
                    <sup>2</sup>
                  </span>
                </div>
                <div class="example-one-msg">
                  <span class="example-one-margin">拍摄时间：{{examTime}}</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="time-chart-title" :offset="1" :span="2">
          <div>珊瑚面积变化</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="justify-content: space-around;display: flex;margin-top: -80px;">
          <timeChar @index="currentIndex"></timeChar>

          <!-- <div id="time-char-div" @click="setPoint">
            <el-image lazy class="time-chart" :src="require('../assets/home/time_char.png"   ></el-image>
            <el-image lazy id="time-line" :src="require('../assets/home/time_choose.png"   ></el-image>
            <div id="time-msg">
              {{examTime}}
              <br />
              {{examSize}}
            </div>
          </div>-->
        </el-col>
      </el-row>
    </el-row>

    <el-row>
      <el-col class="coral-title" :offset="1" :span="2">
        <div>珊瑚数据</div>
        <div class="coral-title-line"></div>
      </el-col>
    </el-row>
    <seaWave></seaWave>
    <el-row id="qinaiIntro">
      <el-row>
        <el-col class="do-you-know" :offset="2" :span="20">
          你知道吗，每日有
          <span class="know-big">1.2万</span>株珊瑚从地球上消失
        </el-col>
      </el-row>
      <el-row>
        <el-col class="konw-big-text" :offset="9" :span="6">潜爱正在行动......</el-col>
      </el-row>
      <el-row style="display: flex;flex-wrap: wrap;">
        <div class="flex-center shujuSite" v-for="(item,index) in SHSJmsg" :key="index">
          <el-image
            :style="index%2==0?'margin-left:50%':'margin-left:30%'"
            class="butn-img"
            lazy
            :src="require('../assets/home/yuan2.png')"
          ></el-image>
          <div>
            {{item.first}}
            <span class="konw-big-text">{{item.data}}</span>
            {{item.finaly}}
          </div>
        </div>
      </el-row>

      <!-- <el-row class="konw-margin">

        <el-col :offset="5" :span="5" class="know-text">
          <span class="mar-right">
            <el-image lazy :src="require('../assets/home/yuan2.png')"></el-image>
          </span>已暂养
          <span class="konw-big-text">324</span>株珊瑚
        </el-col>

        <el-col :offset="4" :span="5" class="know-text">
          <span class="mar-right">
            <el-image lazy :src="require('../assets/home/yuan2.png')"></el-image>
          </span>已回播
          <span class="konw-big-text">120</span>株珊瑚
        </el-col>

      </el-row>

      <el-row class="konw-margin">
        <el-col :offset="5" :span="5" class="know-text">
          <span class="mar-right">
            <el-image lazy :src="require('../assets/home/yuan2.png')"></el-image>
          </span>已建立
          <span class="konw-big-text">123</span>个珊瑚档案
        </el-col>

        <el-col :offset="4" :span="5" class="know-text">
          <span class="mar-right">
            <el-image lazy :src="require('../assets/home/yuan2.png')"></el-image>
          </span>回播成活率
          <span class="konw-big-text">80.2%</span>
        </el-col>

      </el-row>-->
    </el-row>
    <el-row>
      <el-col class="com-to-us" :offset="9" :span="6">
        <span class="regist-btn comToUs-btn" @click="dialogVisible = true">立即加入我们</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="coral-title" :offset="1" :span="2">
        <div>潜爱站点</div>
        <div class="coral-title-line"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-image lazy class="station-img" :src="require('../assets/home/station.png')"></el-image>
      <!-- <div>
        <img class="station-img" :src="require('../assets/home/station.png')" />
      </div>-->
    </el-row>

    <el-row class="di-tu">
      <div class="footer-bg">
        <el-row>
          <el-col :offset="1" :span="2">
            <div class="footer-title">支持单位</div>
            <div class="footer-title-line"></div>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <swiper :options="swiperOption">
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/1.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/2.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/3.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/4.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/5.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/6.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/7.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/8.png" alt />
              </swiperSlide>
              <!-- v-for 有bug -->
              <!-- <swiperSlide v-for="(item,index) in zhanZhu" :key="index">
                <el-image class="ssImg" :src="item.url"></el-image>
              </swiperSlide>-->
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </el-col>
        </el-row>
      </div>
    </el-row>

    <el-dialog
      :visible.sync="dialogVisible"
      :show-close="false"
      custom-class="comeInImg"
      width="80%"
    >
      <div style="    height: 200px;display: flex;justify-content: space-around;">
        <!-- <el-col :span="12" class="fen-height" style="display:flex"> -->
        <div class="weixin-svg" style="background: rgba(0, 0, 0,0.5);margin: auto 0;">
          <el-image lazy :src="require('../assets/home/weixin.svg')"></el-image>
        </div>
        <div class="e-wei-ma" style="margin: auto 0;">
          <img :src="require('../assets/home/wx120.jpg')" />
        </div>
        <!-- </el-col> -->
        <!-- <el-col :span="12" class="fen-height" style="display:flex"> -->
        <div class="weibo-svg" style="background: rgba(0, 0, 0,0.5);margin: auto 0;">
          <el-image lazy :src="require('../assets/home/weibo.svg')"></el-image>
        </div>
        <div class="e-wei-ma" style="margin: auto 0;">
          <img :src="require('../assets/home/wb120.jpg')" />
        </div>
        <!-- </el-col> -->
        <!-- <el-button @click="dialogVisible = false">取 消</el-button>
        -->
      </div>
    </el-dialog>

    <div id="footer">
      <!-- <iframe
        style="pointer-events: none; position: fixed; top: 0; left: 0; height: 100vh; width: 100vw;"
        src="../assets/home/bubble.svg"
      >
      </iframe>-->
      <!-- use -->
      <!-- <object style="pointer-events: none; position: fixed; top: 0; left: 0; height: 100vh; width: 100vw;"
      data="../assets/home/bubble.svg" type="image/svg+xml"></object>-->
    </div>
  </div>
</template>
<script>
import seaWave from "../components/seaWave.vue";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import timeChar from "../components/homeChart.vue";
export default {
  name: "login",
  components: {
    seaWave,
    swiper,
    swiperSlide,
    timeChar
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        // centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      QAHJmsg: [
        "千名潜水志愿者参与，最大程度培养珊瑚保育公民科学家",
        "打捞海底垃圾1.7顿，收集渔网2000多米",
        "种植5802株珊瑚，救助残肢257株珊瑚",
        "已建立2个海上珊瑚试点保护区"
      ],
      SHSJmsg: [
        {
          first: "已暂养 ",
          data: "324",
          finaly: "株珊瑚"
        },
        {
          first: "已回播",
          data: "120",
          finaly: "株珊瑚"
        },
        {
          first: "已建立",
          data: "123",
          finaly: "个珊瑚档案"
        },
        {
          first: "回播成活率",
          data: "80.2%",
          finaly: ""
        }
      ],
      zhanZhu: [
        { url: require("../assets/home/org/1.png") },
        { url: require("../assets/home/org/2.png") },
        { url: require("../assets/home/org/3.png") },
        { url: require("../assets/home/org/4.png") },
        { url: require("../assets/home/org/5.png") },
        { url: require("../assets/home/org/6.png") },
        { url: require("../assets/home/org/7.png") },
        { url: require("../assets/home/org/8.png") }
      ],

      isShowVideo: false,
      isInCloseVideo: false,
      isVideoPause: false,
      showWeibo: false,
      showWeixin: false,
      showTheBg1: false,
      showTheBg2: false,
      showTheBg3: false,
      showTheBg4: false,
      showTheBg5: false,
      fixStyle: "",

      //弹窗
      dialogVisible: false,

      //loading动画
      LoginLoading: false,
      RegistLoading: false,

      lunboheight: "500px",
      exhibitions: [],
      codelabs: [],
      blogs: [],
      cardspan: 7,
      videoHeight: null,
      // 登陆
      loginData: {
        visible: false,
        logoutVisible: false,
        isLogin: false,
        currentUserName: "lintean",
        currentUserNo: "",
        currentUserId: "",
        currentUserEmail: "",
        user: "",
        pwd: "",
        rules: {
          user: [
            {
              required: true,
              message: "请输入工号",
              trigger: "blur"
            }
          ],
          pwd: [
            {
              required: true,
              message: "请输入密码",
              trigger: "blur"
            }
          ]
        }
      },
      registeredData: {
        visible: false,
        work_no: "",
        username: "",
        pwd: "",
        email: "",

        rules: {
          work_no: [
            {
              required: true,
              message: "请输入工号",
              trigger: "blur"
            }
          ],
          username: [
            {
              required: true,
              message: "请输入用户名字",
              trigger: "blur"
            }
          ],
          pwd: [
            {
              required: true,
              message: "请输入密码",
              trigger: "blur"
            }
          ],
          email: [
            {
              required: true,
              message: "请输入邮箱",
              trigger: "blur"
            }
          ]
        }
      },
      examSize: "223.4",
      examTime: "2018.4.10",

      exampleData: [
        {
          url: require("../assets/home/example/1.jpg"),
          size: "223.4",
          time: "2018.4.10"
        },
        {
          url: require("../assets/home/example/2.jpg"),
          size: "235.6",
          time: "2018.5.09"
        },
        {
          url: require("../assets/home/example/3.jpg"),
          size: "240.2",
          time: "2018.6.09"
        },
        {
          url: require("../assets/home/example/4.jpg"),
          size: "242.5",
          time: "2018.6.17"
        },
        {
          url: require("../assets/home/example/5.jpg"),
          size: "243.2",
          time: "2018.7.01"
        },
        {
          url: require("../assets/home/example/6.jpg"),
          size: "250.4",
          time: "2018.7.28"
        },
        {
          url: require("../assets/home/example/7.jpg"),
          size: "254.6",
          time: "2018.11.17"
        },
        {
          url: require("../assets/home/example/8.jpg"),
          size: "260.3",
          time: "2018.12.29"
        },
        {
          url: require("../assets/home/example/9.jpg"),
          size: "268.4",
          time: "2019.3.02"
        },
        {
          url: require("../assets/home/example/10.jpg"),
          size: "278.5",
          time: "2019.3.17"
        },
        {
          url: require("../assets/home/example/11.jpg"),
          size: "279.1",
          time: "2019.4.06"
        },
        {
          url: require("../assets/home/example/12.jpg"),
          size: "280.5",
          time: "2019.6.02"
        },
        {
          url: require("../assets/home/example/13.jpg"),
          size: "284.6",
          time: "2019.6.22"
        },
        {
          url: require("../assets/home/example/14.jpg"),
          size: "288.1",
          time: "2019.8.24"
        }
      ]
      // exanImgUrl: ""
    };
  },
  computed: {},
  methods: {
    // canplay() {
    //   this.vedioCanPlay = true;
    // },

    changeRoute(index) {
      window.location.href = "http://39.108.93.27/manage/";
      // return;
      // if (index == "2-1") {
      //   this.$router.push("/manage");
      // } else if (index == "1") {
      //   this.$router.push("/manage/user");
      // }
    },

    changeIsShowVideo() {
      let _this = this;
      _this.isVideoPause = false;
      this.isShowVideo = !this.isShowVideo;
      var video = document.getElementById("showVideo");
      if (this.isShowVideo) {
        video.className = "intro-video";
        video.play();
      } else {
        video.className = "intro-video-close";
        video.pause();
        _this.isInCloseVideo = true;
        _this.isShowVideo = !_this.isShowVideo;
        setTimeout(function() {
          _this.isInCloseVideo = false;
          _this.isShowVideo = !_this.isShowVideo;
          video.pause();
        }, 1000);
      }

      // if (_this.isShowVideo) {
      //   video.play();
      // } else {
      //   video.pause();
      // }
    },
    //粉色横条 微博微信 显示
    hoverChang(ind) {
      var title = document.getElementById("introdus-title");
      var wei =
        ind === 1
          ? document.getElementById("introdus-weibo")
          : document.getElementById("introdus-weixin");
      ind === 1 ? (this.showWeibo = true) : (this.showWeixin = true);
      title.style.width = "25%";
      wei.style.width = "50%";
    },
    leaveChang(ind) {
      var title = document.getElementById("introdus-title");
      var wei =
        ind === 1
          ? document.getElementById("introdus-weibo")
          : document.getElementById("introdus-weixin");
      ind === 1 ? (this.showWeibo = false) : (this.showWeixin = false);
      title.style.width = "50%";
      wei.style.width = "25%";
    },
    // setPoint(event) {
    //   let _this = this;

    //   var theCharImg = document.getElementById("time-char-div");
    //   var time = document.getElementById("time-line");
    //   var timeMsg = document.getElementById("time-msg");
    //   var activityImg = document.getElementsByClassName("is-active");
    //   var bbox = theCharImg.getBoundingClientRect();

    //   var left =
    //     ((event.clientX - bbox.left) / document.body.clientWidth) * 100 + 6;
    //   //通过改变css 中的left 来改变位置

    //   let index_pointer = 0;
    //   console.log(left);
    //   if (left > 17 && left < 21) {
    //     index_pointer = 0;
    //     left = 19.297;
    //   } else if (left > 22 && left < 23.5) {
    //     index_pointer = 1;
    //     left = 22.95;
    //   } else if (left > 25 && left < 25.5) {
    //     index_pointer = 2;
    //     left = 25.41;
    //   } else if (left > 25.7 && left < 26.3) {
    //     index_pointer = 3;
    //     left = 26.194;
    //   } else if (left > 28.3 && left < 29.7) {
    //     index_pointer = 4;
    //     left = 29.224;
    //   } else if (left > 30.2 && left < 31.7) {
    //     index_pointer = 5;
    //     left = 30.739;
    //   } else if (left > 45 && left < 46.4) {
    //     index_pointer = 6;
    //     left = 46.199;
    //   } else if (left > 46.7 && left < 48.5) {
    //     index_pointer = 7;
    //     left = 47.197;
    //   } else if (left > 55 && left < 56.8) {
    //     index_pointer = 8;
    //     left = 55.97;
    //   } else if (left > 59.2 && left < 61.8) {
    //     index_pointer = 9;
    //     left = 60.15;
    //   } else if (left > 62.6 && left < 67.3) {
    //     index_pointer = 10;
    //     left = 64.54;
    //   } else if (left > 70 && left < 74.5) {
    //     index_pointer = 11;
    //     left = 73.94;
    //   } else if (left > 75.1 && left < 78.5) {
    //     index_pointer = 12;
    //     left = 75.56;
    //   } else if (left > 80 && left < 85) {
    //     index_pointer = 13;
    //     left = 83.14;
    //   } else {
    //     index_pointer = -1;
    //   }
    //   time.style.left = left + "%";
    //   timeMsg.style.left = left + 3 + "%";
    //   if (index_pointer >= 0) {
    //     _this.examSize = _this.exampleData[index_pointer].size;
    //     _this.examTime = _this.exampleData[index_pointer].time;
    //     //设置图片的url
    //     activityImg[0].children[0].src = _this.exampleData[index_pointer].url;
    //   } else {
    //     _this.examSize = "";
    //     _this.examTime = "这天无活动";
    //   }
    // },
    currentIndex(ind) {
      // console.log(ind)
      this.recordIndex = ind;
      this.examSize = this.exampleData[ind].size;
      this.examTime = this.exampleData[ind].time;
      // this.exanImgUrl = this.exampleData[ind].url;/
      //设置图片的url
      let activityImg = document.getElementsByClassName("is-active");
      activityImg[0].children[0].src = this.exampleData[ind].url;
    }
  },
  mounted: function() {
    let _this = this;
    let preAndNext = 1000;
    window.onresize = () => {
      const windowWidth = document.body.clientWidth;

      _this.fixStyle = {
        height: windowWidth * 0.677 + "px",
        width: windowWidth + "px"
      };
    };
    window.onresize();

    var video = document.getElementById("showVideo");
    video.pause();
    video.addEventListener("pause", function() {
      // console.log("pause");
      _this.isVideoPause = true;
    });
    video.addEventListener("play", function() {
      //  console.log("play");
      _this.isVideoPause = false;
    });

    //设置 3d 海浪
    let bgCanvas = document.getElementsByTagName("canvas")[1];
    bgCanvas.style.height = "600px";
  }
};
</script>
  <style scoped  src="./home.css">
</style>


