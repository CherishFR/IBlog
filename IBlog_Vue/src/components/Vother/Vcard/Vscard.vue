<template>
    <div id="vscard">
        <div class="item col-12 col-sm-6 col-md-6 col-lg-4">
            <article>
                <a class="custom-hover" href="https://kn007.net/" target="">
                    <div class="image"></div>
                    <div class="content">
                        <div class="title">
                            <span class="name">
                                <b>VUE</b>
                            </span>
                            <span class="desc"></span>
                        </div>
                    </div>
                </a>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name:"vscard",
    components:{

  }
}
</script>

<style scoped>
#vscard{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    width: 100%;
}
.item {
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
}
.col-lg-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}
.col-12, .col-lg-4, .col-md-6, .col-ms-6{
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
article {
    position: relative;
    display: block;
}
a {
    color: #262626;
    display: block;
    height: 120px;
    position: relative;
    overflow: hidden;
    transition: all .3s ease;
    cursor: pointer;
    background-color: transparent;
}
a:link, a:visited {
    text-decoration: none;
}
.custom-hover {
    vertical-align: top;
    max-width: 100%;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    transform: translateZ(0);
}
.custom-hover::before {
    background-color: rgba(21,21,21,.66);
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    opacity: .33;
    -webkit-transition: all 1s ease 0s;
    -moz-transition: all 1s ease 0s;
    -o-transition: all 1s ease 0s;
    transition: all 1s ease 0s;
}
.image {
    background: #c3cfe2;
    background: -webkit-linear-gradient(left,#f5f7fa,#c3cfe2);
    background: linear-gradient(to right,#f5f7fa,#c3cfe2);
    position: absolute;
    left: -10px;
    right: -10px;
    top: -10px;
    bottom: -10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.content {
    background: rgba(0,0,0,.48);
    bottom: 0;
    left: 0;
    position: absolute;
    top: 0;
    width: 40%;
    -webkit-transition: all .8s ease;
    -moz-transition: all .8s ease;
    -ms-transition: all .8s ease;
    -o-transition: all .8s ease;
    transition: all .8s ease;
}
.title {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 20px;
    right: 20px;
}
.name {
    font-size: 16px;
    margin-bottom: 5px;
}
.item .content span {
    display: block;
    color: #FFF;
}
b, strong {
    font-weight: bolder;
}
.desc {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 1;
}
</style>
