<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="iec"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="iec"></products-graphic-matrix>

        <!-- 3、应用场景  -->
        <products-tabs tab-key="iec" custom-class="m-Bms-scene"></products-tabs>

        <!-- 4、功能描述  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01"></products-pmDotCon>
    </div>
</template>

<script>
export default {
    name: "products-IEC",
    layout: 'products',
    data() {
        return {
            // 功能描述
            pmDotConTil01: "功能描述",//标题
            pmDotCon01: [
                {
                    title: "边缘算力",
                    desc: "提供C6系列高性能通用算力、G5系列GPU算力、Ai系列AI推理算力、D3系列存储型算力，满足边缘业务当前和持续演进的业务需求",
                    img: "/images/products/products_iec/05.png",
                },
                {
                    title: "边缘网络",
                    desc: "提供VPC、子网、网络ACL、安全组、虚IP、EIP等完善的边缘网络能力，方便客户进行灵活网络的方案配置和管理",
                    img: "/images/products/products_iec/06.png",
                },
                {
                    title: "统一管理",
                    desc: "一站式实现分布式多节点业务的统一创建、更新、伸缩、运维等管理操作",
                    img: "/images/products/products_iec/07.png",
                },
                {
                    title: "批量部署",
                    desc: "分钟级完成批量化边缘业务的自动部署",
                    img: "/images/products/products_iec/08.png",
                },
                {
                    title: "高效运维",
                    desc: "功能全面的服务控制台和API接口，方便管理边缘资源，实时查阅运维监控指标",
                    img: "/images/products/products_iec/09.png",
                },
                {
                    title: "安全可靠",
                    desc: "高可用、高容错的边缘计算平台，算力和网络实现多租户安全隔离",
                    img: "/images/products/products_iec/10.png",
                },
            ],
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
