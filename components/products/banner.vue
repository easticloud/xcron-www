<template>
    <div class="m-banner" :style="`backgroundImage: url(${data.img})`">
        <div class="m-banner-content">
            <h2 class="u-banner__title">{{ data.title }}</h2>
            <p class="u-banner__desc">{{ data.desc }}</p>
        </div>
    </div>
</template>

<script>
import product_banner from "@/assets/data/product_banner.json";
export default {
    props: {
        bannerKey: {
            type: String,
            default: "",
        },
    },
    computed: {
        data() {
            return product_banner[this.bannerKey] || {};
        },
    },
};
</script>

<style lang="less">
@import "../../assets/css/products/product-banner.less";
</style>
