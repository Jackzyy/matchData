<template>
    <div class="schedule-list">
        <div class="select-rank-nav">
            <div class="last-rank" @click="lastRank">
                <img src="@/static/icon/data_last.png.png" alt="">
                <span>上一轮</span>
            </div>
            <div class="select-rank" @click="selectRound">
                <span>第 18 轮</span>
                <img src="@/static/icon/data_choice.png.png" alt="">
            </div>
            <div class="next-rank" @click="nextRank">
                <span>下一轮</span>
                <img src="@/static/icon/data_next.png.png" alt="">
            </div>
        </div>

        <div class="rounds-list" v-for="item in 20" :key="item.id">
            <div class="round-time">
                <span>01-06</span>
                <span>01-07  01:30</span>
            </div>
            <div class="round-team">
                <div class="team-a">
                    <span>埃瓦尔</span>
                    <div class="img">
                        <img src="https://img.dongqiudi.com/data/pic/1324.png" alt="">
                    </div>
                </div>
                <span class="vs">VS</span>
                <div class="team-b">
                    <div class="img">
                        <img src="https://img.dongqiudi.com/data/pic/982.png" alt="">
                    </div>
                    <span class="van-ellipsis">比利亚雷亚尔</span>
                </div>
            </div>
        </div>

        <Popup v-model="isShowRound" position="bottom" overlay>
            <Picker :columns="columns" show-toolbar
            @cancel="onCancel"
            @confirm="onConfirm"/>
        </Popup>
    </div>
</template>

<script>
import { Popup, Picker, PullRefresh, Toast } from 'vant';
    export default {
        components:{
            Popup,
            Picker,
            PullRefresh,
            Toast
        },
        props:{
            
        },
        data() {
            return {
                isShowRound: false,
                columns: ['11', '12', '13', '14', '15'],
                isLoading: false,
            }
        },
        methods: {
            selectRound() {
                this.isShowRound = !this.isShowRound
            },
            onRefresh(){
                setTimeout(() => {
                    this.isLoading = false
                }, 2000);
            },
            lastRank(){
                this.$toast('点击了上一轮');
            },
            nextRank(){
                this.$toast('点击了下一轮');
            },
            onCancel(){
                this.$toast('点击取消')
                this.isShowRound = false
            },
            onConfirm(value, index){
                this.$toast(value)
                this.isShowRound = false
            }
        }
    }
</script>

<style scoped lang='scss'>
    .schedule-list{
        font-size: 0.26rem;
        .select-rank-nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.2rem;
            padding: 0.34rem 0.32rem;
            background:rgba(247,243,247,1);
            img{
                width: 0.24rem;
                height: 0.14rem;
            }
            .last-rank{
                display: flex;
                align-items: center;
                span{
                    margin-left: 0.15rem;
                }
            }
            .select-rank{
                display: flex;
                align-items: center;
                span{
                    margin-right: 0.01rem;
                }
            }
            .next-rank{
                display: flex;
                align-items: center;
                span{
                    margin-right: 0.15rem;
                }
            }
        }
        .rounds-list{
            font-size: 0.24rem;
            padding: 0.26rem 0.2rem;
            box-sizing: content-box;
            border: 0.01rem solid #F1F1F1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .round-time{
                width: 2.2rem;
                color:rgba(102,102,102,1);
            }
            .round-team{
                display: flex;
                justify-content: flex-end;
                width: 5rem;
                .team-a{
                    display: flex;
                    align-items: center;
                    .img{
                        width: .4rem;
                        height: .4rem;
                        // background-color: #ccc;
                        margin-left: 0.15rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    span{
                        width: 1.4rem;
                    }
                }
                .vs{
                    margin: 0 0.2rem;
                }
                .team-b{
                    display: flex;
                    align-items: center;
                    .img{
                        width: .4rem;
                        height: .4rem;
                        // background-color: #ccc;
                        margin-right: 0.15rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    span{
                        width: 1.4rem;
                    }
                }
            }
        }
    }

</style>