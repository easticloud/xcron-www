<template>
    <div class="m-programme-header" :class="`u-${type}`">
        <div class="wp m-header-content">
            <h1>{{ title }}</h1>
            <span class="u-desc">{{ desc }}</span>
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
        type() {
            return this.data.type || "";
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/programme/header.less";
</style>
