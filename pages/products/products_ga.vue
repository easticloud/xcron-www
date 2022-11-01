<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="ga"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="ga"></products-graphic-matrix>

        <!-- 3、应用场景  -->
        <products-pmScene :pmScene="pmScene"></products-pmScene>
    </div>
</template>

<script>
export default {
    name: "products-GA",
    layout: 'products',
    data() {
        return {
            // 产品优势
            pmDotConTil: "产品优势",//标题
            pmDotCon: [
                {
                    title: "高合规",
                    desc: "提供全球一站式合规的网络能力，支持用户专注自身业务创新。",
                    img: "/images/products/products_ga/01.svg",
                },
                {
                    title: "高可靠",
                    desc: "骨干网接入多家运营商、多出口，避免公网单地域、单线路故障，提高网络稳定性。",
                    img: "/images/products/products_ga/02.svg",
                },
                {
                    title: "低时延",
                    desc: "客户端通过Anycast IP就近接入全球加速点，依托骨干网传输，避开公网拥堵，极大降低时延。",
                    img: "/images/products/products_ga/03.svg",
                },
                {
                    title: "灵活部署",
                    desc: "根据应用要求，资源可以分地区负载分担/主备部署，客户可以灵活调整分发策略。",
                    img: "/images/products/products_ga/04.svg",
                },
            ],
            // 应用场景
            pmScene: {
                index: 0,
                til: "应用场景",
                isShow: false,
                sceneClass: "m-Bms-scene",
                list: [
                    {
                        label: "游戏加速",
                        children: {
                            title: "游戏加速",
                            titletag: "游戏服务器集中部署覆盖周边国家，各地玩家就近接入，全球加速服务提供低时延，SLA稳定的网络转发服务，满足SLG、益智和棋牌等游戏对anycast IP和低时延的要求。",
                            src: "/images/products/products_ga/s1.png",
                            tag: [
                                {
                                    tagTil: "· 低时延",
                                    tagCon: "游戏终端用户就近接入网络，以SLA最优路径和游戏服务器实时交互",
                                },
                                {
                                    tagTil: "· 配置简单",
                                    tagCon: "海外使用同一IP访问游戏服务器，一键式部署，管理简化",
                                },
                                {
                                    tagTil: "· 全球合规",
                                    tagCon: "云服务的合规跨境特性，帮助游戏客户大幅缩短跨境游戏加速业务部署周期，同时高效满足法律遵循要求",
                                },
                            ],
                        },
                    },
                    {
                        label: "跨国办公",
                        children: {
                            title: "跨国办公",
                            titletag: "企业应用总部部署，全球分支机构访问。通过全球加速服务，企业分支可以就近高效访问企业应用前端。",
                            src: "/images/products/products_ga/s2.png",
                            tag: [
                                {
                                    tagTil: "· 低时延",
                                    tagCon: "企业分支或者出差员工终端就近接入网络，以SLA最优路径实时访问企业应用",
                                },
                                {
                                    tagTil: "· 部署简单",
                                    tagCon: "海外分支访问总部一键式部署，管理简化",
                                },
                                {
                                    tagTil: "· 全球合规",
                                    tagCon: "云服务的合规跨境特性，帮助跨国企业大幅缩短企业分支和总部之间互访的应用部署周期，同时高效满足法律遵循要求",
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
