<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <Header :data="header" />
            <!-- ERP -->
            <IconText :data="erp" />
            <!-- 方案优势 -->
            <PictureText :data="advantages" />
            <!-- 客户案例 -->
            <PictureText :data="customers" />
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>
<script>
import Header from "@/components/programme/header";
import IconText from "@/components/programme/icon_text";
import PictureText from "@/components/programme/picture_text";
export default {
    components: { Header, IconText, PictureText },
    data() {
        return {
            header: {
                type: "cloud",
                title: "迁移上云解决方案",
                desc: "我们提供ERP系统上云一站式服务，为您完成数字化时代的企业管理工具转型。",
            },
            erp: {
                title: "为什么要构建云上ERP系统",
                desc: "随着移动互联网、云计算、大数据等新一代技术的发展，ERP系统向云端转型成为必然，为企业客户提供灵活、方便、低成本的ERP系统上云解决方案",
                list: [
                    {
                        icon: require("/static/images/programme/cloud/1-1.svg"),
                        title: "成本降50%",
                        desc: "只需按照实际业务量按需扩容，节省投入成本超过50%",
                    },
                    {
                        icon: require("/static/images/programme/cloud/1-2.svg"),
                        title: "网络更稳定",
                        desc: "采用动态BGP有效避免因单运营商线路故障导致访问中断问题",
                    },
                    {
                        icon: require("/static/images/programme/cloud/1-3.svg"),
                        title: "最新技术",
                        desc: "企业可直接运用5G、AI等最新技术实现业务突破",
                    },
                    {
                        icon: require("/static/images/programme/cloud/1-4.svg"),
                        title: "安全容灾",
                        desc: "提供专业的云上容灾方案，企业无需自建容灾机房实现安全容",
                    },
                ],
            },
            advantages: {
                title: "方案优势",
                type: "mini",
                list: [
                    {
                        bgImg: require("/static/images/programme/cloud/2-1.svg"),
                        title: "多年ICT经验的云供应商",
                        desc: "将多年在ICT领域的技术积累开发给客户，致力于提供稳定可靠、安全可信、持续创新的云服务。",
                    },
                    {
                        bgImg: require("/static/images/programme/cloud/2-2.svg"),
                        title: "各行各业成熟实践经验",
                        desc: "我们具备互联网、制造、金融、农业等16大行业的实践经验，确保能切实为您的公司创造价值。",
                    },
                    {
                        bgImg: require("/static/images/programme/cloud/2-3.svg"),
                        title: "携手顶尖合作伙伴",
                        desc: "与用友、SAP、金蝶等业界顶尖合作伙伴一道，为您提供高质量多规格的云上ERP构建方案。",
                    },
                    {
                        bgImg: require("/static/images/programme/cloud/2-4.svg"),
                        title: "尊重数据主权",
                        desc: "拥有全球化合规治理经验以及业界最佳实践，为客户提供符合法律法规及业界标准要求的业务运行环境及服务。",
                    },
                ],
            },
            customers: {
                title: "客户案例",
                type: "icon",
                list: [
                    {
                        bgImg: require("/static/images/programme/cloud/3-1.svg"),
                        position: "30px",
                        title: "专属ERP上云解决方案",
                        desc: "哈药集团有限公司为中外合资企业。哈药集团已经成长为全国医药行业的首家上市公司，全国排名前十的制药行业企业，年销售额超过百亿。",
                    },
                    {
                        bgImg: require("/static/images/programme/cloud/3-2.svg"),
                        position: "30px",
                        title: "混合云企业ERP管理系统",
                        desc: "湖北良品铺子食品工业有限公司是一家致力于休闲食品研发、零售服务的专业品牌连锁运营公司。",
                    },
                    {
                        bgImg: require("/static/images/programme/cloud/3-3.svg"),
                        position: "30px",
                        title: "让工业机器行走在云端",
                        desc: "拓斯达成立于2007年，定位于为制造业客户提供生产线装备，早期在注塑机设备的生产和销售上获得成功，后来专注于工业机器人等智能装备的研发销售。",
                    },
                ],
            },
        };
    },
};
</script>
<style lang="less">
@import "~@/assets/css/programme/index.less";
</style>
