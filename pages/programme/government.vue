<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <Header :data="header" />
            <!-- 产品技术 -->
            <IconText :data="product" />
            <!-- 方案优势 -->
            <AllText :data="advantages" />
            <!-- 方案全景图 -->
            <PictureText :data="scene" />
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
import AllText from "@/components/programme/all_text";
export default {
    components: { Header, IconText, PictureText, AllText },
    head() {
        return {
            title: "数字政府解决方案",
        }
    },
    data() {
        return {
            header: {
                type: "government",
                title: "数字政府解决方案",
                desc: "政府数字化转型是大势所趋，数字政府建设关乎数字经济发展促进力，受到全国各级政府、企业和广大民众的关注。利用云计算、AI人工智能、大数据等新一代信息技术构建数据智能的运用能力，建设智慧城市，为城市治理现代化提供决策支持和精细化管理能力。",
            },
            product: {
                title: "产品技术",
                list: [
                    {
                        icon: require("/static/images/programme/government/1-1.svg"),
                        title: "城市视觉智能引擎",
                        desc: "利用先进的视频图像处理技术和学习算法，赋能交通、商业等场景。",
                    },
                    {
                        icon: require("/static/images/programme/government/1-2.svg"),
                        title: "数据资源平台",
                        desc: "为企业构建汇、通、管、用、评大数据体系，提供数据应用研发能力。",
                    },
                    {
                        icon: require("/static/images/programme/government/1-3.svg"),
                        title: "区块链",
                        desc: "打造业界易用稳健的区块链产品，激发信任商业时代的潜力。",
                    },
                    {
                        icon: require("/static/images/programme/government/1-4.svg"),
                        title: "全息技术",
                        desc: "通过三维视觉技术实现数字化真实还原，实现对数字空间的运营。",
                    },
                ],
            },
            advantages: {
                title: "方案优势",
                type: "half",
                list: [
                    {
                        title: "AI使能海量数据处理，构建智慧政府",
                        desc: "AI、大数据致力于解决政府部门智慧化发展过程中的各种疑难问题，可高效构建千万维特征的机器学习模型、高效完成亿级节点规模图计算，并具备一站式数据治理工具，提供各类数据集成、数据规范定义、可视化模型设计、数据分析、数据共享服务。",
                    },
                    {
                        title: "一站式微服务化，助力数字政府升级改造",
                        desc: "提供应用模板化、可视化编排服务，实现一键式自动部署的能力，具备10PB级超大规格、超高性能企业数据仓库服务，支持海量服务同库不同表，解决了传统“烟囱式”架构技术单一，串行交付、架构耦合，牵一发而动全身的技术缺陷。",
                    },
                    {
                        title: "全栈专属混合云，云上“头等舱”",
                        desc: "轻量起步两机柜起步，快速交付时间可压缩至3天，PAAS，数据库，大数据，AI，安全等高级云服务可快速同步，按场景模块化选装；各服务的告警、监控、容量内容可与CloudScope集中新运维平台对接，支持分权分域，两级运维模式。",
                    },
                    {
                        title: "携手合作伙伴，共建政府云生态",
                        desc: "构建了完善的生态体系，包括解决方案合作伙伴、服务合作伙伴、技术能力合作伙伴等类型，其中全球20个OpenLab，800+ 市场应用，2000+合作伙伴，专注全场景业务应用系统开发，保障了数字政务系统的持续改进升级。",
                    },
                ],
            },
            scene: {
                title: "方案全景图",
                list: [
                    {
                        bgImg: require("/static/images/programme/government/3-1.svg"),
                        title: "地方政府数字化转型",
                        desc: "政企数据中台建设解决方案><br />互联网+监管解决方案>",
                    },
                    {
                        bgImg: require("/static/images/programme/government/3-2.svg"),
                        title: "城市大脑",
                        desc: "城市智能运行中心解决方案><br />交通管理行业云解决方案><br />社会治理解决方案>",
                    },
                    {
                        bgImg: require("/static/images/programme/government/3-3.svg"),
                        title: "政府行业应用解决方案",
                        desc: "区域医疗数字解决方案>",
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
