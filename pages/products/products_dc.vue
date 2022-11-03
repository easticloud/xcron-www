<template>
    <div class="p-products">
        <!-- 1、云专线banner -->
        <products-banner banner-key="dc"></products-banner>

        <!-- 2、了解云专线  -->
        <products-frame-text text-key="dc" custom-class="m-p-ECS"></products-frame-text>

        <!-- 3、应用场景  -->
        <products-tabs tab-key="dc" custom-class="m-Bms-products_dc"></products-tabs>

        <!-- 4、权威认可  -->
        <products-graphic-matrix matrix-key="dc" custom-class="bcsAuth-1" />

        <!-- 5、联系我们Contact  -->
        <products-contactUs></products-contactUs>
    </div>
</template>

<script>
export default {
    name: "products-DC",
    layout: "products",
    data() {
        return {
            // 权威认可
            pmDotConTil: "权威认可",//标题
            pmDotConClass: "bcsAuth-1",//复写样式
            pmDotCon: [//内容数据
                {
                    title: "可信云·云平台网络能力",
                    desc: "云专线解决方案获得中国信息通信研究院可信云·云平台网络能力认证",
                    img: "/images/products/products_dc/1.png",
                },
                {
                    title: "网络安全等级保护",
                    desc: "网络安全等级保护是公安部用于指导国内各组织单位进行网络安全建设的依据",
                    img: "/images/products/products_dc/2.png",
                },
                {
                    title: "中国网络安全审查",
                    desc: "中国网络安全审查是中华人民共和国网信办保障网络安全和数据安全、维护国家安全的要求",
                    img: "/images/products/products_dc/3.png",
                }
            ],
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-p-aboutBCS {
    height: 403px;
}
</style>
