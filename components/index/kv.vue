<template>
    <div class="m-slider">
        <el-carousel direction="horizontal" :autoplay="true" @change="changeHandle">
            <el-carousel-item class="u-item" v-for="(item, i) in data" :key="i">
                <a class="u-link" :href="item.href" :target="item.target" :style="`background-image: url(${item.src})`">
                    <div class="wp" :class="item.mode=='dark'?'dark':'light'">
                        <span class="u-title">{{ item.title }}</span>
                        <span class="u-desc">{{ item.desc }}</span>
                        <span class="u-btn">立即查看</span>
                    </div>
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import { getKV } from "@/utils/images";
export default {
    data() {
        return {
            data: [
                {
                    title: "上云场景组合折上折",
                    desc: "所有场景组合折上9折起！万元礼券限时领！",
                    href: "/scenes/enterprise_scene",
                    target: "_blank",
                    src: getKV("xcron-1.jpg"),
                    mode: "dark",
                },
                {
                    title: "X.CRON推荐奖励计划",
                    desc: "加入推广成为云推官，推荐新用户下单即可获得现金奖励",
                    href: "/contact#contact",
                    target: "_blank",
                    src: getKV("xcron-2.jpg"),
                    mode: "light",
                },
                {
                    title: "企业上云解决方案",
                    desc: "高质量、高效率、高安全”7*24h专业运维服务",
                    href: "/programme/cloud",
                    target: "_blank",
                    src: getKV("xcron-3.jpg"),
                    mode: "light",
                },
            ],
        };
    },
    methods: {
        changeHandle(index) {
            // this.$store.commit("home/setKVMode", this.data[index].mode);
        },
    },
};
</script>

<style scope lang="less">
@import "../../assets/css/index/kv.less";
</style>
