<template>
    <div class="p-products">
        <!-- 1、虚拟私有云banner -->
        <products-banner banner-key="vpc"></products-banner>

        <!-- 2、了解虚拟私有云  -->
        <products-frame-text text-key="vpc" custom-class="m-p-ECS"></products-frame-text>

        <!-- 3、产品优势  -->
        <products-graphic-matrix matrix-key="vpc_x" custom-class="ecs-dotcon" />

        <!-- 4、权威认可  -->
        <products-pmDotCon :pmDotConClass="pmDotConClass01" :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01">
        </products-pmDotCon>

        <!-- 5、应用场景  -->
        <products-tabs tab-key="vpc" custom-class="m-Bms-products_vpc"></products-tabs>
    </div>
</template>

<script>
export default {
    name: "products-VPC",
    layout: "products",
    data() {
        return {
            // 权威认可
            pmDotConTil01: "权威认可",//标题
            pmDotConClass01: "bcsAuth",//复写样式
            pmDotCon01: [//内容数据
                {
                    title: "云网能力技术最佳实践奖",
                    desc: "由中国信息通信研究院、中国标准化协会颁发的技术创新的系列奖项。KYON企业级云网络凭借极简敏捷的携网上云能力，以及数项技术创新，得到可信云权威评估机构的高度认可，斩获“2020可信云技术最佳实践奖”",
                    img: "/images/products/products_vpc/icon.png",
                },
                {
                    title: "IPv6支持度优秀奖",
                    desc: "作为首批通过工信部IPv6认证的云厂商之一，16项云服务获得工信部认证的云服务IPv6支持能力测评证书，标志着云服务在IPv6网络下的各项能力均已走在行业前列",
                    img: "/images/products/products_vpc/icon.png",
                },
            ],
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
