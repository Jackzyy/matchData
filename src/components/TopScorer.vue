<template>
    <div class="top-soccer">
        <!-- 射手榜头部 -->
        <div class="top-soccer-header layout">
            <div class="top-soccer-list"></div>
            <div class="top-soccer-player">球员</div>
            <div class="top-soccer-team">球队</div>
            <div class="top-soccer-win">进球</div>
        </div>

        <!-- 射手榜数据表 -->
        <!-- <div class="top-soccer-content layout">
            <div class="top-soccer-list">
                <span class="list">1</span>
            </div>
            <div class="top-soccer-player">
                <div class="img"></div>
                <span>萨玛塔</span>
            </div>
            <div class="top-soccer-team">
                <span>亨克</span>
            </div>
            <div class="top-soccer-win">
                <span>7</span>
            </div>
        </div> -->
        <div class="top-soccer-content layout" v-for="(item, index) in TopScorer" :key="index">
            <div class="top-soccer-list">
                <span class="list">{{index+1}}</span>
            </div>
            <div class="top-soccer-player">
                <div class="img">
                    <img :src="item.playerIcon" alt="">
                </div>
                <span class="player van-ellipsis">
                    {{item.teamPlayer}}
                </span>
            </div>
            <div class="top-soccer-team van-ellipsis">
                <span>
                    {{item.team}}
                </span>
            </div>
            <div class="top-soccer-win">
                <span>{{item.ranking}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            TopScorer:Array
        },
        data() {
            return {

            }
        },
        
        methods: {
            
        },
    }
</script>

<style scoped lang='scss'>
    .top-soccer{
        font-size:0.24rem;
        font-family:'PingFang-SC-Medium';
        font-weight:500;
        color:rgba(51,51,51,1);

        min-height: 93vh;
        .layout{
            display: flex;
            border-bottom: 0.01rem solid #F1F1F1;
            div{
                text-align: center;
                span{
                    line-height: 0.5rem;
                }
            }
            .top-soccer-list{
                width: 0.34rem;
                height: 0.34rem;
                margin-left: 0.4rem;
            }
            .top-soccer-player{
                width: 2rem;
                margin-left: 0.4rem;
                span{
                    width: 1.5rem;
                }
            }
            .top-soccer-team{
                width: 1.25rem;
                text-align:left; 
                margin-left: 0.7rem;
                span{
                    width: 1.5rem;
                }
            }
            .top-soccer-win{
                margin-left: 1.3rem;
                span{
                    margin-left: -1rem;
                }
            }
        }

        .top-soccer-header{
            padding: 0.3rem 0;
            .top-soccer-list{
                display: block;
                width: 0.34rem;
                height: 0.34rem;
                line-height: 0.34rem;
                text-align: center;
            }
        }

        .top-soccer-content{
            padding: 0.15rem 0;
            display: flex;
            align-items: center;
            .top-soccer-list{
                display: flex;
                align-items: center;
                .list{
                    display: block;
                    width: 0.34rem;
                    height: 0.34rem;
                    line-height: 0.34rem;
                    text-align: center;
                    border-radius: 50%;
                    color: #fff;
                    background-color: #A41F24;
                }
            }
            .top-soccer-player{
                display: flex;
                align-items: center;

                .img{
                    width: 0.5rem;
                    height: 0.5rem;
                    border-radius: 0.3rem;
                    // background-color: #ccc;
                    margin-left: 0.2rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                span{
                    width: 1rem;
                    text-align: left;
                    margin-left: 0.1rem;
                }
            }
            .top-soccer-team{
                width: 2rem;
                text-align:left; 
                margin-left: 0.7rem;
                span{
                    width: 1.5rem;
                }
            }
        }
    }
</style>