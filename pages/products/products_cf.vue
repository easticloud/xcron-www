<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="cf"></products-banner>

        <!-- 2、了解云防火墙  -->
        <products-frame-text text-key="cf"></products-frame-text>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="cf" />

        <!-- 3、应用场景  -->
        <products-tabs tab-key="cf" custom-class="m-Bms-scene"></products-tabs>

        <!-- 4、功能特性  -->
        <products-graphic-matrix matrix-key="cf_x"></products-graphic-matrix>
    </div>
</template>

<script>
export default {
    name: "products-CF",
    layout: "products",
    data() {
        return {
            // 功能描述
            pmDotConTil01: "功能特性",//标题
            pmDotCon01: [
                {
                    title: "细粒度访问控制",
                    desc: "支持全向流量访问控制，实时入侵防御等功能\n提供Internet流量访问控制、细粒度访问控制、VPC间流量的访问控制",
                    img: "/images/products/products_cf/01-2x.png",
                },
                {
                    title: "主动外联管控",
                    desc: "支持云内资源的主动外联检测与封禁，协助客户判断恶意外连请求\n自动发现失陷主机，展示主机的主动外联数据，及时发现可疑主机",
                    img: "/images/products/products_cf/02-2x.png",
                },
                {
                    title: "入侵检测与防御",
                    desc: "入侵防御引擎对恶意流量实时检测和拦截，集成全网威胁情报，实现智能精准防护\n针对开放公网访问的资产，能够自动识别威胁暴露面，并支持一键开启防护",
                    img: "/images/products/products_cf/03-2x.png",
                },
                {
                    title: "日志审计&流量可视化",
                    desc: "全场景流量日志，报表分析呈现，支持审计及高级威胁溯源分析\n支持全网流量可视",
                    img: "/images/products/products_cf/04-2x.png",
                }
            ],
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
