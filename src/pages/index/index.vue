<template>
 <view class="content">
  <image class="logo" src="/static/logo.png"></image>
  <view>
   <text class="title">{{ title }}</text>
  </view>
  <!-- h5模式下 微信图编译无效 -->
  <!-- 		<image class="logo" src="/static/mp-weixin/weixin.png"></image>
		<image class="logo" src="/static/h5/h5.png"></image>
		<image class="logo" src="/static/my-ipad/ipad.png"></image> -->
  <view class="text">
   下文:
   <!-- #ifdef MP-WEIXIN -->
   <view>微信中显示</view>
   <!-- #endif -->
   <!-- #ifdef APP-PLUS -->
   <view>APP中显示</view>
   <!-- #endif -->
   <!-- #ifdef MP-IPAD -->
   <view>IPad中显示 红色</view>
   <!-- #endif -->
   <!-- #ifdef H5 -->
   <view>H5中显示 绿色</view>
   <!-- #endif -->
   <view v-if="isIPad">js判断是否ipad</view>
  </view>
  <view>
   <button @click="getLocal" open-type="userLocation">获取地理位置</button>
  </view>
  <navigator
   url="/pages/test/test?id=1&from=index"
   hover-class="navigator-hover"
  >
   <button type="default">组件跳转到uni-ui</button>
  </navigator>
 </view>
</template>

<script>
import { isIPad } from "../../utils.js";

// #ifdef MP-WEIXIN
console.log("MP-WEIXIN");
// #endif

// #ifdef APP-PLUS
console.log("APP-PLUS");
// #endif

// #ifdef MP-IPAD
console.log("MP-IPAD");
// #endif

// #ifdef H5
console.log("H5");
// #endif

export default {
 onShareAppMessage(obj) {
  return {
   title: "自定义分享标题",
   path: "/pages/index/index"
  };
 },
 data() {
  return {
   title: "Hello"
  };
 },
 computed: {
  isIPad() {
   return isIPad();
  }
 },
 onLoad() {},
 onShow() {},
 methods: {
  goLink() {
   uni.navigateTo({
    url: "/pages/test/test",
    success: function() {
     console.log("navigateTo success");
    }
   });
  },
  getLocal() {
   uni.authorize({
    scope: "scope.userLocation",
    success() {
     uni.getLocation({
      type: "wgs84",
      success: function(res) {
       console.log("当前位置的经度：" + res.longitude);
       console.log("当前位置的纬度：" + res.latitude);
      }
     });
    }
   });
  }
 }
};
</script>

<style>
.content {
 text-align: center;
 height: 400rpx;
}

.logo {
 height: 200rpx;
 width: 200rpx;
 margin-top: 100rpx;
}

.title {
 font-size: 36rpx;
 color: #8f8f94;
}

/*  #ifdef MP-IPAD  */
.text {
 color: red;
}

/*  #endif */

/*  #ifdef H5  */
.text {
 color: green;
}

/*  #endif */
</style>
