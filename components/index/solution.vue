<template>
    <div class="m-index-item m-index-solution">
        <div class="wp">
            <div class="m-title">
                <h2>全面、专业、智能的解决方案</h2>
                <a href="" target="_blank" class="u-desc">查看全部解决方案 ></a>
            </div>
            <div class="m-tabs">
                <div class="m-item" v-for="(item, i) in list" :key="i">
                    <img class="u-img" :src="item.src" />
                    <span class="u-label">{{ item.label }}</span>
                </div>
            </div>
            <div class="m-content">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { label: "新零售", src: "/images/index/solution/icon-1.png" },
                { label: "运营商", src: "/images/index/solution/icon-2.png" },
                { label: "数字政府", src: "/images/index/solution/icon-3.png" },
                { label: "金融", src: "/images/index/solution/icon-4.png" },
                { label: "上云与迁移", src: "/images/index/solution/icon-5.png" },
                { label: "媒体应用", src: "/images/index/solution/icon-6.png" },
                { label: "媒体应用", src: "/images/index/solution/icon-7.png" },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
    computed: {},
    methods: {},
};
</script>

<style lang="less">
@import "../../assets/css/index/solution.less";
</style>
