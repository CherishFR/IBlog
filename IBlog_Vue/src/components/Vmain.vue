<template>
    <div id="vmain">
        <vfeature></vfeature>
        <section class="nice-cms-list my-0 my-md-4 py-3 py-md-0">
            <div class="container">
                <div class="row row-10 row-xs-15 flex-nowrap flex-md-wrap">

                </div>
            </div>
        </section>
        <div class="container">
            <vmheader></vmheader> 
            <vmtitle></Vmtitle>
        </div>  
    </div>
</template>

<script>
import Vfeature from "./Vmain/Vfeature"
import Vmheader from "./Vmain/Vmheader"
import Vmtitle from "./Vmain/Vmtitle"
export default {
    name:"vmain",
    components:{
    Vfeature,
    Vmheader,
    Vmtitle,
  }
}
</script>

<style scoped>
.container {
    max-width: 1140px;
}
.row-10 {
    margin-left: -10px!important;
    margin-right: -10px!important;
}
.flex-md-wrap {
    -ms-flex-wrap: wrap!important;
    flex-wrap: wrap!important;
}
.container{
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
</style>
