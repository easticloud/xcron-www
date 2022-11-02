<template>
    <div class="p-products">
        <!-- 1、数据接入服务banner -->
        <products-banner banner-key="dis"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="dis"></products-graphic-matrix>

        <!-- 3、应用场景  -->
        <products-tabs tab-key="dis" custom-class="m-Bms-products_dis"></products-tabs>

        <!-- 4、功能描述  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01"></products-pmDotCon>
    </div>
</template>

<script>
export default {
    name: "products-DIS",
    layout: 'products',
    data() {
        return {
            // 功能描述
            pmDotConTil01: "功能描述",//标题
            pmDotCon01: [
                {
                    title: "数据采集",
                    desc: "RestAPI、SDK、Agent对接多种数据源，线上线下数据实时采集",
                    img: "/images/products/products_dis/01.png",
                },
                {
                    title: "数据传输",
                    desc: "实时数据高并发、低延时、高可靠传输",
                    img: "/images/products/products_dis/02.png",
                },
                {
                    title: "数据处理",
                    desc: "预置数据抽取、汇聚、格式转换等Connector(处理算子)，对用户输入数据做预处理",
                    img: "/images/products/products_dis/03.png",
                },
                {
                    title: "数据缓存",
                    desc: "实时数据缓存1-3天，保证实时数据消费可靠性",
                    img: "/images/products/products_dis/04.png",
                },
            ],
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
