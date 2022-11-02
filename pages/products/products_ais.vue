<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="ais"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="ais" custom-class="m-p-oSer"></products-graphic-matrix>

        <!-- 3、产品功能  -->
        <products-pmImgCon :pmImgConTil="pmImgConTil" :pmImgCon="pmImgCon"></products-pmImgCon>

        <!-- 4、场景使用  -->
        <products-tabsUse></products-tabsUse>
    </div>
</template>

<script>
export default {
    name: "products-AIS",
    layout: "products",
    data() {
        return {
            pmImgConTil: "产品功能",
            pmImgCon: [
                {
                    title: "自动化部署工具",
                    desc: "提供自动化部署工具，一键从本地部署到UAI-Inference集群。",
                    img: "/images/products/products_ais/01.png",
                },
                {
                    title: "服务管理",
                    desc: "支持在线新增、更新、删除、启动、停止、恢复AI服务。",
                    img: "/images/products/products_ais/02.png",
                },
                {
                    title: "版本管理",
                    desc: "支持同一服务多版本部署，灰度切换，流量控制，版本回滚。",
                    img: "/images/products/products_ais/03.png",
                },
                {
                    title: "日志查询",
                    desc: "支持在线查询服务版本发布情况，服务运行情况。",
                    img: "/images/products/products_ais/04.png",
                },
                {
                    title: "监控报警",
                    desc: "支持对服务运行异常状态及时报警。",
                    img: "/images/products/products_ais/05.png",
                }
            ],
        }
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
