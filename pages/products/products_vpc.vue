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
        <products-tabs :data="pmScene"></products-tabs>
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
            // 应用场景
            pmScene: {
                products: 0,
                til: "应用场景",

                sceneClass: "m-Bms-products_vpc",
                list: [
                    {
                        label: "云端专属网络",
                        children: {
                            title: "云端专属网络",
                            titletag: "基于云构建的云上私有网络环境，用户通过弹性IP访问云上私有网络环境，配置部署业务",
                            src: "/images/products/products_vpc/01.svg",
                            tag: [
                                {
                                    tagTil: "· 灵活配置",
                                    tagCon: "自由定义网络，按需划分子网，申请弹性IP等资源",
                                },
                                {
                                    tagTil: "· 安全隔离",
                                    tagCon: "VPC之间完全隔离，子网之间可配置访问控制策略",
                                },
                            ],
                        },
                    },
                    {
                        label: "Web服务",
                        children: {
                            title: "Web服务",
                            titletag: "基于云构建的云上私有网络环境，通过弹性负载均衡对外提供服务，支撑海量用户访问",
                            src: "/images/products/products_vpc/02.svg",
                            tag: [
                                {
                                    tagTil: "· 可支撑高并发连接",
                                    tagCon: "应对海量接入，与弹性伸缩服务无缝集成，业务稳定可靠",
                                },
                                {
                                    tagTil: "· 后端资源自动扩容",
                                    tagCon: "按照业务流量自动扩容，适合业务量突增场景",
                                },
                            ],
                        },
                    },
                    {
                        label: "混合云部署",
                        children: {
                            title: "混合云部署",
                            titletag: "基于云提供的VPN/云专线服务，高速连接云上私有网络和用户自有IT设施，满足云上和自有设施间业务和数据的迁移，支撑混合云场景等",
                            src: "/images/products/products_vpc/03.svg",
                            tag: [
                                {
                                    tagTil: "· 选择多样化",
                                    tagCon: "云专线独占私有线路，高速，安全 。 VPN稳定，高性价比",
                                },
                                {
                                    tagTil: "· 云上云下互通",
                                    tagCon: "用户业务和数据可以云上、线下灵活部署并迁移",
                                },
                            ],
                        },
                    },
                ],
            },
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
