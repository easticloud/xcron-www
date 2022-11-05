<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <Header banner-key="operators" />
            <!-- 行业趋势 -->
            <TextPicture :data="trend" textKey="operators" />
            <!-- 方案优势 -->
            <AllText textKey="operators" />
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
// 运营商行业解决方案
import Header from "@/components/programme/header";
import TextPicture from "@/components/programme/text_picture";
import Recommend from "@/components/scenes/recommend";
import AllText from "@/components/programme/all_text";

export default {
    components: { Header, TextPicture, Recommend, AllText }, 
    data() {
        return {
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
