<template>
    <div id="Vcontent">
        <section class="nice-warp nice-warp-single mt-3 mt-md-5 mb-4 mb-md-5">
            <div class="container">
                <main class="nice-main">
                    <div class="posts-list">
                        <div class="list-inner d-archive row">
                            <vscard></vscard>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    </div>
</template>

<script>
import Vacard from "./Vcard/Vacard"
import Vlcard from "./Vcard/Vlcard"
import Vscard from "./Vcard/Vscard"
export default {
    name:"Vcontent",
    components:{
        Vacard,
        Vlcard,
        Vscard
    }
}
</script>

<style scoped>
.nice-warp {
    position: relative;
}
.container {
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.posts-list {
    position: relative;
    min-height: 328px;
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