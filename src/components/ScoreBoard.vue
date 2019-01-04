<template>
  <div class="integral">
    <!-- 积分榜头部 -->
    <div class="rank-data-header layout">
      <div class="rank-list">
        <span>排行</span>
      </div>
      <div class="rank-team">
          <span>球队</span>
      </div>
      <div class="rank-match">
          <span>场次</span>
      </div>
      <div class="win">
          <span>胜</span>
      </div>
      <div class="draw">
          <span>平</span>
      </div>
      <div class="lose">
          <span>负</span>
      </div>
      <div class="gain-loss">
          <span>进/失</span>
      </div>
      <div class="scoure">
          <span>积分</span>
      </div>
    </div>

    <!-- 积分榜数据表 -->
    <!-- <div class="rank-data-content layout">
        <div class="rank-list">
            <span>1</span>
        </div>
        <div class="rank-team">
            <div class="img"></div>
            <span>利物浦</span>
        </div>
        <div class="rank-match">
            <span>16</span>
        </div>
        <div class="win">
            <span>16</span>
        </div>
        <div class="draw">
            <span>3</span>
        </div>
        <div class="lose">
            <span>0</span>
        </div>
        <div class="gain-loss">
            <span>36/0</span>
        </div>
        <div class="scoure">
            <span>42</span>
        </div>
    </div> -->
    <div class="rank-data-content layout" v-for="(item, index) in ScoreBoard" :key="index">
        <div class="rank-list">
            <span class="span-cirle">{{index+1}}</span>
        </div>
        <div class="rank-team">
            <div class="img">
                <img :src="item.teamIcon" alt="">
            </div>
            <span @click="handleTeam($event)" class="van-ellipsis">
                {{item.team}}
            </span>
        </div>
        <div class="rank-match">
            <span>{{item.match}}</span>
        </div>
        <div class="win">
            <span>{{item.win}}</span>
        </div>
        <div class="draw">
            <span>{{item.draw}}</span>
        </div>
        <div class="lose">
            <span>{{item.lose}}</span>
        </div>
        <div class="gain-loss">
            <span>{{item.gain}}/{{item.loss}}</span>
        </div>
        <div class="scoure">
            <span>{{item.scoure}}</span>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
        ScoreBoard:Array
    },
    data() {
        return {
            
        }
    },
    methods: {
        handleTeam(event){
            console.log(event);
            this.$toast(`点击球队 ${event.target.innerText}`)
        }
    },
  }
</script>

<style scoped lang='scss'>
  .integral{
    font-size:0.24rem;
    font-family:'PingFang-SC-Medium';
    font-weight:500;
    color:rgba(51,51,51,1);

    min-height: 93vh;
    .layout{
        display: flex;
        border-bottom: 0.01rem solid rgba(241, 241, 241, 1);
        text-align: center;
        .rank-list{
            width: 0.8rem;
            text-align: left;
        }
        .rank-team{
            display: flex;
            align-items: center;
            width: 2.52rem;
            margin-left: 0.2rem;
            .img{
                width: 0.35rem;
                height: 0.35rem;
                margin: 0 0.2rem 0 0.01rem;
                // background-color: #ccc;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            span{
                text-align: left;
                width: 1.5rem;
            }
        }
        .rank-match{
            width: 0.8rem;
        }
        .win{
            width: 0.4rem;
            margin-left: 0.2rem;
        }
        .draw{
            width: 0.4rem;
            margin-left: 0.2rem;
        }
        .lose{
            width: 0.4rem;
            margin-left: 0.2rem;
        }
        .gain-loss{
            width: 1rem;
            margin-left: 0.2rem;
        }
        .scoure{
            width: 0.8rem;
            margin-left: 0.2rem;
        }
    }
    .rank-data-header{
        padding: 0.3rem 0.25rem;
    }
    .rank-data-content{
        padding: 0.2rem 0.25rem;
        .rank-list{
            display: flex;
            align-items: center;
            text-align: left;
            .span-cirle{
                display: block;
                width: 0.34rem;
                height: 0.34rem;
                line-height: 0.35rem;
                border-radius: 50%;
                text-align: center;
                color: #333333;
                margin-left: 0.15rem;
            }
        }
    }
    .rank-data-content:nth-child(2) .rank-list span{
        color: #fff;
        background-color: #A41F24;
    }
    .rank-data-content:nth-child(3) .rank-list span{
        color: #fff;
        background-color: #F10945;
    }
    .rank-data-content:nth-child(4) .rank-list span{
        color: #fff;
        background-color: #FF6633;
    }
  }
</style>