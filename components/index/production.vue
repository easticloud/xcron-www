<template>
    <div class="m-index-item m-index-production">
        <div class="wp">
            <div class="m-title">
                <h2>丰富、安全、稳定的产品及服务</h2>
                <a href="" target="_blank" class="u-desc">查看全部产品 ></a>
            </div>
            <div class="m-tabs">
                <div class="m-item" v-for="(item, i) in list" :key="i">
                    <img class="u-img" :src="item.src" />
                    <span class="u-label">{{ item.label }}</span>
                </div>
            </div>
        </div>
        <div class="m-content">
            <div class="wp">
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { label: "人工智能", src: "/images/index/A.png" },
                { label: "区块链", src: "/images/index/B.png" },
                { label: "云计算", src: "/images/index/C.png" },
                { label: "大数据", src: "/images/index/D.png" },
                { label: "网络", src: "/images/index/N.png" },
                { label: "智能边缘", src: "/images/index/E.png" },
                { label: "终端", src: "/images/index/T.png" },
                { label: "安全", src: "/images/index/S.png" },
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
@import "../../assets/css/index/production.less";
</style>
