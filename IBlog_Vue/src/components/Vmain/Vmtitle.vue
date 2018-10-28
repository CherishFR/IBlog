<template>
    <div id="vmtitle">
        <div class="posts-list home-list regular-list row justify-content-lg-center">

            <div class="item-regular col-12 col-md-12 col-lg-10 py-4 py-md-0">
                <article class="media mb-0 mb-lg-5">
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

            <div class="item-regular col-12 col-md-12 col-lg-10 py-4 py-md-0">
                <article class="media mb-0 mb-lg-5">
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
    name:"vmtitle",
    components:{

  }
}
</script>

<style scoped>
.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
    padding-right: 15px;
    padding-left: 15px;
}
.posts-list {
    position: relative;
    min-height: 328px;
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
