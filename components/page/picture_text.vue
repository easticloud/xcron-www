<template>
    <div class="m-page-picture" v-if="data">
        <h2>{{ title }}</h2>
        <div class="m-list wp">
            <div class="u-item" v-for="(item, i) in list" :key="i">
                <img :src="require(`/static/images/${item.img}`)" class="u-img" v-if="item.img" />
                <div class="m-text">
                    <span class="u-title">{{ item.title }}</span>
                    <span class="u-desc" v-html="item.desc"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import page_picture_text from "@/assets/data/page_picture_text.json";
export default {
    props: {
        textKey: {
            type: String,
            default: "",
        },
    },
    computed: {
        data() {
            return page_picture_text[this.textKey] || "";
        },
        title() {
            return this.data.title || "";
        },
        list() {
            return this.data.list || [];
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/page/picture.less";
</style>
