<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、bannar -->
        <products-pmBanner :pmBanner="pmBanner"></products-pmBanner>

        <!-- 2、产品展示  -->
        <products-pShow></products-pShow>

        <!-- 3、产品优势  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon"></products-pmDotCon>

        <!-- 4、场景介绍  -->
        <products-pmScene :pmScene="pmScene"></products-pmScene>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pmBanner from '../../components/products/pmBanner.vue';
import pmDotCon from '../../components/products/pm-dotCon.vue';
import pmScene from '../../components/products/pmScene.vue';
export default {
    name: "Products-AI",
    data() {
        return {
            pmBanner: {
                title: "智能AI边缘盒子",
                desc: "一款基于寒武纪220系列模块设计的计算平台，采用嵌入式设计原理，搭载AI处理芯片，内嵌基于深度学习的算法，提供识别、抓拍、比对、报警等服务。可广泛部署在边缘区域，以及时、快速、精准的做智能化分析。",
            },
            // 产品优势
            pmDotConTil: "产品优势",//标题
            pmDotCon: [
                {
                    title: "高解码能力/高算力",
                    desc: "在编解码方面，拥有16x 1080p解码能力，同时支持16路视频流解析(视算法/帧率)，在计算方面，拥有16Tops@INT8算力，可支持各类算法推理的支持。",
                    img: "/images/products/productsAI/01.svg",
                },
                {
                    title: "算法适配",
                    desc: "支持人脸识别，结合身份证识别、人脸对比、活体检测等多项组合能力，检测图像、视频中的所有车辆，可识别非机动车，机动车；可监控分析城市道路、园区/厂区等公共场所非机动车的停放情况等。",
                    img: "/images/products/productsAI/02.svg",
                },
                {
                    title: "Vision-E赋能硬件",
                    desc: "内嵌Vision-E嵌入式AI中间件（嵌入式推理框架+AI应用集成+自动部署集成）实现算法持续优化，持续部署，尤其对于各类事件场景算法尤为便捷可行，可实现指定算法到指定设备的自动化部署。",
                    img: "/images/products/productsAI/03.svg",
                },
                {
                    title: "支持大容量存储",
                    desc: "实现支持存储30万大容量底库，支持注册照、特征值入库；通过支持前端提取后端比对模式，可以将人脸底库提升到千万级，业务响应时间小于前端提取前端比对时间，可离线存储至少20万条业务记录。",
                    img: "/images/products/productsAI/03.svg",
                },
            ],
            // 场景介绍 
            pmScene: {
                index: 0,
                til: "场景介绍",
                isShow: true,
                list: [
                    {
                        label: "数据中心",
                        children: {
                            title: "数据中心",
                            src: "/images/products/productsAI/01.jpeg",
                            tag: ["● 提供区域入侵检测，保护机房内部重要设备，提供安全可靠的运行环境", "● 提供烟火检测，实时识别区域内烟气、明火情况，及时告警", "● 提供安全帽、工装检测,自动识别区域内人员作业着装检测，对不符合要求的及时告警", "● 提供人体骨骼关键点检测，在前端设备未抓取到人体正脸时，通过骨骼关键点及着装情况，分析人员", "● 提供脱岗、摔倒检测，自动识别区域内人员状态，对脱岗及摔倒状态，及时告警"],
                        },
                    },
                    {
                        label: "智慧工地",
                        children: {
                            title: "智慧工地",
                            src: "/images/products/productsAI/02.jpeg",
                            tag: ["● 提供人员出入检测，智能识别出入人员", "● 提供升降梯人数识别，严控入梯人数，降低安全隐患", "● 提供人员聚集检测，当检测到人员异常聚集时，及时告警", "● 提供玩手机识别，对区域内人员进行玩手机行为检测，并实时告警，保障安全生产", "● 提供反光衣、灭火器检测，对区域内人员是否穿戴反光衣及区域内是否放置灭火器检测，防范安全事故"],
                        },
                    },
                ],
            }
        }
    },
    components: {
        pmBanner,
        pmDotCon,
        pmScene
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
