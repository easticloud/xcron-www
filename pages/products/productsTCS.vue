<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、bannar -->
        <products-pmBanner :pmBanner="pmBanner"></products-pmBanner>

        <!-- 2、产品优势  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon"></products-pmDotCon>

        <!-- 3、产品与服务  -->
        <products-pmImgCon :pmImgConClass="pmImgConClass" :pmImgConTil="pmImgConTil" :pmImgCon="pmImgCon">
        </products-pmImgCon>

        <!-- 4、产品功能  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01"></products-pmDotCon>

        <!-- 5、应用场景  -->
        <products-pmSceneUseS :pmSceneUseS="pmSceneUseS" :pmSceneUseSTil="pmSceneUseSTil"></products-pmSceneUseS>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pmImgCon from '../../components/products/pm-imgCon.vue';
import pmDotCon from '../../components/products/pm-dotCon.vue';
import pmBanner from '../../components/products/pmBanner.vue';
import pmSceneUseS from '../../components/products/pmSceneUseS.vue';
export default {
    name: "products-BCS",
    data() {
        return {
            // 可信跨链服务-banner
            pmBanner: {
                title: "可信跨链服务",
                desc: "可信跨链服务(Trusted Cross-Chain Service)基于一系列制定的可信区块链标准跨链协议，保证跨链交易全栈可追溯，可扩展性及可靠性等，实现基于不同区块链内核所构建的同构及异构链之间的互联互通，打破区块链数据孤岛，助力不同企业联盟链可信互联，促进区块链产业生态可信融合。",
            },
            // 产品优势
            pmDotConTil: "产品优势",//标题
            pmDotCon: [
                {
                    title: "跨链操作可审计",
                    desc: "跨链申请、授权等操作行为完整保存上链，交易过程记录本地账本，全流程自动、透明、可监督，支持事中校验、事后审计，保障多方权益。",
                    img: "/images/index/scene/01.svg",
                },
                {
                    title: "跨链数据授权访问",
                    desc: "跨链账本数据以及链代码数据仅在所有者授权情况下才能进行访问，基于身份体系对跨链合约及账本查询和交易操作提供授权能力，在保护数据安全的同时，还保证数据的使用过程可以被追溯。",
                    img: "/images/index/scene/02.svg",
                },
                {
                    title: "统一分布式跨链身份",
                    desc: "基于分布式身份体系支持跨链系统治理，为各个接入区块链配置通用标识，支持基于标识寻址发起跨链访问。",
                    img: "/images/index/scene/03.svg",
                },
                {
                    title: "数据安全和隐私保护",
                    desc: "基于TEE的证明生成流程，保证跨链交互数据安全可靠，跨链中继侧不记录对应链的数据信息，支持跨链组件点对点数据交互，防止隐私泄露，有效保护跨链数据隐私。",
                    img: "/images/index/scene/03.svg",
                },
            ],
            // 产品与服务
            pmImgConTil: "产品与服务",//标题
            pmImgConClass: "noimgCon",//复写样式
            pmImgCon: [//内容数据
                {
                    title: "区块链服务BCS(Hyperledger Fabric增强版)",
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
            // 产品功能
            pmDotConTil01: "产品功能",//标题
            pmDotCon01: [
                {
                    title: "跨链数据迁移",
                    desc: "基于可信环境中授权信息，支持读取账本中的数据，将不同异构链或者同构链中的状态信息迁移到目的链中，所有迁移皆记录在账本中，实现数据可追溯，可审计，并支持对迁移完成数据进行校验，保证数据迁移正确性。",
                    img: "/images/index/scene/01.svg",
                },
                {
                    title: "数据访问权限管理",
                    desc: "统一的身份管理体系，提供身份的创建、更新等功能。用户可以基于分布式身份体系完成区块链服务的注册，并对申请访问区块链进行授权操作，可以基于账本，链代码的查询及交易动作进行分别授权。",
                    img: "/images/index/scene/02.svg",
                },
                {
                    title: "跨链互操作",
                    desc: "在可信环境中，用户可以授权访问其他区块链访问其跨链合约，经过跨链寻址，身份校验等一系列动作，实现合约的远程调用，完成业务场景中的复杂互操作。",
                    img: "/images/index/scene/03.svg",
                },
                {
                    title: "同构异构链管理",
                    desc: "基于区块链跨链服务，实现不同类型，不同架构，不同安全算法区块链配置对接，生成相应接入服务。",
                    img: "/images/index/scene/03.svg",
                },
            ],
            // 应用场景
            pmSceneUseSTil: "应用场景",
            pmSceneUseS: {
                title: "跨地域电子票据",
                imgSrc: "/images/index/solution/01.svg",
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
    components: {
        pmBanner,
        pmImgCon,
        pmDotCon,
        pmSceneUseS
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
