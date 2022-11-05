<template>
    <div class="m-icon-text" :style="background(data)" v-if="data">
        <h2>{{ title }}</h2>
        <div class="m-desc wp" v-if="desc">
            <span class="u-desc">{{ desc }}</span>
        </div>
        <div class="m-list wp" :class="type ? `u-${type}` : ''">
            <div class="u-item" v-for="(item, i) in list" :key="i">
                <img :src="require(`/static/images/${item.icon}`)" class="u-img" v-if="item.icon" />
                <span class="u-title">{{ item.title }}</span>
                <span class="u-desc" v-html="item.desc"></span>
            </div>
        </div>
    </div>
</template>
<script>
import programme_icon_text from "@/assets/data/programme_icon_text.json";
export default {
    props: {
        textKey: {
            type: String,
            default: "",
        },
    },
    computed: {
        data() {
            return programme_icon_text[this.textKey] || "";
        },
        title() {
            return this.data.title || "";
        },
        desc() {
            return this.data.desc || "";
        },
        list() {
            return this.data.list || [];
        },
        type() {
            return this.data.type || "";
        },
    },
    methods: {
        background(item) {
            if (!item) return;
            return item.background ? { backgroundColor: "#f8f8f8" } : "";
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/programme/icon_text.less";
</style>
