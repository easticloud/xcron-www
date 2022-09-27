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
        <products-pmScene></products-pmScene>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pmBanner from '../../components/products/pmBanner.vue';
import pmDotCon from '../../components/products/pm-dotCon.vue';
export default {
    name: "Products-AI",
    data(){
        return{
            pmBanner:{
                title: "智能AI边缘盒子",
                desc: "一款基于寒武纪220系列模块设计的计算平台，采用嵌入式设计原理，搭载AI处理芯片，内嵌基于深度学习的算法，提供识别、抓拍、比对、报警等服务。可广泛部署在边缘区域，以及时、快速、精准的做智能化分析。",
            },
            // 产品优势
            pmDotConTil:"产品优势",//标题
            pmDotCon: [
                {
                    title: "高解码能力/高算力",
                    desc: "在编解码方面，拥有16x 1080p解码能力，同时支持16路视频流解析(视算法/帧率)，在计算方面，拥有16Tops@INT8算力，可支持各类算法推理的支持。",
                    img: "/images/index/scene/01.svg",
                },
                {
                    title: "算法适配",
                    desc: "支持人脸识别，结合身份证识别、人脸对比、活体检测等多项组合能力，检测图像、视频中的所有车辆，可识别非机动车，机动车；可监控分析城市道路、园区/厂区等公共场所非机动车的停放情况等。",
                    img: "/images/index/scene/02.svg",
                },
                {
                    title: "Vision-E赋能硬件",
                    desc: "内嵌Vision-E嵌入式AI中间件（嵌入式推理框架+AI应用集成+自动部署集成）实现算法持续优化，持续部署，尤其对于各类事件场景算法尤为便捷可行，可实现指定算法到指定设备的自动化部署。",
                    img: "/images/index/scene/03.svg",
                },
                {
                    title: "支持大容量存储",
                    desc: "实现支持存储30万大容量底库，支持注册照、特征值入库；通过支持前端提取后端比对模式，可以将人脸底库提升到千万级，业务响应时间小于前端提取前端比对时间，可离线存储至少20万条业务记录。",
                    img: "/images/index/scene/03.svg",
                },
            ],
        }
    },
    components:{
        pmBanner,
        pmDotCon,
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
