<template>
    <div class="p-products">
        <!-- 1、云专线banner -->
        <products-banner banner-key="dc"></products-banner>

        <!-- 2、了解云专线  -->
        <products-frame-text text-key="dc" custom-class="m-p-ECS"></products-frame-text>

        <!-- 3、应用场景  -->
        <products-tabs :data="pmScene"></products-tabs>

        <!-- 4、权威认可  -->
        <products-pmDotCon :pmDotConClass="pmDotConClass" :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon">
        </products-pmDotCon>

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
            // 应用场景
            pmScene: {
                products: 0,
                til: "应用场景",

                sceneClass: "m-Bms-products_dc",
                list: [
                    {
                        label: "混合云部署",
                        children: {
                            title: "混合云部署",
                            titletag: "通过云专线将云下用户数据中心和云上VPC互联，利用云上的弹性，快速扩展能力，扩展应用层的计算能力",
                            src: "/images/products/products_dc/01.png",
                            tag: [
                                {
                                    tagTil: "· 混合云架构",
                                    tagCon: "多地接入，拓扑灵活",
                                },
                                {
                                    tagTil: "· 安全可靠",
                                    tagCon: "专属网络通信，安全隔离，稳定可靠",
                                },
                                {
                                    tagTil: "· 高性能",
                                    tagCon: "主力region单线最大带宽支持100Gbps",
                                },
                            ],
                        },
                    },
                    {
                        label: "多云互联",
                        children: {
                            title: "多云互联",
                            titletag: "通过云专线将多云互联，业务部署在多云进行备份，提高业务的可靠性",
                            src: "/images/products/products_dc/02.png",
                            tag: [
                                {
                                    tagTil: "· 多云架构",
                                    tagCon: "多地接入，拓扑灵活，多云备份容灾",
                                },
                                {
                                    tagTil: "· 安全可靠",
                                    tagCon: "专属网络通信，安全隔离，稳定可靠",
                                },
                                {
                                    tagTil: "· 高性能",
                                    tagCon: "主力region单线最大带宽支持100Gbps",
                                },
                            ],
                        },
                    },
                ],
            },
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
