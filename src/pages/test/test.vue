<template>
 <view>
  <view class="names">{{ uiName.join("  ") }}({{ uiName.length }})</view>
  <view class="uni-ui-container">
   <view class="uni-ui-item" v-for="item in uniAppUI" :key="item.name">
    <image mode="aspectFit" :src="item.url"></image>
   </view>
  </view>
 </view>
</template>

<script>
export default {
 data() {
  return {
   uniAppUI: [
    {
     name: "角标",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/de0ca370-0358-11e9-b60c-c11fb489bc28_0.png?v=1577943038"
    },
    {
     name: "日历",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/1d13dcc0-0a44-11e9-a0f3-23d446b047ad_2.png?v=1590150201"
    },
    {
     name: "卡片",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/9e3e4900-035a-11e9-9589-293951816da2_0.png?v=1573547230"
    },
    {
     name: "折叠面板",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/5e9fbe60-035c-11e9-ba48-8be5ea2c31e6_0.png?v=1573547510"
    },
    {
     name: "组合框",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/27f77470-4272-11ea-b2fd-01d22e78f068_0.png?v=1580443326"
    },
    {
     name: "倒计时",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/8f48a510-035d-11e9-afa0-e9bd233c3ad2_0.png?v=1573552173"
    },
    {
     name: "抽屉",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_icon/2c111160-035f-11e9-ad78-39489b68d233.png?v=1588037049"
    },
    {
     name: "悬浮按钮",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/97d825c0-2487-11e9-a543-275d71cd047e_0.png?v=1580437284"
    },
    {
     name: "收藏按钮",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/9c64e800-efc5-11e9-826c-65f0d3c5ba69_0.png?v=1573552867"
    },
    {
     name: "商品导航",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/9d8f0750-efc7-11e9-ba86-0b7d75822ed0_0.png?v=1588069992"
    },
    {
     name: "宫格",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/9bc02930-035f-11e9-bf92-1116a5deb716_0.png?v=1575263274"
    },
    {
     name: "图标",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/eaa81060-035f-11e9-9c6b-d7a246c957aa_0.png?v=1581497603"
    },
    {
     name: "索引列表",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/19016660-6fe6-11e9-9bc3-5fb3199c13e7_0.png?v=1582775662"
    },
    {
     name: "列表",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/f0adac40-035c-11e9-9e98-692987b50026_0.png?v=1583829196"
    },
    {
     name: "加载更多",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/3d17c1e0-0360-11e9-9339-cfb31d7739a2_0.png?v=1577107467"
    },
    {
     name: "导航栏",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/b5189340-09b6-11e9-bf29-ef56af06d5a7_0.png?v=1574660650"
    },
    {
     name: "通告栏",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_icon/6dd03c10-0361-11e9-a227-a98b037c330c.png?v=1582774106"
    },
    {
     name: "数字输入框",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/151cdde0-0362-11e9-b013-b131ecc4a722_0.png?v=1574663989"
    },
    {
     name: "分页器",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/70d9f7f0-0362-11e9-80b0-792e0f3ecbd4_0.png?v=1573553980"
    },
    {
     name: "弹出层",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/111896d0-61c7-11e9-9b76-2bde9aeb47cb_0.jpg?v=1590204207"
    },
    {
     name: "评分",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/c9d03960-0362-11e9-92db-855d6a70c20b_0.png?v=1573553996"
    },
    {
     name: "搜索栏",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/799a2640-efc9-11e9-85ac-277ac136cc57_0.png?v=1576050506"
    },
    {
     name: "分段器",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/40679cb0-09ce-11e9-8124-fddfe52749de_0.png?v=1573554010"
    },
    {
     name: "步骤条",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/3132cf00-0363-11e9-9061-b944da819f18_0.png?v=1573554017"
    },
    {
     name: "滑动操作",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/4bc57110-418b-11e9-a75b-098e45436dd5_0.jpg?v=1587555295"
    },
    {
     name: "轮播图指示点",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/02475800-567c-11e9-976a-ab6a1f413ebb_0.png?v=1573554045"
    },
    {
     name: "标签",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/6b91f780-0363-11e9-aba5-819a95d778e1_0.png?v=1580906705"
    },
    {
     name: "章节标题",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/eb42b790-180d-11ea-b344-033f0360eb33_0.png?v=1575626403"
    },
    {
     name: "过渡动画",
     url:
      "https://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/40835960-0ac4-11ea-9fd4-3de4070e1710_0.png?v=1578572868"
    }
   ]
  };
 },
 computed: {
  uiName() {
   return this.uniAppUI.map(x => x.name);
  }
 },
 onLoad(option) {
  console.log("option = ", option);
 }
};
</script>

<style lang="scss">
$RADIO: 0.8;
.names {
 font-size: 16px;
 text-align: center;
}
.uni-ui-container {
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
 .uni-ui-item {
  width: 375px * $RADIO; // 250 / 2 * 2.6 * 1rpx;
  margin: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;

  image {
   width: 100%;
   height: 667px * $RADIO;
  }
 }
}
</style>
