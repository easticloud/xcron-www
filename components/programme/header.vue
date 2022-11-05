<template>
    <div class="m-programme-header" :class="`u-${type}`" v-if="data">
        <div class="wp m-header-content">
            <h1>{{ title }}</h1>
            <span class="u-desc">{{ desc }}</span>
        </div>
    </div>
</template>
<script>
import programme_banner from "@/assets/data/programme_banner.json";
export default {
    props: {
        bannerKey: {
            type: String,
            default: "",
        },
    },
    computed: {
        data() {
            return programme_banner[this.bannerKey] || {};
        }, 
        title() {
            return this.data.title || "";
        },
        desc() {
            return this.data.desc || "";
        },
        type() {
            return this.data.type || "";
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/programme/header.less";
</style>
