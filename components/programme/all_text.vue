<template>
    <div class="m-all-text" v-if="data">
        <h2>{{ title }}</h2>
        <div class="m-list wp" :class="type ? `u-${type}` : ''">
            <div class="u-item" v-for="(item, i) in list" :key="i" :style="item.img ? background(item.img) : ''">
                <span class="u-title">{{ item.title }}</span>
                <span class="u-desc" v-html="item.desc"></span>
            </div>
        </div>
    </div>
</template>
<script>
import programme_all_text from "@/assets/data/programme_all_text.json";
export default {
    props: {
        textKey: {
            type: String,
            default: "",
        },
    },
    computed: {
        data() {
            return programme_all_text[this.textKey] || "";
        },
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
    methods: {
        background(img) {
            const _img = require(`/static/images/${img}`);
            return { backgroundImage: `url(${_img})` };
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/programme/all_text.less";
</style>
