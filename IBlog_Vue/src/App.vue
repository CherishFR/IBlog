<template>
  <div id="app">
    <vheader></vheader>
    <router-view/>
  </div>
</template>

<script>
import Vheader from "./components/Vheader"
import vmain from "./components/Vmain"
export default {
  name: 'App',
  components:{
    Vheader
  }
  
}
</script>

<style>
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li,pre,fieldset, lengend, button, input, textarea,th, td { 
  margin: 0;
  padding: 0;
  list-style-type:none;
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
address, cite, dfn, em, var { 
  font-style: normal; 
} 
code, kbd, pre, samp, tt { 
  font-family: "Courier New", Courier, monospace;
}
small { 
  font-size: 12px; 
}
ul, ol { 
  list-style: none; 
}
a { 
  color: #262626;
  text-decoration: none;
  font-family: -apple-system,BlinkMacSystemFont,'PingFang SC',"Hiragino Sans GB","Microsoft YaHei",Helvetica,Arial,"WenQuanYi Micro Hei",SimSun,sans-serif;
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
.font-14 {
    font-size: 14px!important;
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
.text-light {
    color: #dfdfdf!important;
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
.font-18 {
    font-size: 18px!important;
}
.font-weight-bold {
    font-weight: 700!important;
}
.mt-md-3, .my-md-3 {
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
</style>
