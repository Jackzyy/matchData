<template>
    <div class="formation">
        <div class="map">
            <div class="title">首发阵容</div>
            <svg class="bg-green" width="100%" viewBox="-375,-625,750,1250" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path name="角球区1" d="M-350 595 A 30 30 0 0 1 -320 625" stroke="#ffffff" fill="none" stroke-width="1"
                        stroke-opacity="0.5"></path>
                    <path name="角球区2" d="M-350 -595 A 30 30 0 0 0 -320 -625" stroke="#ffffff" fill="none" stroke-width="1"
                        stroke-opacity="0.5"></path>
                    <path name="角球区3" d="M350 -595 A 30 30 0 0 1 320 -625" stroke="#ffffff" fill="none" stroke-width="1"
                        stroke-opacity="0.5"></path>
                    <path name="角球区4" d="M320  625 A 30 30 0 0 1 350  595" stroke="#ffffff" fill="none" stroke-width="1"
                        stroke-opacity="0.5"></path>
                    <path name="罚球弧1" d="M90 437.5 A 100 90 0 0 0 -90 437.5" stroke="#ffffff" fill="none" stroke-width="1"
                        stroke-opacity="0.5"></path>
                    <path name="罚球弧2" d="M90 -437.5 A 100 90 0 0 1 -90 -437.5" stroke="#ffffff" fill="none" stroke-width="1"
                        stroke-opacity="0.5"></path>
                    <path name="边线" fill="none" stroke="#ffffff" id="svg" d="m-350,625 L-350,-625 350,-625 350,625 z" stroke-width="1"
                        stroke-opacity="1"></path>
                    <path name="中线" fill="none" stroke="#ffffff" id="svg" d="m-350,0 L350,0" stroke-width="1" stroke-opacity="0.5"></path>
                    <path name="禁区1" fill="none" stroke="#ffffff" id="svg" d="m-190,625 L-190,437.5 190,437.5 190,625" stroke-width="1"
                        stroke-opacity="0.5"></path>
                    <path name="小禁区1" fill="none" stroke="#ffffff" id="svg" d="m-90,625 L-90,562.5 90,562.5 90,625" stroke-width="1"
                        stroke-opacity="0.5"></path>
                    <path name="禁区2" fill="none" stroke="#ffffff" id="svg" d="m-190,-625 L-190,-437.5 190,-437.5 190,-625"
                        stroke-width="1" stroke-opacity="0.5"></path>
                    <path name="小禁区2" fill="none" stroke="#ffffff" id="svg" d="m-90,-625 L-90,-562.5 90,-562.5 90,-625"
                        stroke-width="1" stroke-opacity="0.5"></path>
                    <ellipse name="中圈" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.5" cx="0" cy="0" rx="93.75"
                        ry="93.75"></ellipse>
                    <ellipse name="中点" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.5" cx="0" cy="0" rx="8.928571428571429"
                        ry="8.928571428571429"></ellipse>      
                </g>
            </svg>
        </div>
        <div class="sub-player">
            <div class="title">替补阵容</div>
            <div class="player-data">
                <ul>
                    <div class="team-a team">
                        <div class="img"></div>
                        <span>纽伦堡</span>
                    </div>
                    <li v-for="item in 7" :key="item.id">
                        <div class="item">
                            <div class="img">{{item}}</div>
                            <span>伊沙克</span>
                        </div>
                    </li>
                </ul>
                <ul>
                    <div class="team-b team">
                        <div class="img"></div>
                        <span>纽伦堡</span>
                    </div>
                    <li v-for="item in 7" :key="item.id">
                        <div class="item">
                            <div class="img">{{item}}</div>
                            <span>伊沙克</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
    .bg-green{
        background-color: #54c06f;
    }
    ul,li{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .title{
        font-size:0.28rem;
        padding: 0.26rem 0.2rem;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(51,51,51,1);
    }
    .formation{
        background-color: #F7F3F7;
        .map{
            background-color: #fff;
            border-top: 0.2rem solid #F7F3F7;
        }
        .sub-player{
            background-color: #fff;
            .team{
                display: flex;
                align-items: center;
                padding: 0.3rem 0.5rem;
                border-top: 0.01rem solid #F1F1F1;
                border-bottom: 0.01rem solid #F1F1F1;
                .img{
                    width:0.5rem;
                    height:0.5rem;
                    background-color: #ccc;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right: 0.1rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                span{
                    font-size:0.28rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(153,153,153,1);
                }
            }
            .team-b{
                border-left: 0.01rem solid #F7F3F7;
            }
            .player-data{
                display: flex;
                ul{
                    width: 50%;
                }
                ul:nth-child(2){
                    li{
                        border-left: 0.01rem solid #F7F3F7;
                        .img{
                            background-color: #1B3388;
                        }
                    }
                }
            }
            li{
                border-bottom: 0.01rem solid #F7F3F7;
                .item{
                    display: flex;
                    align-items: center;
                    padding: 0.3rem 0.5rem;
                    .img{
                        width:0.5rem;
                        height:0.5rem;
                        background-color: #A51023;
                        border-radius: 50%;
                        overflow: hidden;
                        margin-right: 0.1rem;
                        text-align: center;
                        line-height: 0.5rem;
                        font-size:0.2rem;
                        color: #fff;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    span{
                        font-size:0.28rem;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(102,102,102,1);
                    }
                }
            }
        }
    }
</style>