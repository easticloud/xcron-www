<template>
    <div class="m-page-banner" :class="`u-${data.key}`" :style="`backgroundImage: url(${data.img})`">
        <div class="m-content wp">
            <h2 class="u-title">{{ data.title }}</h2>
            <p class="u-desc">{{ data.desc }}</p>
            <a :href="data.link" target="_blank" v-show="data.link" class="u-button">联系我们</a>
        </div>
        <Search v-if="search" :textKey="bannerKey" />
    </div>
</template>

<script>
import page_header from "@/assets/data/page_header.json";
import Search from "@/components/page/search";
export default {
    props: {
        bannerKey: {
            type: String,
            default: "",
        },
        search: {
            type: Boolean,
            default: false,
        },
    },
    components: { Search },
    computed: {
        data() {
            return page_header[this.bannerKey] || {};
        },
    },
};
</script>

<style lang="less">
@import "../../assets/css/page/banner.less";
</style>
