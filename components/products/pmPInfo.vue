<template>
    <div class="m-p-pInfo">
        <div class="wp">
            <h2>{{ title }}</h2>
            <div class="infoImg" :style="`backgroundImage: url(${bgImg})`"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        bgImg: String,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scope lang="less">
@import "../../assets/css/products/pmPInfo.less";
</style>
