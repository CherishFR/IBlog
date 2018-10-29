<template>
  <div id="app">
    <vheader></vheader>
    <router-view/>
    <vfooter></vfooter>
  </div>
</template>

<script>
import Vheader from "./components/Vheader"
import Vmain from "./components/Vmain"
import Vfooter from "./components/Vfooter"
export default {
  name: 'App',
  components:{
    Vheader,
    Vfooter
  }
  
}
</script>

<style>
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li,pre,fieldset, lengend, button, input, textarea,th, td { 
  margin: 0;
  padding: 0;
  list-style-type:none;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
}
body,button, input, select, textarea { 
  font: 12px/1 Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;
}
h1 { 
  font-size: 18px; 
}
h2 { 
  font-size: 24px; 
}
h3 { 
  font-size: 14px; 
}
h4, h5, h6 { 
  font-size: 100%; 
}
.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
}
address, cite, dfn, em, var { 
  font-style: normal; 
} 
code, kbd, pre, samp, tt { 
  font-family: "Courier New", Courier, monospace;
}
small { 
  font-size: 12px; 
}
menu, ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
}
dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
}
ul, menu, dir {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
a { 
  color: #262626;
  text-decoration: none;
  font-family: -apple-system,BlinkMacSystemFont,'PingFang SC',"Hiragino Sans GB","Microsoft YaHei",Helvetica,Arial,"WenQuanYi Micro Hei",SimSun,sans-serif;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
  cursor: pointer;

}
a:hover { 
  text-decoration: underline; 
}

abbr[title], acronym[title] {
  border-bottom: 1px dotted;
  cursor: help;
}
q:before, q:after { 
  content: ''; 
}
legend { 
  color: #000; 
}
fieldset, img { 
  border: none; 
}
button, input, select, textarea {
  font-size: 100%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
hr {
  border: none;
  height: 1px;
}
html { 
  overflow-y: scroll; 
}
.font-weight-bold {
    font-weight: 700!important;
}
.color-white {
    color: #ffffff!important;
}
.custom-hover {
    display: inline-block;
    position: relative;
    overflow: hidden;
    vertical-align: top;
    max-width: 100%;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    transform: translateZ(0);
}
.d-block {
    display: block!important;
}
.d-flex {
    display: -ms-flexbox!important;
    display: flex!important;
}
.font-14 {
    font-size: 14px!important;
}
.font-30 {
    font-size: 30px!important;
}
.text-light {
    color: #f8f9fa!important;
}
.mt-3, .my-3 {
    margin-top: 1rem!important;
}
.align-items-center {
    -ms-flex-align: center!important;
    align-items: center!important;
}
.flex-row {
    -ms-flex-direction: row!important;
    flex-direction: row!important;
}
*, ::after, ::before {
    box-sizing: border-box;
}
.data {
    position: relative;
    word-wrap: break-word;
}
.custom-hover {
    display: inline-block;
    position: relative;
    overflow: hidden;
    vertical-align: top;
    max-width: 100%;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    transform: translateZ(0);
}
.text-l2 {
    overflow: hidden!important;
    text-overflow: ellipsis!important;
    display: -webkit-box!important;
    -webkit-line-clamp: 2!important;
    -webkit-box-orient: vertical!important;
}
.light-14 {
    line-height: 1.4!important;
}
.light-10 {
    line-height: 1!important;
}
.font-20 {
    font-size: 20px!important;
}
.font-18 {
    font-size: 18px!important;
}
.font-16 {
    font-size: 16px!important;
}
.font-12 {
    font-size: 12px!important;
}
.font-weight-bold {
    font-weight: 700!important;
}
.mt-md-3, .my-md-3 {
    margin-top: 1rem!important;
}
.mt-lg-3, .my-lg-3 {
    margin-top: 1rem!important;
}
.mt-2, .my-2 {
    margin-top: .5rem!important;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.pb-md-0, .py-md-0 {
    padding-bottom: 0!important;
    padding-top: 0!important;
}
.pl-md-4, .px-md-4{
    padding-left: 1.5rem!important;

}
.pt-md-3, .py-md-3 {
    padding-top: 1rem!important;
}
.pl-3, .px-3 {
    padding-left: 1rem!important;
}
.pb-2, .py-2 {
    padding-bottom: .5rem!important;
}
.pt-2, .py-2 {
    padding-top: .5rem!important;
}
.pr-0, .px-0 {
    padding-right: 0!important;
}
.mb-md-4, .my-md-4 {
    margin-bottom: 1.5rem!important;
    margin-top: 1.5rem!important;
}
.mb-md-5, .my-md-5 {
    margin-bottom: 3rem!important;
    margin-top: 3rem!important;
}

.mb-4, .my-4 {
    margin-bottom: 1.5rem!important;
    margin-top: 1.5rem!important;
}

.mb-2, .my-2 {
    margin-bottom: .5rem!important;
}
.mb-lg-4-2 {
    margin-bottom: 2rem!important;
}
.text-md-center {
    text-align: center!important;
}
*, ::after, ::before {
    box-sizing: border-box;
}
body, input, button, select, optgroup, option, textarea, pre {
    font-family: -apple-system,BlinkMacSystemFont,'PingFang SC',"Hiragino Sans GB","Microsoft YaHei",Helvetica,Arial,"WenQuanYi Micro Hei",SimSun,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}
.col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
.col-md-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
.col-lg-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
}
.mb-lg-5, .my-lg-5 {
    margin-bottom: 3rem!important;
}
.mb-0, .my-0 {
    margin-bottom: 0!important;
}
.custom-hover-img {
    max-width: 100%;
    -webkit-transition: all 444ms ease-in-out;
    -moz-transition: all 444ms ease-in-out;
    transition: all 444ms ease-in-out;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
img {
    vertical-align: middle;
    max-width: 100%;
    border-style: none;
}
</style>
