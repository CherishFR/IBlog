<template>
    <div id="vlcard">
        <div class="posts-list home-list regular-list row justify-content-lg-center">

            <div class="item-regular col-12 col-md-12 col-lg-10 py-4 py-md-0">
                <article class="media mb-0">
                    <div class="image">
                        <a href="www.baidu.com" target="_blank" title="这里是标题1">
                            <img src="https://statics.mf8.biz/wp-content/uploads/2018/04/2018040416555419.jpeg?x-oss-process=image/resize,w_300,h_225,m_fill/sharpen,100" 
                            class="custom-hover-img aliyunoss lazyloaded">
                        </a>
                    </div>
                    <div class="media-body content pl-3 pl-md-4 pr-0 pt-2 pt-md-3 pb-2 pb-md-0">
                        <div class="meta mb-2 mb-md-3 light-10">
                            <span class="u-cat-name d-block font-14  u-cat-color">
                                <a class="text-primary" href="www.baidu.com">Linux</a>
                            </span>
                        </div>
                        <div class="title mb-3 mb-md-4">
                            <h2 class="font-20 font-md-18 font-weight-bold text-l2 light-14">
                                <a href="www.baidu.com" target="_blank">这里是标题1</a>
                            </h2>
                        </div>
                        <div class="desc mb-3 mb-md-4 d-none d-md-block">
                            <p class="text-l2 font-md-12 text-secondary">
                                使用IPV6转换服务实现网站的双栈访问
                                前言
                                转眼间，一下子就到了 18年底了，距离中办国办印发《推进互联网协议第六版（IPv6）规模部署行动计划》（以下简称《
                                ...
                            </p>
                        </div>
                    </div>
                </article>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:"vlcard",
    components:{

  }
}
</script>

<style scoped>
.col-12, .col-lg-10, .col-md-12 {
    padding-right: 15px;
    padding-left: 15px;
}
.posts-list {
    position: relative;
}
.justify-content-lg-center {
    -ms-flex-pack: center!important;
    justify-content: center!important;
}
.media {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
}
.image {
    position: relative;
    overflow: hidden;
    width: 300px;
    height: auto;
    max-height: 225px;
}
.image img {
    display: block;
    width: 100%;
    height: auto;
}

.u-cat-name {
    margin-left: 20px;
    position: relative;
}
.u-cat-name::before {
    position: absolute;
    background: #262626;
    border-radius: 20px;
    width: 10px;
    height: 10px;
    display: block;
    content: '';
    left: -20px;
    top: 50%;
    -webkit-transform: translate(0%,-50%);
    -ms-transform: translate(0%,-50%);
    transform: translate(0%,-50%);
}
.text-primary {
    color: #262626!important;
    background: transparent
}
a:hover { 
  text-decoration: none; 
}
.text-secondary {
    color: #6c757d!important;
    font-size: 14px;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.mb-md-4, .my-md-4 {
    margin-bottom: 1.5rem!important;
}
.mb-lg-5, .my-lg-5 {
    margin-bottom: 3rem!important;
}
</style>
