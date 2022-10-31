<template>
    <div class="p-scene">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 热门场景 -->
        <div class="m-hot-scene">
            <Header :data="header" />
            <div class="wp m-hot-content">
                <div class="m-info">
                    <div class="u-item" v-for="(item, i) in info" :key="i">
                        <span class="u-label">{{ item.label }}</span>
                        <span class="u-desc">{{ item.desc }}</span>
                    </div>
                </div>
                <div class="m-shop">
                    <h2>云商店</h2>
                    <span class="u-desc">携手5,000+合作伙伴，提供丰富、安全、可靠的企业应用服务</span>
                    <div class="m-tag">
                        <div class="u-tag" v-for="(item, i) in tag" :key="i">
                            <img src="../../static/images/scene/hot/check.svg" class="u-img" />
                            <span> {{ item }}</span>
                        </div>
                    </div>
                </div>
                <div class="m-service">
                    <Service v-for="(item, i) in service" :key="i" :data="item" />
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
import Header from "@/components/scenes/header";
import Service from "@/components/scenes/service";
export default {
    components: { Header, Service },
    data() {
        return {
            header: {
                type: "hot",
                title: "企业热门场景专区",
                desc: "我们为您的企业提供企业初创到营销、管理、业务拓展的全套上云解决方案，助力业务快速发展",
                link: "",
            },
            info: [
                { label: "30年", desc: "30年成熟ICT技术积累" },
                { label: "220+", desc: "布局全球多个地理区域和可用区的云产品" },
                { label: "80+", desc: "全球安全合规认证，助您上云无忧" },
            ],
            tag: ["一站选购，即开即用", "高效灵活，细致服务", "满足企业多场景需求"],
            service: [
                {
                    title: "域名注册",
                    desc: "适用于品牌保护、网站建设等业务场景",
                    price: "1.00",
                    label: "/件起",
                    tag: "多种域名特惠1元起",
                },
                {
                    title: "商标智能注册",
                    desc: "智能申报、由服务商代理递交注册申请",
                    price: "271.00",
                    label: "/件起",
                    tag: "新用户专享价",
                },
                {
                    title: "IOT云通信联接短信套餐包",
                    desc: "支持验证码、通知、会员营销短信",
                    price: "640.00",
                    label: "/2万条起",
                    tag: "行业短信0.032元/条",
                },
                {
                    title: "云速邮箱",
                    desc: "即开即用企业邮箱，无限邮箱容量",
                    price: "0.40",
                    label: "/天起",
                    tag: "2年8折、4年6折",
                },
                {
                    title: "金蝶云星辰ERP",
                    desc: "智能记账、智能取票、一键开票",
                    price: "2800.00",
                    label: "/年起",
                    tag: "新用户专享价",
                },
                {
                    title: "SaaS Package初创版会员包",
                    desc: "包含云速邮箱、石墨文档、快报税",
                    price: "3240.00",
                    label: "/年起",
                    tag: "一站式购买",
                },
            ],
        };
    },
};
</script>
<style lang="less" scoped>
@import "~@/assets/css/scene/hot.less";
</style>
