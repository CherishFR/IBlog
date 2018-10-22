<template>
    <div id="vheader">
        <div class="m-header">
            <div class="navbar-header">
                <a href="" title="北风忆夕" class="navbar-login"></a>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"vheader"
}
</script>

<style scoped>
#vheader{
    width: 100%;
    height: 70px;
    box-shadow: 0 0 45px 0 rgba(16,16,16,.1);
}
.m-header{
    max-width: 1140px;
    width: 100%;
    height: 70px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.navbar-header{
    vertical-align: middle;
    line-height: 70px;
    height: 70px;
}
.navbar-login{
    position: relative;
    display: block;
    width: 168px;
    height: 70px;
    line-height: 70px;
    text-indent: -9999px;
    padding: 0;
    z-index: 2;
    transition: none;
    background-size: contain;
    background-position: left center;
    background-repeat: no-repeat;
}
</style>


