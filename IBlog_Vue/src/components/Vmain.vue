<template>
    <div id="vmain">
        <vfeature></vfeature>
        <section class="nice-cms-list my-0 my-md-4 py-3 py-md-0">
            <div class="container">
                <div class="row row-10 row-xs-15 flex-nowrap flex-md-wrap">

                </div>
            </div>
        </section>  
        <vwarp></vwarp> 
    </div>
</template>

<script>
import Vfeature from "./Vmain/Vfeature"
import Vwarp from "./Vmain/Vwarp"
export default {
    name:"vmain",
    components:{
    Vfeature,
    Vwarp
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
</style>
