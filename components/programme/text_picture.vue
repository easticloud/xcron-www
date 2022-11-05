<template>
    <div class="m-text-picture" v-if="data">
        <h2>{{ title }}</h2>
        <div class="m-cont wp">
            <div class="m-list">
                <div class="u-item" v-for="(item, i) in list" :key="i">
                    <span class="u-title">{{ item.title }}</span>
                    <span class="u-desc" v-html="item.desc"> </span>
                </div>
            </div>
            <img :src="require(`/static/images/${img}`)" class="u-img" />
        </div>
    </div>
</template>
<script>
import programme_text_picture from "@/assets/data/programme_text_picture.json";
export default {
    props: {
        textKey: {
            type: String,
            default: "",
        },
    },
    computed: {
        data() {
            return programme_text_picture[this.textKey] || "";
        },
        title() {
            return this.data.title || "";
        },
        img() {
            return this.data.img || "";
        },
        list() {
            return this.data.list || [];
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/programme/text_picture.less";
</style>
