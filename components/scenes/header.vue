<template>
    <div class="m-scene-header" :class="`u-${type}`">
        <div class="wp m-header-content">
            <h1>{{ title }}</h1>
            <span class="u-desc">{{ desc }}</span>
            <a :href="link" target="_blank" class="u-button">立即咨询</a>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data"],
    computed: {
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
