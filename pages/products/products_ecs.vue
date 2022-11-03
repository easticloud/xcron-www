<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="ecs"></products-banner>

        <!-- 2、了解弹性云服务器  -->
        <products-frame-text text-key="ecs" custom-class="m-p-ECS"></products-frame-text>

        <!-- 3、产品优势  -->
        <products-graphic-matrix matrix-key="ecs" custom-class="ecs-dotcon" />

        <!-- 4、擎天架构加持，助力弹性云服务器更快、更稳 -->
        <products-pmPInfo :pmPInfoTil="pmPInfoTil" :pmPInfoImg="pmPInfoImg"></products-pmPInfo>

        <!-- 5、权威认可  -->
        <products-graphic-matrix matrix-key="ecs_x" custom-class="bcsAuth" />
    </div>
</template>

<script>
export default {
    name: "products-ECS",
    layout: "products",
    data() {
        return {
            // 技术支撑
            pmPInfoTil: "擎天架构加持，助力弹性云服务器更快、更稳",//标题
            pmPInfoImg: "/images/products/products_ecs/bg.png",
            // 权威认可
            pmDotConTil01: "权威认可",//标题
            pmDotConClass01: "bcsAuth",//复写样式
            pmDotCon01: [//内容数据
                {
                    title: "云计算服务能力标准符合性一级证书",
                    desc: "由中国电子工业标准化技术协会（ESA）信息技术服务分会颁发，标志着基础设施服务在规模、功能、性能、安全、人员和管理等维度全面满足工业和信息化部《云计算综合标准化体系建设指南》的最高要求。",
                    img: "/images/products/products_ecs/01.png",
                },
                {
                    title: "OCP与USCP运筹优化算法赛道第一名",
                    desc: "在GECCO 2020国际会议中，擎天架构的调度算法团队同时获得OCP与USCP运筹优化算法赛道第一名，算法运行结果刷新了十个文献算例的已知最好结果。",
                    img: "/images/products/products_ecs/02.png",
                },
                {
                    title: "51项国际榜单纪录",
                    desc: "擎天架构调度算法团队打破了51项由全球优化算法领域权威机构SINTEF维护的PDPTW榜单纪录，成为中国研究机构中最多纪录的保持者。",
                    img: "/images/products/products_ecs/03.png",
                },
                {
                    title: "可信云技术最佳实践奖",
                    desc: "擎天架构，凭借业界领先的云基础设施技术底座，以及面向多场景的技术创新，得到可信云权威机构的高度认可，荣获2020-2021年度“可信云技术最佳实践奖”。",
                    img: "/images/products/products_ecs/04.png",
                },
                {
                    title: "下一代云计算技术创新奖",
                    desc: "中国电子技术标准化研究院主办的“第九届中国云计算标准和应用大会”，鲲鹏云服务全系列计算实例（鲲鹏ECS/BMS），荣获主委会高度认可，并颁发荣誉证书。",
                    img: "/images/products/products_ecs/05.png",
                },
                {
                    title: "年度领先游戏云服务器",
                    desc: "广东省游戏协会、深圳市文化市场等多家产业协会指导，游戏行业头部媒体游戏陀螺、陀螺电竞等联合主办的2019未来商业生态链接大会暨第四届金陀螺奖颁奖典礼上，通用计算增强型实例C6s被评选为2019年度领先游戏云服务器。",
                    img: "/images/products/products_ecs/06.png",
                },
            ],
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-p-aboutBCS {
    height: 427px;
}


.m-p-aboutBCS .m-bcs {
    gap: 90px;
}
</style>
