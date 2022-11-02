<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="dh"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="dh"></products-graphic-matrix>

        <!-- 3、应用场景  -->
        <products-tabs :data="pmScene"></products-tabs>

        <!-- 4、功能描述  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01"></products-pmDotCon>
    </div>
</template>

<script>
export default {
    name: "products-DH",
    layout: 'products',
    data() {
        return {
            // 应用场景
            pmScene: {
                products: 0,
                til: "应用场景",

                sceneClass: "m-Bms-products_dh",
                list: [
                    {
                        label: "Web互联",
                        children: {
                            title: "高性能计算场景",
                            titletag: "科学计算，游戏动画等业务场景，对计算性能有很高要求",
                            src: "/images/products/products_dh/web.png",
                            tag: [
                                {
                                    tagTil: "· 资源物理隔离",
                                    tagCon: "专属主机内资源物理隔离，性能高，稳定性好",
                                },
                                {
                                    tagTil: "· 与云上服务器网络互通",
                                    tagCon: "与普通公有云中云服务器使用相同VPC，服务器网络互通",
                                },
                                {
                                    tagTil: "· 高带宽低时延数据访问",
                                    tagCon: "支持IB数据网络互连，低时延磁盘",
                                },
                            ],
                        },
                    },
                    {
                        label: "高性能计算",
                        children: {
                            title: "高性能计算场景",
                            titletag: "-科学计算，游戏动画等业务场景，对计算性能有很高要求 \n-资源物理隔离专属主机内资源物理隔离，性能高，稳定性好 \n-与云上服务器网络互通与普通公有云中云服务器使用相同VPC，服务器网络互通 \n-高带宽低时延数据访问支持IB数据网络互连，低时延磁盘",
                            src: "/images/products/products_dh/compute.png",
                            tag: [],
                        },
                    },
                ],
            },
            // 功能描述
            pmDotConTil01: "功能描述",//标题
            pmDotCon01: [
                {
                    title: "专属主机管理",
                    desc: "购买、查看、释放专属主机，修改主机信息以及放置策略",
                    img: "/images/products/products_dh/05.png",
                },
                {
                    title: "云服务器管理",
                    desc: "在专属主机上，创建、启动、关机、释放云服务器等等",
                    img: "/images/products/products_dh/06.png",
                },
                {
                    title: "云服务器放置策略（自动）",
                    desc: "创建云服务器时，不指定专属主机，系统自动选择专属主机放置",
                    img: "/images/products/products_dh/07.png",
                },
                {
                    title: "云服务器放置策略（主动）",
                    desc: "创建云服务器时，根据需求，指定专属主机放置",
                    img: "/images/products/products_dh/08.png",
                },
            ],
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
