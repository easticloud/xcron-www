<template>
    <div class="m-scene-header" :class="`u-${type}`">
        <div class="wp m-header-content">
            <h1>{{ title }}</h1>
            <span class="u-desc">{{ desc }}</span>
            <a href="/contact#contact" target="_blank" class="u-button">立即咨询</a>
        </div>
    </div>
</template>
<script>
import scenes_header from "@/assets/data/scenes_header.json";
export default {
    props: {
        bannerKey: {
            type: String,
            default: "",
        },
    },
    computed: {
        data() {
            return scenes_header[this.bannerKey] || {};
        },
        title() {
            return this.data.title || "";
        },
        desc() {
            return this.data.desc || "";
        },
        link() {
            return this.data.link || "";
        },
        type() {
            return this.data.type || "";
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/scene/header.less";
</style>
