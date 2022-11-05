<template>
    <div class="m-picture-text" :class="`u-${direction}`" v-if="data">
        <h2>{{ title }}</h2>
        <div class="m-list wp">
            <div
                class="u-item"
                v-for="(item, i) in list"
                :key="i"
                :style="style(item)"
                :class="type ? `u-${type}` : ''"
            >
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
import programme_picture_text from "@/assets/data/programme_picture_text.json";
export default {
    props: {
        textKey: {
            type: String,
            default: "",
        },
    },
    computed: {
        data() {
            return programme_picture_text[this.textKey] || "";
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
        direction() {
            return this.data.direction ? this.data.direction : "top";
        },
    },
    methods: {
        style(item) {
            const _style = {}; 
            if (item.bgImg) {
                const _img = require(`/static/images/${item.bgImg}`);
                _style.backgroundImage = `url(${_img})`;
            }
            if (item.position) _style.backgroundPosition = `center ${item.position}`;
            return _style;
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/programme/picture_text.less";
</style>
