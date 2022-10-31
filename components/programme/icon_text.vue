<template>
    <div class="m-icon-text">
        <h2>{{ title }}</h2>
        <div class="m-list wp" :class="type ? `u-${type}` : ''">
            <div class="u-item" v-for="(item, i) in list" :key="i">
                <img :src="item.icon" class="u-img" v-if="item.icon" />
                <span class="u-title">{{ item.title }}</span>
                <span class="u-desc" v-html="item.desc"></span>
            </div>
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
        list() {
            return this.data.list || [];
        },
        type() {
            return this.data.type || "";
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/programme/icon_text.less";
</style>
