<template>
    <div id="vheader">
        <div class="m-header">
            <div class="navbar-header">
                <a href="" title="北风忆夕" class="navbar-login"></a>
                <li v-for='(item,index) in routes' class="title-li" @click="activeHandler(index)">
                    <router-link class="title-a" :to="item.url" :class="{active:index==currentIndex}">{{item.title}}</router-link>
                </li>
                <i class="el-icon-search"></i>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name:"vheader",
    data(){
        return{
            routes:[
                {url:'/',title:"首页"},
                {url:'/articles',title:"文章"},
                {url:'/note',title:"随笔"},
                {url:'/share',title:"分享"},
                {url:'/link',title:"链接"},
            ],
            currentIndex: 0,
        }
    },
    methods:{
        activeHandler(index){
            this.currentIndex = index;
        }
    },
}
</script>

<style scoped>
#vheader{
    width: 100%;
    height: 70px;
    box-shadow: 0 0 45px 0 rgba(16,16,16,.1);
}
.m-header{
    max-width: 1140px;
    width: 100%;
    height: 70px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.navbar-header{
    vertical-align: middle;
    line-height: 70px;
    height: 70px;
}
.navbar-login{
    position: relative;
    float: left;
    width: 168px;
    height: 70px;
    line-height: 70px;
    text-indent: -9999px;
    padding: 0;
    z-index: 2;
    background-size: contain;
    background-position: left center;
    background-repeat: no-repeat;
}
.title-li{
    float: left;
}
.title-a{
    float: left;
    width: 102px;
    height: 70px;
    padding: 0 5px;
    margin: 0 10px 0 0;
    font-size: 15px;
    line-height: 70px;
    text-align: center;
    text-decoration : none;
    color: rgba(0, 0, 0, 0.658);
}
.el-icon-search{
    float: right;
    font-size: 20px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
    height: 70px;
    width: 70px;
    text-align: center;
    line-height: 70px
}
.title-a:hover{
    color: #000;
    background-color: rgba(240,240,240);
}
.el-icon-search:hover{
    color: rgba(0, 0, 0, 0.863);
    cursor:pointer;
}
.active{
    border-bottom: rgb(64, 158, 255) solid 4px;
}
</style>


