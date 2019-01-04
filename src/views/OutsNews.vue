<template>
    <div class="outs-news">
        <div class="list" v-for="(item,index) in 10" :key="item.id">
            <div class="img">
                <img src="@/static/img/OUTS.png" alt="">
            </div>
            <div class="content">
                <div class="news-title">
                    西甲、德甲综述:塞尔塔0-0加内斯狼堡2-0客胜纽伦堡
                </div>
                <div class="news-time">{{index}}分钟前</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
    .outs-news{
        padding: 0 0.2rem;
        border-top: 0.2rem solid #F7F3F7;
    }
    .list{
        display: flex;
        justify-content: space-between;
        padding: 0.19rem 0;
        background-color: #fff;
        border-bottom: 0.01rem solid #F1F1F1;
        .img{
            width:2.17rem;
            height:1.67rem;
            background-color: #ccc;
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
                font-size:0.24rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(153,153,153,1);
                align-self: flex-end;
            }
        }
        
    }
</style>