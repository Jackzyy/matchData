<template>
    <div class="outs-data">
        <div class="league-table">
            <div class="common-title">
                <span class="type">联赛积分榜</span>
                <div class="recent-nav">
                    <span :class="leagueSwitch == 'btn1' ? 'active-span':''" @click="allMatch()">全部</span>
                    <span :class="leagueSwitch == 'btn2' ? 'active-span':''" @click="homeCourt()">主场</span>
                    <span :class="leagueSwitch == 'btn3' ? 'active-span':''" @click="awayGround()">客场</span>
                </div>
            </div>
            <div class="league-table-data">
                <div class="rank-data-header layout">
                    <div class="rank-list">
                        <span>排行</span>
                    </div>
                    <div class="rank-team">
                        <span>球队</span>
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
                        <span>得/失</span>
                    </div>
                    <div class="scoure">
                        <span>积分</span>
                    </div>
                </div>
                <div class="rank-data-content layout" v-for="item in 2" :key="item.id">
                    <div class="rank-list">
                        <span>1</span>
                    </div>
                    <div class="rank-team">
                        <span>沃尔夫斯堡</span>
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
                </div>
            </div>
        </div>

        <div class="recent-clash">
            <div class="common-title">
                <span class="type">近期交锋</span>
                <div class="recent-nav">
                    <span :class="clashSwitch == 'btn1' ? 'active-span':''" @click="recentThreeMatch()">近3场</span>
                    <span :class="clashSwitch == 'btn2' ? 'active-span':''" @click="recentFiveMatch()">近5场</span>
                    <span :class="clashSwitch == 'btn3' ? 'active-span':''" @click="recentTenMatch()">近10场</span>
                </div>
            </div>
            <div class="clash-team">
                <div class="team-a team">
                    <div class="img"></div>
                    <span>纽伦堡</span>
                </div>
                <div class="score">
                    <span style="color:#A51023">0胜</span>
                    <span>0平</span>
                    <span style="color:#1B3388">2胜</span>
                </div>
                <div class="team-b team">
                    <span>沃尔夫斯堡</span>
                    <div class="img"></div>
                </div>
            </div>
            <div class="rank-data">
                <div class="recent-clash-header">
                    <div class="clash-time">
                        比赛时间 
                    </div>
                    <div class="clash-competition">
                        赛事 
                    </div>
                    <div class="clash-hometeam">
                        主队
                    </div>
                    <div class="clash-score">
                        比分 
                    </div>
                    <div class="clash-guestteam">
                        客队
                    </div>
                </div>
                <div class="recent-clash-data recent-clash-header" v-for="item in 2" :key="item.id">
                    <div class="clash-time">
                        2018-12-15
                    </div>
                    <div class="clash-competition">
                        德甲
                    </div>
                    <div class="clash-hometeam">
                        纽伦堡
                    </div>
                    <div class="clash-score">
                        0-2
                    </div>
                    <div class="clash-guestteam">
                        沃尔夫斯堡
                    </div>
                </div>
            </div>
            
        </div>

        <div class="recent-record team-a">
            <div class="common-title">
                <span class="type">纽伦堡最近战绩</span>
                <div class="score">
                    <span style="color:#A51023">0胜</span>
                    <span>0平</span>
                    <span style="color:#1B3388">2负</span>
                </div>
                <div class="recent-nav">
                    <span :class="recordASwitch == 'btn1' ? 'active-span':''" @click="recordAFive()">近5场</span>
                    <span :class="recordASwitch == 'btn2' ? 'active-span':''" @click="recordATen()">近10场</span>
                    <span :class="recordASwitch == 'btn3' ? 'active-span':''" @click="recordAMore()">更多</span>
                </div>
            </div>

            <div class="recent-data" v-for="item in 4" :key="item.id">
                <div class="record-time">
                    2018-12-15
                </div>
                <div class="record-competition">
                    德甲
                </div>
                <div class="record-hometeam">
                    纽伦堡
                </div>
                <div class="record-score">
                    0-2
                </div>
                <div class="record-guestteam">
                    沃尔夫斯堡
                </div>
            </div>
        </div>

        <div class="recent-record team-b">
            <div class="common-title">
                <span class="type">纽伦堡最近战绩</span>
                <div class="score">
                    <span style="color:#A51023">0胜</span>
                    <span>0平</span>
                    <span style="color:#1B3388">2胜</span>
                </div>
                <div class="recent-nav">
                    <span :class="recordBSwitch == 'btn1' ? 'active-span':''" @click="recordBFive()">近5场</span>
                    <span :class="recordBSwitch == 'btn2' ? 'active-span':''" @click="recordBTen()">近10场</span>
                    <span :class="recordBSwitch == 'btn3' ? 'active-span':''" @click="recordBMore()">更多</span>
                </div>
            </div>

            <div class="recent-data" v-for="item in 4" :key="item.id">
                <div class="record-time">
                    2018-12-15
                </div>
                <div class="record-competition">
                    德甲
                </div>
                <div class="record-hometeam">
                    纽伦堡
                </div>
                <div class="record-score">
                    0-2
                </div>
                <div class="record-guestteam">
                    沃尔夫斯堡
                </div>
            </div>
        </div>

        <div class="related-news">
            <span>相关新闻</span>
            <div class="news" v-for="item in 2" :key="item.id">
                <div class="img">
                    <img src="@/static/img/OUTS.png" alt="">
                </div>
                <div class="content">
                    <div class="news-title">
                        德甲:金切克布雷卡洛破门,纽伦堡0-2狼堡    
                    </div>
                    <div class="news-time">4天前</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                leagueSwitch:'btn1',
                clashSwitch:'btn1',
                recordASwitch:'btn1',
                recordBSwitch:'btn1'
            }
        },
        methods: {
            // 联赛积分榜
            allMatch() {
                this.leagueSwitch = 'btn1'
            },
            homeCourt(){
                this.leagueSwitch = 'btn2'
            },
            awayGround(){
                this.leagueSwitch = 'btn3'
            },
            // 近期交锋
            recentThreeMatch() {
                this.clashSwitch = 'btn1'
            },
            recentFiveMatch(){
                this.clashSwitch = 'btn2'
            },
            recentTenMatch(){
                this.clashSwitch = 'btn3'
            },
            // TeamA最近战绩
            recordAFive() {
                this.recordASwitch = 'btn1'
            },
            recordATen(){
                this.recordASwitch = 'btn2'
            },
            recordAMore(){
                this.recordASwitch = 'btn3'
            },
            // TeamB最近战绩
            recordBFive() {
                this.recordBSwitch = 'btn1'
            },
            recordBTen(){
                this.recordBSwitch = 'btn2'
            },
            recordBMore(){
                this.recordBSwitch = 'btn3'
            },
        },
    }
</script>

<style scoped lang='scss'>
    .outs-data{
        background-color: #F7F3F7;
        border-top: 0.2rem solid #F7F3F7;
        .common-title{
            display: flex;
            justify-content: space-between;
            height: 0.8rem;
            line-height: 0.8rem;
            border-bottom: 0.01rem solid rgba(241, 241, 241, 1);
            padding: 0 0.2rem;
            .type{
                max-width: 2rem;
                font-size:0.28rem;
                font-family:PingFang-SC-Bold;
                font-weight:bold;
                color:rgba(51,51,51,1);
            }
            .score{
                span{
                    font-size:0.28rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                }
            }
            .recent-nav{
                span{
                    display: inline-block;
                    width:0.8rem;
                    height:0.4rem;
                    line-height: 0.4rem;
                    margin-left: 0.1rem;
                    text-align: center;
                    background:#F7F3F7;
                    border-radius:0.19rem;
                    font-size:0.21rem;
                    font-family:PingFang-SC-Bold;
                    color:#999999
                }
                .active-span{
                    display: inline-block;
                    width:0.8rem;
                    height:0.4rem;
                    line-height: 0.4rem;
                    margin-left: 0.1rem;
                    text-align: center;
                    background:#A51023;
                    border-radius:0.19rem;
                    font-size:0.21rem;
                    font-family:PingFang-SC-Bold;
                    color:#FFFFFF
                }
            }
        }
        .league-table{
            background-color: #fff;
            .layout{
                display: flex;
                text-align: center;
                font-size:0.24rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(51,51,51,1);
                padding: 0.2rem 0.2rem;
                .rank-list{
                    width: 1rem;
                }
                .rank-team{
                    width: 2rem;
                    margin-left: 0.2rem;
                    text-align: left;
                    span{
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
        }
        .recent-clash{
            margin-top: 0.2rem;
            background-color: #fff;
            .clash-team{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.2rem 0.2rem;
                .team{
                    display: flex;
                    align-items: center;
                    width: 2.36rem;
                    .img{
                        width:0.6rem;
                        height:0.6rem;
                        border-radius: 50%;
                        background-color: #ccc;
                        overflow: hidden;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    span{
                        display: inline-block;
                        font-size:0.28rem;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                    }
                }
                .team-a{
                    span{
                        margin-left: 0.2rem;
                    }
                }
                .team-b{
                    justify-content: flex-end;
                    span{
                        margin-right: 0.2rem;
                    }
                }
                .score{
                    span{
                        font-size:0.28rem;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                    }
                }
            }
            .rank-data{
                .recent-clash-header{
                    display: flex;
                    justify-content: space-between;
                    font-size:0.28rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(102,102,102,1);
                    text-align: center;
                    padding: 0.38rem 0.2rem;
                    .clash-time{
                        width: 1.5rem;
                    }
                    .clash-competition{
                        width: 1rem;
                    }
                    .clash-score{
                        width: 1rem;
                    }
                    .clash-hometeam{
                        width: 2rem;
                    }
                    .clash-guestteam{
                        width: 2rem;
                    }
                }
                .recent-clash-data{
                    font-size:0.24rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    padding: 0.2rem 0.2rem;
                }
            }
        }
        .recent-record{
            background-color: #fff;
            margin-top: 0.2rem;
            .recent-data{
                display: flex;
                justify-content: space-between;
                font-size:0.24rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(102,102,102,1);
                text-align: center;
                padding: 0.2rem 0.2rem;
                .record-time{
                    width: 1.5rem;
                }
                .record-competition{
                    width: 1rem;
                }
                .record-score{
                    width: 1rem;
                }
                .record-hometeam{
                    width: 2rem;
                }
                .record-guestteam{
                    width: 2rem;
                }
                
            }
        }
        .related-news{
            background-color: #fff;
            margin-top: 0.2rem;
            span{
                display: inline-block;
                font-size:0.31rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(102,102,102,1);
                padding: 0.28rem 0.2rem;
            }
            .news{
                display: flex;
                justify-content: space-between;
                padding: 0.19rem 0.21rem;
                background-color: #fff;
                .img{
                    width:2.17rem;
                    height:1.67rem;
                    background-color: #F1F1F1;
                    border-radius:0.19rem;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .content{
                    display: flex;
                    flex: 1;
                    margin-left: 0.2rem;
                    flex-direction: column;
                    justify-content: space-between;
                    .news-title{
                        font-size:0.28rem;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                    }
                    .news-time{
                        width:0.67rem;
                        font-size:0.24rem;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(153,153,153,1);
                    }
                }
            }
        }
    }
</style>