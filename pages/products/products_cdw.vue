<template>
    <div class="p-products">
        <!-- 1、云数据仓库banner -->
        <products-banner banner-key="cdw"></products-banner>

        <!-- 2、了解云数据仓库  -->
        <products-frame-text text-key="cdw" custom-class="m-p-ECS"></products-frame-text>

        <!-- 3、产品优势  -->
        <products-graphic-matrix matrix-key="cdw_x" custom-class="ecs-dotcon" />

        <!-- 4、精品案例  -->
        <products-vertical-matrix matrix-key="cdw" custom-class="p-cdw"></products-vertical-matrix>

        <!-- 5、应用场景  -->
        <products-tabs tab-key="cdw" custom-class="m-Bms-scene"></products-tabs>
    </div>
</template>

<script>
export default {
    name: "products-CDW",
    layout: "products",
    data() {
        return {
            // 精品案例
            pmImgConTil: "精品案例",//标题
            pmImgConClass: "p-cdw",//复写样式
            pmImgCon: [//内容数据
                {
                    title: "招商银行",
                    desc: "240节点超大集群承载了全行所有零售数据应用，可储存10PB业务数据，容量提升超4倍",
                    img: "/images/products/products_cdw/zhaohang.jpeg",
                },
                {
                    title: "光大银行",
                    desc: "算力提升3倍，任务时间缩短8小时；查询速度提升至6倍",
                    img: "/images/products/products_cdw/guangda.jpeg",
                },
                {
                    title: "梦饷集团",
                    desc: "提供自动修复、自优化、自运维及自安全能力，运维效率提升30%，TCO降低30%",
                    img: "/images/products/products_cdw/mengxiang.jpeg",
                },
                {
                    title: "中原银行",
                    desc: "集群规模增长10倍，批量处理性能平均提升70%，运行成本降低50%",
                    img: "/images/products/products_cdw/zhongyuan.jpeg",
                }
            ],
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
