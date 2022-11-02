<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="dlv"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="dlv"></products-graphic-matrix>

        <!-- 3、应用场景  -->
        <products-tabs :data="pmScene"></products-tabs>

        <!-- 4、功能描述  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01"></products-pmDotCon>
    </div>
</template>

<script>
export default {
    name: "products-DLV",
    layout: 'products',
    data() {
        return {
            // 应用场景
            pmScene: {
                products: 0,
                til: "应用场景",

                sceneClass: "m-Bms-products_dlv",
                list: [
                    {
                        label: "安全态势场景",
                        children: {
                            title: "安全态势感知",
                            titletag: "从微观到宏观，全面呈现，让一切入侵有迹可循，为云上企业的安全事件处置提供可视化的决策依据",
                            src: "/images/products/products_dlv/1.png",
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
                            src: "/images/products/products_dlv/2.png",
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
                    img: "/images/products/products_dlv/01.png",
                },
                {
                    title: "数据大屏管理",
                    desc: "基于多种场景模板创建管理您的数据大屏",
                    img: "/images/products/products_dlv/02.png",
                },
                {
                    title: "可视化编辑器",
                    desc: "画布、可视化界面编辑器和所见及所得的大屏编辑区域，是数据湖可视化最主要的功能区域。用户通过画布可实现对组件布局编排、样式配置以及数据源与图表之间绑定",
                    img: "/images/products/products_dlv/03.png",
                },
                {
                    title: "公开与加密发布",
                    desc: "开发过程支持预览，开发完成后可支持公开与加密发布",
                    img: "/images/products/products_dlv/04.png",
                },
            ],
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
