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
  font-size: 16px; 
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
</style>
