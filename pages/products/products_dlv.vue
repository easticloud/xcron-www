<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="dlv"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="dlv"></products-graphic-matrix>

        <!-- 3、应用场景  -->
        <products-tabs tab-key="dlv" custom-class="m-Bms-products_dlv" />

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
