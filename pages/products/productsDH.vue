<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、bannar -->
        <products-pmBanner :pmBanner="pmBanner"></products-pmBanner>

        <!-- 2、产品优势  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon"></products-pmDotCon>

        <!-- 3、应用场景  -->
        <products-pmScene :pmScene="pmScene"></products-pmScene>

        <!-- 4、功能描述  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01"></products-pmDotCon>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pmDotCon from '../../components/products/pm-dotCon.vue';
import pmBanner from '../../components/products/pmBanner.vue';
import pmScene from '../../components/products/pmScene.vue';
export default {
    name: "products-EBCS",
    data() {
        return {
            // 专属主机-banner
            pmBanner: {
                title: "专属主机",
                desc: "专属主机（Dedicated Host ）是指其上创建云服务器的所有资源完全供您专用的物理服务器，满足您对计算的隔离和性能的要求，并支持自带软件许可功能",
            },
            // 产品优势
            pmDotConTil: "产品优势",//标题
            pmDotCon: [
                {
                    title: "独享资源",
                    desc: "专属主机在主机级别资源独享，主机资源可见，其上无其他租户的云服务器竞争主机资源",
                    img: "/images/products/productsDH/01.svg",
                },
                {
                    title: "安全合规",
                    desc: "计算资源在主机级别物理隔离，带来更高安全级别的同时，满足企业特殊的合规性要求",
                    img: "/images/products/productsDH/02.svg",
                },
                {
                    title: "可控放置",
                    desc: "专属主机上可灵活规划云服务器，多台专属主机，更可通过业务需求规划云服务器，提高业务可靠性",
                    img: "/images/products/productsDH/03.svg",
                },
                {
                    title: "节约成本",
                    desc: "专属主机帮助您利用现有的核心、虚拟机的软件许可，从而降低成本，节省开支",
                    img: "/images/products/productsDH/04.svg",
                },
            ],
            // 应用场景 
            pmScene: {
                products: 0,
                til: "应用场景",
                isShow: false,
                sceneClass: "m-Bms-productsDH",
                list: [
                    {
                        label: "Web互联",
                        children: {
                            title: "高性能计算场景",
                            titletag: "科学计算，游戏动画等业务场景，对计算性能有很高要求",
                            src: "/images/products/productsDH/web.png",
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
                            titletag: "-科学计算，游戏动画等业务场景，对计算性能有很高要求\n-资源物理隔离专属主机内资源物理隔离，性能高，稳定性好 \n-与云上服务器网络互通与普通公有云中云服务器使用相同VPC，服务器网络互通 \n-高带宽低时延数据访问支持IB数据网络互连，低时延磁盘",
                            src: "/images/products/productsDH/compute.png",
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
                    img: "/images/products/productsDH/01.png",
                },
                {
                    title: "云服务器管理",
                    desc: "在专属主机上，创建、启动、关机、释放云服务器等等",
                    img: "/images/products/productsDH/02.png",
                },
                {
                    title: "云服务器放置策略（自动）",
                    desc: "创建云服务器时，不指定专属主机，系统自动选择专属主机放置",
                    img: "/images/products/productsDH/03.png",
                },
                {
                    title: "云服务器放置策略（主动）",
                    desc: "创建云服务器时，根据需求，指定专属主机放置",
                    img: "/images/products/productsDH/04.png",
                },
            ],
        }
    },
    components: {
        pmBanner,
        pmDotCon,
        pmScene
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
