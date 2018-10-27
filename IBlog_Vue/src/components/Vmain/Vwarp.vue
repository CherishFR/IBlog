<template>
    <div id="vwarp">
       <div class="filter-menu text-md-center mb-2 mb-lg-4-2">
           <ul class="d-flex flex-nowrap flex-md-wrap justify-content-md-center">
               <li class="flex-shrink-0">
                   <button class="btn btn-link btn-sm active" data-cid="最新">
                       最新
                   </button>
               </li>
               <li class="flex-shrink-0">
                   <button class="btn btn-link btn-sm" data-cid="Python">
                       Python
                   </button>
               </li>
               <li class="flex-shrink-0">
                   <button class="btn btn-link btn-sm" data-cid="前端">
                       前端
                   </button>
               </li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    name:"vwarp",
    components:{

  }
}
</script>

<style scoped>
.nice-warp {
    position: relative;
}
.justify-content-md-center {
    -ms-flex-pack: center!important;
    justify-content: center!important;
}
.flex-md-wrap {
    -ms-flex-wrap: wrap!important;
    flex-wrap: wrap!important;
}
.flex-nowrap {
    -ms-flex-wrap: nowrap!important;
    flex-wrap: nowrap!important;
}
.d-flex {
    display: -ms-flexbox!important;
    display: flex!important;
}
.text-md-center {
    text-align: center!important;
}
.filter-menu ul li {
    margin-right: 10px;
    position: relative;
}
.flex-shrink-0 {
    -ms-flex-negative: 0!important;
    flex-shrink: 0!important;
}
.filter-menu ul li .btn.active {
    color: #262626;
    font-size: 18px;
    font-weight: 700;
}
.filter-menu ul li .btn {
    display: inline-block;
    position: relative;
    letter-spacing: 2px;
    margin: 0 5px;
    font-size: 16px;
    color: #6c757d;
    border-radius: 0!important;
    -webkit-transition: all 0.22s ease-in-out;
    -moz-transition: all 0.22s ease-in-out;
    -ms-transition: all 0.22s ease-in-out;
    -o-transition: all 0.22s ease-in-out;
    transition: all 0.22s ease-in-out;
    outline: none!important;
    box-shadow: none!important;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
}
.btn-sm {
    padding: .25rem 1rem;
}
.btn-link {
    font-weight: 400;
    color: #262626;
    background-color: transparent;
}
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
button, button:focus {
    outline: none!important;
    box-shadow: none!important;
}
button, input.ie6 {
    overflow: visible;
    padding: 0;
    outline: none;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
}
[type=reset], [type=submit], button, html [type=button] {
    -webkit-appearance: button;
}
button, select {
    text-transform: none;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
.filter-menu ul li::before {
    background: #d7d7d7 none repeat scroll 0 0;
    content: "";
    height: 15px;
    position: absolute;
    right: 0;
    width: 1px;
    top: 40%;
    -webkit-transform: rotate(45deg) translate(0%,-50%);
    -ms-transform: rotate(45deg) translate(0%,-50%);
    transform: rotate(45deg) translate(0%,-40%);
}
</style>