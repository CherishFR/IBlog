<template>
    <footer id="vfooter" class="nice-footer footer-style-2 ">
        <div class="container">
            <div class="footer-top">
                <div class="row">
                    <div class="col-12 col-lg-5 mb-5 mb-lg-0">
                        <aside class="footer-widget footer-widget-text">
                        	<h3 class="widget-title">关于</h3>
                            <div class="text-widget">
                                <p>这是北风忆夕的博客，用来分享编程学习中遇到的问题与心得</p>
                            </div>

                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name:"vfooter",
        components:{
    }
}
</script>

<style scoped>
.footer-style-2 .container {
    padding-right: 20px;
    padding-left: 20px;
    max-width: 1140px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}
.footer-style-2 {
    position: relative;
    padding-top: 55px;
    padding-bottom: 0;
    background-color: #f5f5f5;
}
.nice-footer {
    padding: 30px 0;
    border-top: 1px solid #f5f5f5;
}
.footer-style-2 .container {
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}
.footer-top {
    border-bottom: 1px solid #ececec;
    padding-bottom: 30px;
}
.footer-style-2 .widget-title {
    position: relative;
    font-size: 14px;
    text-transform: uppercase;
    color: #000;
    letter-spacing: 5px;
    padding-bottom: 20px;
    margin-bottom: 30px;
}
.footer-style-2 .widget-title::before {
    content: '';
    display: block;
    position: absolute;
    width: 30px;
    height: 2px;
    bottom: 0;
    background: #131313;
}
.footer-style-2 .footer-widget-text .text-widget p {
    font-size: 13px;
}
p {
    color: #555;
    font-size: 14px;
}
</style>

