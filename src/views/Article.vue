<template>
  <div class="article">
    <article>
      <p>北京时间12月10日下午, “一带一路杯” 云南国际邀请赛结束了两场国内球队的内战, 四川九牛2-1击败南通支云，江西联盛2-0击败沈阳城建。</p>
      <p><img src="@/static/img/pic.jpg"></p>
      <p><span><i></i>四川九牛2-1南通支云</span></p>
      <p>上半场比赛双方均无建数, 四川九牛进行了两次换人，杨子艺换宋委鹏，周铭灏换刘航呈。下半场开始，九牛再次做出换人调整，张树、邱实、韩家宝上场。</p>
      <p>第75分钟，四川九牛策动进攻， 杨子艺射门被扑出，余迪补射破门, 场上比分0-1。第83分钟，周铭灏禁区抽射破网, 收获个人首场进球 , 场上比分改写0-2。补时阶段南通支云利用角球, 禁区内混乱得手, 最终, 四川九牛2-1获胜。</p>
      <p><span><i></i>江西联盛2-0沈阳城建</span></p>
      <p>上半场比赛，耿志庆破门，为联盛取得领先。下半场, 魏景星扩大比分 , 最终江西联盛取得了2-0的胜利。</p>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: ""
    };
  },
  methods: {

    
  },
  created() {

  }
};
</script>

<style scoped lang='scss'>
article {
  p{
    font-size:17px;
    font-family:'PingFang-SC';
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:30px;
    i{
      display: inline-block;
      width: 5px;
      height: 20px;
      background-color: #A41F24;
      margin-right: 10px;
    }
    span{
      font-size:18px;
      font-family:'PingFang-SC';
      font-weight:800;
      color:rgba(51,51,51,1);
      line-height:30px;
      display: flex;
      align-items: center;
    }
  }
  img {
    width: 100%;
  }
}
</style>