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
import TextPicture from "@/components/programme/text_picture";
import AllText from "@/components/programme/all_text";
import PictureText from "@/components/programme/picture_text";
export default {
    components: { Header, TextPicture, AllText, PictureText },
    data() {
        return {
            header: {
                type: "media",
                title: "媒体应用解决方案",
                desc: "依托软硬协同、端云结合、音视频编解码技术等差异化能力，提供涵盖视频生产、分发和应用在内的超高清、低时延、强互动、极致体验的媒体能力，助力文娱行业持续创新。",
            },
            trend: {
                title: "行业趋势",
                img: require("/static/images/programme/media/img.png"),
                list: [
                    {
                        title: "媒体文娱业务同质化较严重，亟需新体验新玩法，开辟新赛道",
                        desc: "各类视频都在加快往互动化发展，超高清、VR依赖边缘、AI、渲染、5G的实时生产实时分发网络来支撑智能、实时、高质量的交互",
                    },
                    {
                        title: "业务规模增长、创新增多带来资源诉求增多，成本压力随之增大",
                        desc: "端云交互及3D渲染规模增大，带宽、渲染算例、AI算力、通用算力成本同比增高，媒体娱乐业务对结构化综合降成本的诉求越来越强烈",
                    },
                    {
                        title: "人工智能逐渐作用于媒体娱乐全生命周期，保障产业健康效率发展",
                        desc: "EI使能媒体娱乐全生命周期，内容监管，自动化审核。大规模存储诉求内容感知，识别并支持更丰富的存储增值能力",
                    },
                ],
            },
            advantages: {
                title: "方案优势",
                type: "half",
                list: [
                    {
                        title: "600ms超低延时直播、端云互动能力",
                        desc: "加强赛事、秀场、电商直播实时互动能力，支持换脸、位置互动、数字人、实时美颜、画质增强、捏脸等特性。",
                    },
                    {
                        title: "易于对证券化资产进行数据分析",
                        desc: "高清低码，提供去模糊、降噪等画质增强能力，降低码率40%，同比降低网络、存储成本。",
                    },
                    {
                        title: "0.1秒审核时效性，20%推荐CTR提升",
                        desc: "通过ModelArts、智能芯片能力，提供高效审核，Feed流推荐、搜索等全栈全场景视频EI能力，降低风险，提高DAU。",
                    },
                    {
                        title: "VR、4K超高清、5G制播，时延低于200ms",
                        desc: "基于遍布全球的网络基础设施和边缘节点，通过网络底层协议优化，提供极低延迟、稳定可靠，高清优质视频体。",
                    },
                    {
                        title: "从底层芯片到服务架构，结构化降成本30%",
                        desc: "依托鲲鹏、昇腾AI高性价比、裸机容器、存算分离等结构化降成本方案，优化web前端、Redis、GPU训练、数据库、大数据等多个场景，综合降低TCO 30%。",
                    },
                    {
                        title: "AI端云协同，毫秒级人脸、在线物品检测",
                        desc: "提供更多云特效能力。云端智能物体识别，满足在线物体毫秒级时延检测，数十数百倍提升端侧AI能力。",
                    },
                ],
            },
            customers: {
                title: "客户案例",
                type: "icon",
                list: [
                    {
                        bgImg: require("/static/images/programme/media/3-1.svg"),
                        position: "30px",
                        title: "新浪",
                        desc: "实现千级规模C3虚拟机分钟级发放，第一时间释放极致算力，从容应对互联网平台流量洪峰。",
                    },
                    {
                        bgImg: require("/static/images/programme/media/3-2.svg"),
                        position: "30px",
                        title: "斗鱼",
                        desc: "斗鱼采用存算分离架构的BigData Pro方案，让大数据分析更加高效，分析时长缩短35%。未来双方还将在AI，5G+Cloud+直播创新等领域打造更好的用户体验。",
                    },
                    {
                        bgImg: require("/static/images/programme/media/3-3.svg"),
                        position: "30px",
                        title: "造梦科技",
                        desc: "造梦科技凭借5G的大带宽低延时特性,实现云VR的高效数据传输,实现带宽节省30%,时延<20ms;基于5G的轻度本地渲染+重度云端渲染模式,画质远远优于VR一体机。",
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
