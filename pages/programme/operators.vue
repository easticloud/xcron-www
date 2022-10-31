<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <Header :data="header" />
            <!-- 行业趋势 -->
            <TextPicture :data="trend" />
            <!-- 方案优势 -->
            <AllText :data="advantages" />
            <!-- 多种方案 -->
            <div class="m-more">
                <Recommend :data="cooperation" />
            </div>
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>
<script>
import Header from "@/components/programme/header";
import TextPicture from "@/components/programme/text_picture";
import Recommend from "@/components/scenes/recommend";
import AllText from "@/components/programme/all_text";

export default {
    components: { Header, TextPicture, Recommend, AllText },
    data() {
        return {
            header: {
                type: "operators",
                title: "运营商行业解决方案",
                desc: "结合多年来的 ICT行业经验，可以提供更适合运营商的业务云化转型方案以及面向运营商企业客户的行业数字化方案，帮助运营商加速网络变现，业务创新，运营敏捷，取得新增长。",
            },
            trend: {
                title: "行业趋势",
                img: require("/static/images/programme/operators/img.svg"),
                list: [
                    {
                        title: "CT与IT融合",
                        desc: "电信行业的云转型已进入深水区，机遇和挑战加速来临。只有建设并运营高效敏捷的ICT基础设施，运营商才能提供有竞争力的业务，抓住新市场、实现新增长<br />运营商的云化转型应该是基于CT，以云为辅助。要从电信行业自身优势出发，利用云化转型来放大电信网络和电信业务的价值，释放联接红利",
                    },
                    {
                        title: "云网融合",
                        desc: "运营商在提供云网协同服务方面具有领先优势，能够为toB客户提供更好的业务体验、更全面的服务组合，从而提升toB业务收入规模、扩大在垂直行业中的影响力、打开新的增长空间",
                    },
                ],
            },
            advantages: {
                title: "方案优势",
                list: [
                    {
                        img: require("/static/images/programme/new-retail/2-1.svg"),
                        title: "云化转型最佳实践",
                        desc: "● 同时提供电信业务软件，理解电信软件云需求<br />● 移动金融等电信业务创新实践沉淀<br />● 沉淀全行业AI大数据在创新应用经验，高效的云原生开发生产线",
                    },
                    {
                        img: require("/static/images/programme/new-retail/2-2.svg"),
                        title: "加速释放联接红利",
                        desc: "● ICT native 的厂家，更懂电信网络<br /> ● 基于云来扩大网络价值的能力<br />● 云网边端协同在政企市场网络变现的最佳实践",
                    },
                    {
                        img: require("/static/images/programme/new-retail/2-3.svg"),
                        title: "更卓越的运营和体验",
                        desc: "● 网络规划，网络自动驾驶等领域算法模型在云上沉淀<br /> ● 已为60+运营商实施上云规划与迁移提升业务体验与效率<br />● 业务上云预集成预验证，业界最全的部署形态",
                    },
                    {
                        img: require("/static/images/programme/new-retail/2-4.svg"),
                        title: "一站式的本地服务",
                        desc: "● 服务网点全球覆盖170个国家，抵近服务客户<br /> ● 运营商享有战略合作伙伴权益<br />● 在技术、方案、生态，市场等多领域服务与支持",
                    },
                ],
            },
            cooperation: {
                title: "多种合作方案",
                list: [
                    {
                        title: "助力运营商自身云化转型",
                        desc: "1、运营商上云迁移咨询规划<br />2、FinTech等业务创新<br />3、提供多种部署方式的数字化转型与创新的云底座",
                    },
                    {
                        title: "使能运营商发展行业客户",
                        desc: "1、运营商享有战略合作伙伴咨询转售权益，为企业提供优质云服务<br />2、开放行业生态，云网融合，做大运营商企业业务<br />3、多种支持和激励，助力运营商打造本地应用生态",
                    },
                    {
                        title: "打造自有品牌云服务",
                        desc: "1、打造运营商自有独立品牌云，享受全栈能力，迭代升级保持技术领先<br />2、支持云联邦合作，优势互补<br />3、共享云产业技术与生态，规建维全领域合作",
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
