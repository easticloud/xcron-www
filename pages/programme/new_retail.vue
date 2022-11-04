<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <Header :data="header" />
            <!-- 行业挑战 -->
            <PictureText :data="industry" />
            <!-- 方案优势 -->
            <AllText :data="advantages" />
            <!-- 场景化方案 -->
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
import PictureText from "@/components/programme/picture_text";
import AllText from "@/components/programme/all_text";
export default {
    components: { Header, PictureText, AllText },
    head() {
        return {
            title: "新零售行业解决方案",
        };
    },
    data() {
        return {
            header: {
                type: "new-retail",
                title: "新零售行业解决方案",
                desc: "基于业务中台和数据中台的双中台驱动层，重构了前端业务、全域营销和数据智能等多个业务应用场景，为客户提供全渠道销售、全域会员管理等多个行业解决方案。",
            },
            industry: {
                direction: "left",
                title: "行业挑战",
                list: [
                    {
                        img: require("/static/images/programme/new-retail/1-1.svg"),
                        title: "传统营销方式效果有限",
                        desc: "以“报纸广告、广播电视”为代表的传统营销方式存在“触及流量有限、客户不精准”等一系列弊端，传播转化效果较差。同时传统的营销方式缺乏与消费者的互动和沟通。",
                    },
                    {
                        img: require("/static/images/programme/new-retail/1-2.svg"),
                        title: "同质化严重",
                        desc: "据商务部数据显示，购百行业约87%的商品雷同，距离成为消费者选择商场的第一要素。如果不能洞察消费者喜好，进行全渠道营销，则会被激烈的行业竞争所淘汰。",
                    },
                    {
                        img: require("/static/images/programme/new-retail/1-3.svg"),
                        title: "受疫情重创",
                        desc: "新冠肺炎疫情发生以来，按照疫情防控需要，居民主动减少外出购物，纷纷取消聚餐聚会，非生活必需类商品销售和餐饮业受到明显冲击。",
                    },
                    {
                        img: require("/static/images/programme/new-retail/1-4.svg"),
                        title: "技术演进难",
                        desc: "随着零售企业体量的成长壮大，IT系统逐渐浮现出架构可扩展性差、技术标准不一、底层组件重复建设等问题。各系统技术演进难、运维成本高，难以匹配上层业务快速发展的需求。",
                    },
                ],
            },
            advantages: {
                title: "方案优势",
                list: [
                    {
                        img: require("/static/images/programme/new-retail/2-1.svg"),
                        title: "全流程数字赋能",
                        desc: "基于多年运营和运维的技术服务经验，帮助客户在应用数据、优化架构、顶层设计等工作上做好赋能，实现业务的全流程数字化转型。",
                    },
                    {
                        img: require("/static/images/programme/new-retail/2-2.svg"),
                        title: "数据驱动",
                        desc: "通过云化数据治理平台、人工智能数据推理平台和数据共享平台，帮助客户运用好“大数据”和“人工智能”，实现运营数据价值挖掘。",
                    },
                    {
                        img: require("/static/images/programme/new-retail/2-3.svg"),
                        title: "AI加持",
                        desc: "实现客户行为可视化、以可量化指标优化店内陈列、设置合理的门店动线,指导经营策略，驱动精准营销。为业务赋能，提高消费者体验。",
                    },
                    {
                        img: require("/static/images/programme/new-retail/2-4.svg"),
                        title: "弹性伸缩",
                        desc: "通过混合云模式和高性价比的快杰主机，高效的在线上促销期间进行弹性扩容，稳定的支撑促销期间数百倍的流量突增，帮助客户降低IT基础架构的成本。",
                    },
                ],
            },
            scene: {
                title: "场景化方案",
                list: [
                    {
                        bgImg: require("/static/images/programme/new-retail/3-1.png"),
                        title: "线上线下一体化营销",
                        desc: "现了从数据收集和管理、营销自动化、内容（数字资产）管理、实时分析、用户体验管理等一系列功能。",
                    },
                    {
                        bgImg: require("/static/images/programme/new-retail/3-2.png"),
                        title: "智慧园区",
                        desc: "综合利用物联网、人工智能、大数据技术为园区招商、运营提供完整的数字化运营解决方案。",
                    },
                    {
                        bgImg: require("/static/images/programme/new-retail/3-3.png"),
                        title: "大数据及BI 解决方案",
                        desc: "提供海量数据秒级分析的体验，更解决了大数据服务的弹性供给和敏捷交付难题， 助力零售行业数字化转型。",
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
