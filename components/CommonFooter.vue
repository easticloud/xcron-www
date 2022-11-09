<template>
    <div class="c-footer">
        <div class="wp">
            <div class="m-item">
                <span class="u-title" @click="hotShow = !hotShow" :class="{ show: hotShow }">
                    热门推荐
                    <img src="../assets/img/up.svg" class="u-img" v-if="hotShow" />
                    <img src="../assets/img/down.svg" class="u-img" v-else />
                </span>
                <a
                    class="u-link"
                    :href="item.href"
                    target="_blank"
                    v-for="(item, i) in hot"
                    :key="i"
                    :class="{ show: hotShow }"
                >
                    {{ item.label }}
                </a>
            </div>
            <div class="m-item">
                <span class="u-title" @click="weShow = !weShow" :class="{ show: weShow }">
                    关于我们
                    <img src="../assets/img/up.svg" class="u-img" v-if="weShow" />
                    <img src="../assets/img/down.svg" class="u-img" v-else />
                </span>
                <a
                    class="u-link"
                    :href="item.href"
                    target="_blank"
                    v-for="(item, i) in contact"
                    :key="i"
                    :class="{ show: weShow }"
                >
                    {{ item.label }}
                </a>
            </div>
            <div class="m-item m-approved">
                <span class="u-title" @click="show = !show" :class="{ show }">
                    权威认证
                    <img src="../assets/img/up.svg" class="u-img" v-if="show" />
                    <img src="../assets/img/down.svg" class="u-img" v-else />
                </span>
                <div class="u-line" v-for="(item, i) in approved" :key="i" :class="{ show }">
                    <img class="u-img" :src="item.src" />
                    <div class="u-txt">
                        <span class="u-label">{{ item.label }}</span>
                        <span v-if="item.desc">{{ item.desc }}</span>
                    </div>
                </div>
            </div>
            <div class="m-item m-concat">
                <span class="u-title">联系我们</span>
                <span class="u-call">咨询热线：</span>
                <div class="u-phone" style="background: url('/images/index/footer/phone.png') no-repeat left center">
                    025-86702988
                </div>
                <span>邮箱：sdsf@xcron.cn </span>
                <span>商务合作：15335159292（胡经理）</span>
                <span>渠道合作：15335159298（王经理）</span>
            </div>
            <div class="m-item m-code">
                <img class="u-code" src="/images/index/footer/code.png" alt="实点实分" />
                <span>随时了解最新资讯</span>
                <span>关注实点实分公众号</span>
            </div>
        </div>
        <div class="m-copyright">
            <span class="u-txt">
                <span>© 2022 江苏实点实分网络科技有限公司</span>
                <span class="u-hr">丨</span>
                <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备15031332号</a>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hotShow: false,
            weShow: false,
            show: false,
            hot: [
                { label: "弹性云服务器", href: "/products/products_ecs" },
                { label: "裸金属服务器", href: "/products/products_bms" },
                { label: "全球加速", href: "/products/products_ga" },
                { label: "智能边缘云", href: "/products/products_iec" },
                { label: "智能AI边缘盒子", href: "/products/products_ai" },
            ],
            contact: [
                { label: "公司简介", href: "/about" },
                { label: "荣誉资质", href: "/about" },
                { label: "品牌理念", href: "/about" },
                { label: "合作伙伴", href: "/partner" },
                { label: "联系我们", href: "/contact" },
            ],
            approved: [
                { label: "高新技术企业", src: "/images/index/footer/tech.png" },
                { label: "质量管理体系认证", desc: "ISO09001", src: "/images/index/footer/9001.png" },
                { label: "信息安全管理体系认证", desc: "ISO27001", src: "/images/index/footer/27001.png" },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
};
</script>

<style scope lang="less">
@import "~@/assets/css/footer.less";
</style>
