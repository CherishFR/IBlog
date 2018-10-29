<template>
    <div id="Vtitle">
        <section class="nice-top-content no-backdrop">
            <div class="black-gradient"></div>
            <div class="backdrop" style="background-image: url('')"></div>
            <div class="overlay"></div>
            <div class="name">
		        <div class="container">
			        <h5 class="font-30 font-md-24 font-weight-bold text-white">文章</h5>		
                </div>
	        </div>
        </section>
    </div>
</template>

<script>
export default {
    name:"Vtitle"
}
</script>

<style scoped>
.black-gradient {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    content: '';
    background: #000;
    background: -webkit-linear-gradient(left,#434343,#000000);
    background: linear-gradient(to right,#434343,#000000);
}
.backdrop {
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110%;
    -webkit-filter: blur(6px);
    filter: blur(6px);
}
.overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.66);
    position: absolute;
    opacity: .33;
    top: 0;
    left: 0;
    -webkit-transition: opacity 0.3s ease-in-out;
    -moz-transition: opacity 0.3s ease-in-out;
    -o-transition: opacity 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;
}
.nice-top-content {
    position: relative;
    overflow: hidden;
    padding: 60px 0;
    min-height: 266px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
}
.nice-top-content .name {
    position: relative;
    width: 100%;
    z-index: 2;
    text-align: center;
}
.container {
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.text-white {
    color: #fff!important;
}
.font-weight-bold {
    font-weight: 700!important;
}
h5{
    text-align: center;
}
</style>