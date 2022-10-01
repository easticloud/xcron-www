<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、bannar -->
        <products-pmBanner :pmBanner="pmBanner"></products-pmBanner>

        <!-- 2、产品优势  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon"></products-pmDotCon>

        <!-- 3、应用场景  -->
        <products-pmScene :pmScene="pmScene"></products-pmScene>

        <!-- 4、功能描述  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01"></products-pmDotCon>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pmDotCon from '../../components/products/pm-dotCon.vue';
import pmBanner from '../../components/products/pmBanner.vue';
import pmScene from '../../components/products/pmScene.vue';
export default {
    name: "products-DLV",
    data() {
        return {
            // 数据接入服务-banner
            pmBanner: {
                title: "数据可视化",
                desc: "数据可视化服务（Data Lake Visualization）是一站式数据可视化平台，适配云上云下多种数据源，提供丰富多样的2D、3D可视化组件，采用拖拽式自由布局，旨在帮助您快速定制和应用属于您自己的数据大屏",
            },
            // 产品优势
            pmDotConTil: "产品优势",//标题
            pmDotCon: [
                {
                    title: "丰富多样的可视化组件",
                    desc: "提供丰富的可视化组件，包括常用的数据图表、图形、控件等",
                    img: "/images/index/scene/01.svg",
                },
                {
                    title: "专业级地理信息可视化",
                    desc: "支持绘制地理轨迹、地理飞线、热力分布、地域区块、3D地球等效果，支持地理数据多层叠加",
                    img: "/images/index/scene/02.svg",
                },
                {
                    title: "可视化编辑器",
                    desc: "拖拽即可完成组件自由配置与布局、所见即所得，无需编程就能轻松搭建可视化大屏，并且依据投放设备分辨率，自由定制大屏尺寸",
                    img: "/images/index/scene/03.svg",
                },
                {
                    title: "多种数据源支持",
                    desc: "无缝集成云数据仓库服务、数据湖探索、关系型数据库、对象存储服务等，支持本地CSV、在线API及企业内部私有云数据",
                    img: "/images/index/scene/03.svg",
                },
            ],
            // 应用场景 
            pmScene: {
                index: 0,
                til: "应用场景",
                isShow: false,
                sceneClass: "m-Bms-scene",
                list: [
                    {
                        label: "安全态势场景",
                        children: {
                            title: "安全态势感知",
                            titletag: "从微观到宏观，全面呈现，让一切入侵有迹可循，为云上企业的安全事件处置提供可视化的决策依据",
                            src: "/images/index/solution/01.svg",
                            tag: [
                                {
                                    tagTil: "· 实时业务态势",
                                    tagCon: "实时检测，有效防范每一起安全事件",
                                },
                                {
                                    tagTil: "· 地理化访问轨迹",
                                    tagCon: "通过2D、3D地图组件使安全威胁来源一目了然",
                                },
                            ],
                        },
                    },
                    {
                        label: "经营管理看板",
                        children: {
                            title: "经营管理看板",
                            titletag: "通过接入企业经营数据，可以对企业的生产情况、产品质量情况、产品的销售情况了如指掌，为企业管理者提供可视化的决策依据",
                            src: "/images/index/solution/01.svg",
                            tag: [
                                {
                                    tagTil: "· 经营状态实时可见",
                                    tagCon: "实时可视化的呈现企业的经营状态，企业管理者实时了解企业的状态",
                                },
                                {
                                    tagTil: "· 简单易用",
                                    tagCon: "组件化拖拽式编排，轻松上手",
                                },
                            ],
                        },
                    },
                ],
            },
            // 功能描述
            pmDotConTil01: "功能描述",//标题
            pmDotCon01: [
                {
                    title: "数据连接管理",
                    desc: "创建数据连接，提供数据大屏所需动态数据",
                    img: "/images/index/scene/01.svg",
                },
                {
                    title: "数据大屏管理",
                    desc: "基于多种场景模板创建管理您的数据大屏",
                    img: "/images/index/scene/02.svg",
                },
                {
                    title: "可视化编辑器",
                    desc: "画布、可视化界面编辑器和所见及所得的大屏编辑区域，是数据湖可视化最主要的功能区域。用户通过画布可实现对组件布局编排、样式配置以及数据源与图表之间绑定",
                    img: "/images/index/scene/03.svg",
                },
                {
                    title: "公开与加密发布",
                    desc: "开发过程支持预览，开发完成后可支持公开与加密发布",
                    img: "/images/index/scene/03.svg",
                },
            ],
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
