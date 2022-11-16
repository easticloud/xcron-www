<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <Header :banner-key="header" />
            <Tabs textKey="other" :index="tabsIndex" @change="changeTab" />
            <!-- 行业趋势 -->
            <TextPicture :textKey="header" />
            <!-- 方案优势 -->
            <IconText :textKey="header" />
            <AllText :textKey="header" />
            <!-- 方案全景图 -->
            <PictureText :textKey="header" />
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>
<script>
// 其他行业解决方案
import Header from "@/components/programme/header";
import Tabs from "@/components/scenes/tabs";
import TextPicture from "@/components/programme/text_picture";
import AllText from "@/components/programme/all_text";
import PictureText from "@/components/programme/picture_text";
import IconText from "@/components/programme/icon_text";
export default {
    components: { Header, Tabs, TextPicture, AllText, PictureText, IconText },
    head() {
        return {
            title: "其他行业解决方案",
        };
    },
    data() {
        return {
            keys: ["energy", "health", "education", "transport"],
            tabsIndex: 0,
        };
    },
    computed: {
        current() {
            return this.content[this.tabsIndex];
        },
        header() {
            return this.keys[this.tabsIndex];
        },
    },
    watch: {
        $route: {
            immediate: true,
            handler: function (res) {
                if (res.query.key) this.tabsIndex = this.keys.findIndex((item) => item == res.query.key) || 0;
            },
        },
    },
    methods: {
        changeTab(i) {
            this.$router.push({
                path: "/programme/other",
                query: {
                    key: this.keys[i],
                },
            });
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/programme/index.less";
</style>
