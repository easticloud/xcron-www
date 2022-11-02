<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="tcs"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="tcs"></products-graphic-matrix>

        <!-- 3、产品与服务  -->
        <products-pmImgCon :pmImgConClass="pmImgConClass" :pmImgConTil="pmImgConTil" :pmImgCon="pmImgCon">
        </products-pmImgCon>

        <!-- 4、产品功能  -->
        <products-graphic-matrix matrix-key="tcs_x" />

        <!-- 5、应用场景  -->
        <products-tabs tab-key="tcs"></products-tabs>
    </div>
</template>

<script>
export default {
    name: "products-TCS",
    layout: "products",
    data() {
        return {
            // 产品与服务
            pmImgConTil: "产品与服务",//标题
            pmImgConClass: "noimgCon",//复写样式
            pmImgCon: [//内容数据
                {
                    title: "区块链服务BCS\n(Hyperledger Fabric增强版)",
                    desc: "基于软硬协同、自主创新、安全可控技术，简单易用， 通过Kubernetes管理，数分钟内即可完成区块链网络的构建。",
                    img: "",
                },
                {
                    title: "可信数据交换与计算服务 TC3",
                    desc: "为链上应用提供可信数据资产交换和可信联合分析计算，做到数据“可用不可见，可见不可得”。",
                    img: "",
                },
                {
                    title: "可信分布式身份服务 TDIS",
                    desc: "为个人和企业用户提供统一的分布式身份标识，支持多场景细粒度的可验证凭证管理能力。",
                    img: "",
                },
                {
                    title: "区块链服务BCS(区块链引擎)",
                    desc: "自主研发的满足企业级和金融级的可信、协调要求的高性能、高安全的区块链技术服务平台。",
                    img: "",
                },
                {
                    title: "数字资产链 DAC",
                    desc: "自研的数字资产链平台，基于云区块链引擎，可实现数字资产的确权、可信保存、安全交易。",
                    img: "",
                }
            ],
            // 应用场景
            pmSceneUseSTil: "应用场景",
            pmSceneUseS: {
                title: "跨地域电子票据",
                imgSrc: "/images/products/products_tcs/bg.svg",
                list: [
                    {
                        til: "· 解决数据孤岛",
                        desc: "随着区块链生态的发展，不同地市税局提出不同区块链解决方案，产生基于不同架构，安全算法等一系列区块链联盟。如何保证在跨链传递过程中数据的真实性，事务的一致性，不让单链成为限制发票全生命周期流转的限制，是需要解决的问题。",
                    },
                    {
                        til: "· 提升客户价值",
                        desc: "通过跨链服务，能够安全可信地进行区块链之间的数据流通，全生命周期追踪发票信息，保证税务开票实时性，避免虚开发票场景，提升数据时效性。",
                    },
                    {
                        til: "· 方便易用接入门槛低",
                        desc: "提供可视化平台大幅降低用户接入门槛。用户可通过可视化界面操作完成不同区块链之间的对接，快速实现跨链业务。",
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
