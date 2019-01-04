<template>
    <div class="rank-data">
        <div class="rank-data-header">
            <!-- 时间Pick -->
            <div class="time-pick" @click="isShow">
                <span>2018/19</span>
                <div class="img">
                    <img src="@/static/icon/data_pull_n.png.png" alt="">
                </div>
                
            </div>
            <Popup v-model="isShowTime" position="bottom" overlay>
                <Picker :columns="columns" show-toolbar
                @cancel="onCancel"
                @confirm="onConfirm"/>
            </Popup>

            <!-- 导航栏 -->
            <div class="rank-nav">
                <ul class="tabs">
                    <li v-for="(item,index) in rankNav" :key='index'
                    @click="tab(index)"
                    :class="index == rankNavIndex ? 'active':'tab'">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- loading -->
         
        <!-- 比赛数据 -->
        <div class="rank-data">
            <div v-for="(item,index) in rankNav" :key="index" v-show="index == rankNavIndex">
                <!-- 实时积分榜 -->
                <div v-show="index == 0">
                    <PullRefresh v-model="isLoading" @refresh="onRefreshScoreBoard"> 
                        <List
                            v-model="loading"
                            @load="onLoadScoreBoard"
                            :immediate-check='false'> 
                            <ScoreBoard :ScoreBoard = 'ScoreBoard'></ScoreBoard>
                        </List>
                        <div class="loading" slot="loading">
                            <img src="@/static/icon/loading.gif" alt="">
                            <span>加载中...</span>
                        </div>
                    </PullRefresh> 
                </div>
                <!-- 射手榜 -->
                <div v-show="index == 1">
                    <PullRefresh v-model="isLoading" @refresh="onRefreshTopScorer">  
                        <List
                            v-model="loading"
                            @load="onLoadTopScorer">
                            <TopScorer :TopScorer = 'TopScorer'></TopScorer>
                        </List>
                        <div class="loading" slot="loading">
                            <img src="@/static/icon/loading.gif" alt="">
                            <span>加载中...</span>
                        </div>
                    </PullRefresh>
                </div>
                <!-- 赛程榜 -->
                <div v-show="index == 2">
                    <ScheduleList></ScheduleList>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ScheduleList from '@/components/ScheduleList' //赛程榜
import ScoreBoard from '@/components/ScoreBoard'     //积分榜
import TopScorer from '@/components/TopScorer'       //射手榜
import { Picker, Popup, PullRefresh, List  } from 'vant'
    export default {
        components:{
            ScheduleList,
            ScoreBoard,
            TopScorer,
            Picker,
            Popup,
            PullRefresh,
            List     
        },
        data() {
            return {
                rankNavIndex:0,
                rankNav:['实时积分榜','射手榜','赛程榜'],
                isShowTime:false,
                columns: ['2011', '2012', '2013', '2014', '2015'],
                isLoading: false,
                loading: false,

                // 模拟积分数据
                ScoreBoard:[],
                TopScorer:[],
            }
        },
        
        methods: {
            tab(index) {
                this.rankNavIndex = index;
                if(index === 0){
                    this.getSchedule()
                }else if(index === 1){
                    this.getTopScorer()
                }else if(index === 2){

                }
            },
            isShow(){
                this.isShowTime = !this.isShowTime
            },

            // 模拟数据获取
            getSchedule(){
                this.$axios.get('/ScoreBoard').then((res) => {
                    console.log(res);
                    this.ScoreBoard = res.data
                }).catch((err) => {
                    console.log(err);
                });
            },
            getTopScorer(){
                this.$axios.get('/TopScorer').then((res) => {
                    console.log(res);
                    console.log('射手榜',res.data);
                    this.TopScorer = res.data
                    console.log(this.TopScorer);
                }).catch((err) => {
                    console.log(err);
                });
            },
            onRefreshScoreBoard(){
                setTimeout(() => {
                    this.isLoading = false
                    this.getSchedule()
                    this.$toast('用户刷新积分榜')
                }, 1000);
            },
            onRefreshTopScorer(){
                setTimeout(() => {
                    this.isLoading = false
                    this.TopScorer = this.TopScorer.concat(this.TopScorer)
                    this.$toast('用户刷新射手榜')
                }, 1000);
            },
            onLoadScoreBoard(){
                setTimeout(() => {
                    this.loading = false
                    this.ScoreBoard = this.ScoreBoard.concat(this.ScoreBoard.slice(0,10))
                    this.$toast('用户加载更多积分榜')
                }, 1000);
            },
            onLoadTopScorer(){
                setTimeout(() => {
                    this.loading = false
                    this.TopScorer = this.TopScorer.concat(this.TopScorer.slice(0,10))
                    this.$toast('用户加载更多射手榜')
                }, 1000);
            },
            onCancel(){
                this.$toast('点击取消')
                this.isShowTime = false
            },
            onConfirm(value, index){
                this.$toast(value)
                this.isShowTime = false
            }
        },
        mounted(){

            
        },
        created(){
            this.getSchedule()
            
        }
    }
</script>

<style scoped lang='scss'>
    // 下拉刷新
    .loading{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            margin-right: 0.2rem;
        }
    }

    .rank-data{
        overflow: hidden;
        margin: auto;
    }
    .rank-data-header{
        display: flex;
        align-items: center;
        // padding-top: 0.3rem;
        .time-pick{
            height:0.25rem;
            font-size:0.26rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(51,51,51,1);
            display: flex;
            align-items: center;
            margin-left: 0.25rem;
            .img{
                width:0.26rem;
                height:0.26rem;
                line-height: 0.26rem;
                margin-left: 0.08rem;
                img{
                    width:0.26rem;
                    height:0.26rem;
                }
            }
        }
        .rank-nav{//tab切换
            ul{
                display: flex;
                width: 4.5rem;
                margin-left: 0.37rem;
                li{
                    width: 100%;
                    height:0.5rem;
                    background:rgba(164,31,36,1);
                    line-height: 0.5rem;
                    text-align: center;
                    font-size:0.26rem;
                    font-weight:500;
                    border-top: 0.5px solid rgba(164,31,36,1);
                    border-left: 0.5px solid rgba(164,31,36,1);
                    border-bottom: 0.5px solid rgba(164,31,36,1);
                }
                li:first-child{
                    border-top-left-radius:0.11rem;
                    border-bottom-left-radius:0.11rem;
                }
                li:last-child{
                    border-right: 0.5px solid #A41F24;
                    border-top-right-radius:0.11rem;
                    border-bottom-right-radius:0.11rem;
                }
                .tab{
                    background-color: #fff;
                    color:rgba(51,51,51,1);
                }
                .active{
                    background-color: #A41F24;
                    color: rgba(255,255,255,1);;
                }
            }
        }
    }
    
</style>