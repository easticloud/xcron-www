<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <!-- <common-header></common-header> -->

        <!-- 1、banner -->
        <products-banner banner-key="ai"></products-banner>

        <!-- 2、产品展示  -->
        <products-show></products-show>

        <!-- 3、产品优势  -->
        <products-graphic-matrix matrix-key="ai"></products-graphic-matrix>

        <!-- 4、场景介绍  -->
        <products-pmScene :pmScene="pmScene"></products-pmScene>

        <!-- 5、服务支持-->
        <!-- <products-pmService></products-pmService> -->

        <!-- 公共底部 -->
        <!-- <common-footer></common-footer> -->
    </div>
</template>

<script>
export default {
    name: "Products-AI",
    layout: "products",
    data() {
        return {
            // 场景介绍
            pmScene: {
                index: 0,
                til: "场景介绍",
                isShow: true,
                list: [
                    {
                        label: "数据中心",
                        children: {
                            title: "数据中心",
                            src: "/images/products/products_ai/01.jpeg",
                            tag: ["● 提供区域入侵检测，保护机房内部重要设备，提供安全可靠的运行环境", "● 提供烟火检测，实时识别区域内烟气、明火情况，及时告警", "● 提供安全帽、工装检测,自动识别区域内人员作业着装检测，对不符合要求的及时告警", "● 提供人体骨骼关键点检测，在前端设备未抓取到人体正脸时，通过骨骼关键点及着装情况，分析人员", "● 提供脱岗、摔倒检测，自动识别区域内人员状态，对脱岗及摔倒状态，及时告警"],
                        },
                    },
                    {
                        label: "智慧工地",
                        children: {
                            title: "智慧工地",
                            src: "/images/products/products_ai/02.jpeg",
                            tag: ["● 提供人员出入检测，智能识别出入人员", "● 提供升降梯人数识别，严控入梯人数，降低安全隐患", "● 提供人员聚集检测，当检测到人员异常聚集时，及时告警", "● 提供玩手机识别，对区域内人员进行玩手机行为检测，并实时告警，保障安全生产", "● 提供反光衣、灭火器检测，对区域内人员是否穿戴反光衣及区域内是否放置灭火器检测，防范安全事故"],
                        },
                    },
                ],
            }
        }
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
