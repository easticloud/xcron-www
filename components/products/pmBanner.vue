<template>
    <div class="m-p-banner">
        <div class="wp">
            <h2>{{pmBanner.title}}</h2>
            <p>{{pmBanner.desc}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        pmBanner:Object,
    },
    data() {
        return {
        };
    },
    methods: {
      
    },
};
</script>

<style scope lang="less">
@import "../../assets/css/products/pmBanner.less";
</style>
