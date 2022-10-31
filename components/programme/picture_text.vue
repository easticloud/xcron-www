<template>
    <div class="m-picture-text" :class="`u-${direction}`">
        <h2>{{ title }}</h2>
        <div class="m-list wp">
            <div class="u-item" v-for="(item, i) in list" :key="i" :style="item.bgImg ? background(item.bgImg) : ''">
                <img :src="item.img" class="u-img" v-if="item.img" />
                <div class="m-text">
                    <span class="u-title">{{ item.title }}</span>
                    <span class="u-desc" v-html="item.desc"></span>
                </div>
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
        direction() {
            return this.data.direction ? this.data.direction : "top";
        },
    },
    methods: {
        background(img) {
            return { backgroundImage: `url(${img})` };
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/programme/picture_text.less";
</style>
