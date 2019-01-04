<template>
    <!-- 赛况 -->
    <div class="outs">
        <div class="outs-news">
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

        <div class="outs-gif">
            <div class="outs-gif-title">
                <span>精彩GIF</span>
                <span>更多</span>
            </div>
            <div class="gif">
                <div class="gif-left content">
                    <div class="img">
                        <img src="@/static/img/OUTS.png" alt="">
                    </div>
                    <div class="gif-desc">
                        西甲、德甲综述:塞尔塔0-0莱加内斯:狼堡2-0客胜纽伦堡  
                    </div>
                    <div class="info">
                        <div class="gif-time">
                            93’
                        </div>
                        <div class="gif-player">
                            塞尔塔
                        </div>
                    </div>
                </div>
                <div class="gif-right content">
                    <div class="img">
                        <img src="@/static/img/OUTS.png" alt="">
                    </div>
                    <div class="gif-desc">
                        西甲、德甲综述:塞尔塔0-0莱加内斯:狼堡2-0客胜纽伦堡  
                    </div>
                    <div class="info">
                        <div class="gif-time">
                            93’
                        </div>
                        <div class="gif-player">
                            塞尔塔
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="step">
            <div class="step-event">事件</div>
            <!-- <div> -->
                <div class="position-start-center">
                    <div class="start-icon">
                        <img src="@/static/icon/saikuang_kaishi.png@2x.png" alt="">
                        <div class="bot">
                            <div class="circle"></div>
                            <div class="line"></div>
                        </div>
                    </div>
                </div>
                
                <div id="steps"></div>

                <div class="position-end-center">
                    <div class="start-icon">
                        <div class="bot">
                            <div class="line"></div>
                            <div class="circle"></div>
                        </div>
                        <img src="@/static/icon/saikuang_koushao.png@2x.png" alt="">
                    </div>
                </div>
            <!-- </div> -->
            
            <div class="step-event-icon">
                <div class="icon-item">
                    <div class="icon">
                        <img src="@/static/icon/saikuang_jinqiu.png@2x.png" alt="">
                    </div>
                    进球
                </div>
                <div class="icon-item">
                    <div class="icon">
                        <img src="@/static/icon/saikuang_zhugong.png@2x.png" alt="">
                    </div>
                    助攻
                </div>
            </div>
        </div>

        <div class="stroke-analysis">
            <span class="stroke-analysis-title">技术统计</span>
            <div class="team">
                <div class="team-a">
                    <span>纽伦堡</span>
                    <div class="team-icon"></div>
                </div>
                <div class="team-b">
                    <div class="team-icon"></div>
                    <span>沃尔夫斯堡</span>
                </div>
            </div>
            <div class="analysis-data">
                <div class="ball-control analysis-data-common">
                    <div class="team-a">
                        <span>15</span>
                        <div class="rate">
                            <div class="rate-inner" :style="style.control.teamA"></div>
                        </div>
                    </div>
                    <span class="title">控球率</span>
                    <div class="team-b">
                        <div class="rate">
                            <div class="rate-inner" :style="style.control.teamB"></div>
                        </div>
                        <span>10</span>
                    </div>
                </div>

                <div class="ball-control analysis-data-common">
                    <div class="team-a">
                        <span>48</span>
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                    </div>
                    <span class="title">传球成功率</span>
                    <div class="team-b">
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                        <span>48</span>
                    </div>
                </div>

                <div class="ball-control analysis-data-common">
                    <div class="team-a">
                        <span>48</span>
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                    </div>
                    <span class="title">射门</span>
                    <div class="team-b">
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                        <span>48</span>
                    </div>
                </div>

                <div class="ball-control analysis-data-common">
                    <div class="team-a">
                        <span>48</span>
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                    </div>
                    <span class="title">射正</span>
                    <div class="team-b">
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                        <span>48</span>
                    </div>
                </div>

                <div class="ball-control analysis-data-common">
                    <div class="team-a">
                        <span>48</span>
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                    </div>
                    <span class="title">进攻</span>
                    <div class="team-b">
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                        <span>48</span>
                    </div>
                </div>

                <div class="ball-control analysis-data-common">
                    <div class="team-a">
                        <span>48</span>
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                    </div>
                    <span class="title">危险进攻</span>
                    <div class="team-b">
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                        <span>48</span>
                    </div>
                </div>

                <div class="ball-control analysis-data-common">
                    <div class="team-a">
                        <span>48</span>
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                    </div>
                    <span class="title">任意球</span>
                    <div class="team-b">
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                        <span>48</span>
                    </div>
                </div>

                <div class="ball-control analysis-data-common">
                    <div class="team-a">
                        <span>48</span>
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                    </div>
                    <span class="title">角球</span>
                    <div class="team-b">
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                        <span>48</span>
                    </div>
                </div>

                <div class="ball-control analysis-data-common">
                    <div class="team-a">
                        <span>48</span>
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                    </div>
                    <span class="title">越位</span>
                    <div class="team-b">
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                        <span>48</span>
                    </div>
                </div>

                <div class="ball-control analysis-data-common">
                    <div class="team-a">
                        <span>48</span>
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                    </div>
                    <span class="title">犯规</span>
                    <div class="team-b">
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                        <span>48</span>
                    </div>
                </div>

                <div class="ball-control analysis-data-common">
                    <div class="team-a">
                        <span>48</span>
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                    </div>
                    <span class="title">黄牌</span>
                    <div class="team-b">
                        <div class="rate">
                            <div class="rate-inner"></div>
                        </div>
                        <span>48</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/utils/timeLine/steps.css';
import '@/utils/timeLine/steps.js';
var icon_A = require('@/static/icon/saikuang_zhugong.png@2x.png')       //助攻
var icon_B = require('@/static/icon/saikuang_qiuyuan.png@2x.png')       //进球
var icon_C = require('@/static/icon/saikuang_shangjiantou.png@2x.png')  //上场
var icon_D = require('@/static/icon/saikuang_xiajiantou.png@2x.png')    //下场
var icon_E = require('@/static/icon/saikuang.hongpai.png@2x.png')       //红牌
var icon_F = require('@/static/icon/saikuang_kaishi.png@2x.png')        //开始
var icon_G = require('@/static/icon/saikuang_koushao.png@2x.png')       //结束
    export default {
        data() {
            return {
                data: [
                    { title: "", description: `<div><img src=${icon_A} alt="">金切克(0-1)</div><div><img src=${icon_B} alt="">阿诺德</div>`,status: 1 },
                    { title: "", description: `<div>金切克(0-1)<img src=${icon_C} alt=""></div><div>阿诺德<img src=${icon_D} alt=""></div>`,side: "start-single",icon: "<span>8</span>", },
                    { title: "", description: `<div><img src=${icon_E} alt="">金切克(0-1)</div>`,status: 1, icon: "<span>18</span>", },
                    { title: "", description: `<div><img src=${icon_A} alt="">金切克(0-1)</div><div><img src=${icon_B} alt="">阿诺德</div>`,status: 1,icon: "<span>90+3</span>" }
                ],
                style:{
                    control:{}
                },
                analysis:[{
                  id:1,
                  teamA:15,
                  teamB:10 
                }]
            }
        },
        methods: {
            init() {
                var steps1 = steps({
                    el: "#steps",
                    data: this.data,
                    center: true,
                    active: 1,
                    iconType: "bullets",
                    sides: "two-sides",
                    direction: "vertical",
                    iconType: "custom",
                })
            },
            add(){
                let num = 1
                setInterval(() => {
                    if(num%2 == 0){
                        this.data.push({
                            title: "", 
                            description: `<div>金切克(0-1)</div><div>阿诺德</div>`,
                            status: 1,
                            icon: `<span>${num}</span>`
                    })}else{
                        this.data.push({
                            title: "", 
                            description: `<div>金切克(0-1)</div><div>阿诺德</div>`,
                            status: 1,
                            side: "start-single",
                            icon: `<span>${num}</span>`
                        })
                    }
                num++
                }, 2000);
            },
            styleControl(){
                this.analysis.forEach(item =>{
                    if(item.id == 1){
                        let A = item.teamA
                        let B = item.teamB
                        if(A > B){
                            this.style.control.teamA = `width:${A/(A+B)*100}%;backgroundColor:${'#A51023'}`
                            this.style.control.teamB = `width:${B/(A+B)*100}%`
                        }else if(A < B){
                            this.style.control.teamA = `width:${A/(A+B)*100}%`
                            this.style.control.teamB = `width:${B/(A+B)*100}%;backgroundColor:${'#A51023'}`
                        }else if(A == B){
                            this.style.control.teamA = `width:${A/(A+B)*100}%;backgroundColor:${'#A51023'}`
                            this.style.control.teamB = `width:${B/(A+B)*100}%;backgroundColor:${'#A51023'}`
                        }
                    }
                })
            }
        },
        mounted(){
            this.init()
            // this.add()
        },
        created(){
            this.styleControl()
        },
        watch:{
            data: function(){
                this.init()
            }
        }
    }
</script>

<style scoped lang='scss'>
    #steps1{
        height: 500px;
    }
    .outs{
        background-color: #F7F3F7;
        border-top: 0.2rem solid #F7F3F7;
        .outs-news{
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
        .outs-gif{
            margin-top: 0.2rem;
            background-color: #fff;
            padding: 0.2rem;
            .outs-gif-title{
                display: flex;
                justify-content: space-between;
                span:nth-child(1){
                    font-size:0.28rem;
                    font-family:PingFang-SC-Bold;
                    font-weight:bold;
                    color:rgba(51,51,51,1);
                }
                span:nth-child(2){
                    font-size:0.26rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(102,102,102,1);
                }
            }
            .gif{
                display: flex;
                justify-content: space-between;
            }
            .content{
                width: 3.42rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-top: 0.2rem;
                .img{
                    width:3.42rem;
                    height:2.24rem;
                    border-radius:0.19rem;
                    background-color: #ccc;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .gif-desc{
                    font-size:0.24rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    line-height:0.36rem;
                    margin-top: 0.2rem;
                }
                .info{
                    display: flex;
                    justify-content: space-between;
                    margin-top: 0.2rem;
                    .gif-time{
                        font-size:0.24rem;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(165,16,35,1);
                    }
                    .gif-player{
                        font-size:0.24rem;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(153,153,153,1);
                    }
                }
            }
        }
        .step{
            background-color: #fff;
            padding: 0 0.2rem;
            margin-top: 0.2rem;
            position: relative;
            .step-event{
                padding: 0.2rem 0;
                font-weight:bold;
                font-size:0.28rem;
                color:rgba(51,51,51,1);
            }
            .step-event-icon{
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.3rem 0.2rem;
                margin-top: -1rem;
                .icon{
                    width: 0.24rem;
                    height: 0.24rem;
                    margin-right: 0.1rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .icon-item{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 0 0.2rem;
                    font-size:0.24rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                }
            }
            #steps{
                margin-top: 1.6rem;
            }
            .position-start-center{
                position: absolute;
                left: 50%;
                transform: translateX(-50%)
            }
            .position-end-center{
                position: relative;
                top:-1.3rem;
                left: 50%;
                transform: translateX(-50%)
            }
            .start-icon{
                z-index: 999;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .bot{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .circle{
                        width:0.18rem;
                        height:0.18rem;
                        border-radius: 50%;
                        background-color: #A51023;
                    }
                   .line{
                        width: 4px;
                        height: 1rem;
                        background-color: #A51023;
                    } 
                }
                
                img{
                    width:0.35rem;
                    height:0.35rem;
                    padding: 0.2rem 0;
                }
            }
        }
        .stroke-analysis{
            background-color: #fff;
            margin-top: 0.2rem;
            padding: 0 0.2rem;
            .stroke-analysis-title{
                display: inline-block;
                font-size:0.28rem;
                font-family:PingFang-SC-Bold;
                font-weight:bold;
                color:rgba(51,51,51,1);
                padding: 0.2rem 0;
            }
            .team{
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-top: 1px solid #F1F1F1;
                border-bottom: 1px solid #F1F1F1;
                padding: 0.14rem 0;
                .team-icon{
                    width:0.56rem;
                    height:0.56rem;
                    border-radius: 50%;
                    background-color: #F1F1F1;
                }
                span{
                    font-size:0.24rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(51,51,51,1); 
                }
                .team-a{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    width: 2.55rem;
                    span{
                        margin-right: 0.1rem;
                    }
                }
                .team-b{
                    display: flex;
                    align-items: center;
                    width: 2.55rem;
                    span{
                        margin-left: 0.1rem;
                    }
                }
            }
            .analysis-data{
                .analysis-data-common{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.2rem 0;
                    .team-a{
                        display: flex;
                        align-items: center;
                        span{
                            font-size:0.24rem;
                            font-family:PingFang-SC-Medium;
                            font-weight:500;
                            color:rgba(51,51,51,1); 
                            margin-right: 0.05rem;
                        }
                        .rate{
                            width: 2.2rem;
                            height: 0.26rem;
                            background-color: #F1F1F1;
                            transform: rotateZ(180deg);
                            border-radius:0.04rem;
                            .rate-inner{
                                height: 100%;
                                width: 1rem;
                                background-color: #999999;
                                border-radius:0.04rem;
                            }
                        }
                    }
                    .title{
                        font-size:0.24rem;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                    }
                    .team-b{
                        display: flex;
                        align-items: center;
                        span{
                            font-size:0.24rem;
                            font-family:PingFang-SC-Medium;
                            font-weight:500;
                            color:rgba(51,51,51,1);
                            margin-left: 0.05rem; 
                        }
                        .rate{
                            width: 2.2rem;
                            height: 0.26rem;
                            background-color: #F1F1F1;
                            border-radius:0.04rem;
                            .rate-inner{
                                height: 100%;
                                width: 1rem;
                                background-color: #999999;
                                border-radius:0.04rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>