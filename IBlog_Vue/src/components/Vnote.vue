<template>
    <div id="vnote">
        <vtitle></vtitle>
        <vcontent></vcontent>
    </div>
</template>

<script>
import Vtitle from "./Vother/Vtitle"
import Vcontent from "./Vother/vcontent"
export default {
    name:"vnote",
    components:{
        Vtitle,
        Vcontent
    }
}
</script>

<style scoped>

</style>