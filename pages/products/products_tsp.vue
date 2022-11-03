<template>
    <div class="p-products">
        <!-- 1、终端安全防护banner -->
        <products-banner banner-key="tsp"></products-banner>

        <!-- 2、产品优势-->
        <products-graphic-matrix matrix-key="tsp"></products-graphic-matrix>

        <!-- 3、应用场景  -->
        <products-graphic-matrix matrix-key="tsp_x" custom-class="ecs-dotcon"></products-graphic-matrix>

        <!-- 4、产品功能  -->
        <products-vertical-matrix matrix-key="tsp"></products-vertical-matrix>
    </div>
</template>

<script>
export default {
    name: "products-TSP",
    layout: 'products',
    data() {
        return {
            // 产品功能
            pmImgConTil: "产品功能",
            pmImgCon: [
                {
                    title: "恶性病毒处置修复",
                    desc: "基于AI与大数据分析技术，能够快速对恶性病毒变种进行检测，实现病毒快速、无损修复，原文件可继续使用",
                    img: "/images/products/products_tsp/5.png",
                },
                {
                    title: "勒索病毒专项防护",
                    desc: "提供实现预防、防御、检测与响应的4-6-6三层立体防护，为终端提供全面、实时、快速、有效的安全防护能力，让勒索病毒无所遁形，保护组织终端业务安全",
                    img: "/images/products/products_tsp/6.png",
                },
                {
                    title: "网端联动",
                    desc: "通过网络及终端的深度协同联动，能够实现在网络端发现威胁、定位主机后，可直接在控制台下发对终端的处置命令，实现高协同、更有效、全面的危险防御",
                    img: "/images/products/products_tsp/7.png",
                },
            ],
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-imgCon {
    background-color: #fff;


}

.ecs-dotcon {
    .m-tabs {
        .m-item {
            height: 242px;

            .u-pic {
                height: 242px;
            }
        }
    }
}
</style>
