<template>
    <div class="p-page-index">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- banner -->
        <banner bannerKey="programme" :search="true" />

        <div class="m-page-content">
            <!-- 热门方案展示 -->
            <div class="m-page-show">
                <h2>热门方案展示</h2>
                <div class="u-page-content wp">
                    <div
                        class="u-item"
                        :class="`u-item-${i + 1}`"
                        v-for="(item, i) in list"
                        :key="i"
                        :style="style(item)"
                    >
                        <span class="u-title">{{ item.title }}</span>
                        <span class="u-desc">{{ item.desc }}</span>
                    </div>
                </div>
            </div>
            <!-- 行业解决方案 -->
            <div class="m-page-solution">
                <h2>行业解决方案</h2>
                <div class="wp">
                    <index-menu class="u-page-solution" type="programme"></index-menu>
                </div>
            </div>
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
        
        
    </div>
</template>

<script>
import banner from "@/components/page/banner.vue";
import { show } from "@/assets/data/product.json";
export default {
    name: "ProgrammePage",
    components: { banner },
    computed: {
        list() {
            return show;
        },
    },
    methods: {
        style(item) {
            if (item.color) return { backgroundColor: item.color };
            if (item.img) return { backgroundImage: `url(${item.img})` };
            return "";
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/page/index.less";

@import "~@/assets/css/page/programme.less";
</style>
