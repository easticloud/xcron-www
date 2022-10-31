<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <Header :data="header" />
            <Tabs :data="tabs" :index="tabsIndex" @change="changeTab" />
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>
<script>
import Header from "@/components/programme/header";
import Tabs from "@/components/scenes/tabs";
export default {
    components: { Header, Tabs },
    data() {
        return {
            tabs: ["能源", "医疗健康", "教育", "交通物流"],
            tabsIndex: 0,
            headerList: [
                {
                    type: "energy",
                    title: "能源行业解决方案",
                    desc: "能源企业逐步将云、大数据和人工智能技术广泛应用于生产、运输、配送和消费等环节，实现数据采集、业务监控、大数据处理分析、智能化的生产和运营。为能源企业提供端到端解决方案，通过云、AI、5G、IoT，助力能源企业实现高效生产，降本增效。",
                },
                {
                    type: "health",
                    title: "医疗健康行业解决方案",
                    desc: "响应国家号召《健康中国2030规划纲要》，依托自身云服务能力，基于高性能、高可靠、高安全的数字化底座与业内顶级医疗合作伙伴一起，为医疗行业客户提供完善的医疗应用和服务体系。",
                },
                {
                    type: "education",
                    title: "教育行业解决方案",
                    desc: "人工智能、大数据、区块链等技术迅猛发展，正在改变人才需求和教育形态。通过云计算、大数据、物联网、人工智能、实时音视频、VR等技术重构教育体系，面向高校、K12院校、政府机构、培训机构等客户提供人才培养、科研创新、智慧校园、在线教育等场景化解决方案，加快实现教育行业智能化转型，提升教育质量，促进教育公平公正。",
                },
                {
                    type: "transport",
                    title: "交通物流解决方案",
                    desc: "以《交通强国建设纲要》为指引，依托云-边-端优势，面向交通物流行业中的城市交通、高速、物流、航空、港口等领域，构建“出行一张脸、运行一张图”的全程互联大交通体系，协同各种交通方式，提升运营服务效率，最终实现“人悦于行、物优其流”。",
                },
            ],
            content: [],
        };
    },
    computed: {
        current() {
            return this.content[this.tabsIndex];
        },
        header() {
            return this.headerList[this.tabsIndex];
        },
    },
    methods: {
        changeTab(i) {
            this.tabsIndex = i;
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/programme/index.less";
</style>