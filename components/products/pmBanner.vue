<template>
    <div class="m-p-banner" :style="`backgroundImage: url(${pmBanner.img})`">
        <div class="wp">
            <h2>{{pmBanner.title}}</h2>
            <p>{{pmBanner.desc}}</p>
            <!-- <span :style="`backgroundImage: url(${pmBanner.img})`"></span> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pmBanner: Object,
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
