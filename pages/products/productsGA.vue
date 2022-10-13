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

        <!-- 4、服务支持-->
        <products-pmService></products-pmService>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pmDotCon from '../../components/products/pm-dotCon.vue';
import pmBanner from '../../components/products/pmBanner.vue';
import pmScene from '../../components/products/pmScene.vue';
export default {
    name: "products-GA",
    data() {
        return {
            // 全球加速-banner
            pmBanner: {
                title: "全球加速",
                desc: "全球加速（Global accelerator），简称GA，为全球化业务用户提供应用加速服务，通过提供统一的公网IP和高可靠、低延时、易管理、安全合规的网络服务，使终端用户在全球能快速访问云上应用，获得优质体验。",
                img: "/images/products/productsGA/b1.jpg",
            },
            // 产品优势
            pmDotConTil: "产品优势",//标题
            pmDotCon: [
                {
                    title: "高合规",
                    desc: "提供全球一站式合规的网络能力，支持用户专注自身业务创新。",
                    img: "/images/products/productsGA/01.png",
                },
                {
                    title: "高可靠",
                    desc: "骨干网接入多家运营商、多出口，避免公网单地域、单线路故障，提高网络稳定性。",
                    img: "/images/products/productsGA/02.png",
                },
                {
                    title: "低时延",
                    desc: "客户端通过Anycast IP就近接入全球加速点，依托骨干网传输，避开公网拥堵，极大降低时延。",
                    img: "/images/products/productsGA/03.png",
                },
                {
                    title: "灵活部署",
                    desc: "根据应用要求，资源可以分地区负载分担/主备部署，客户可以灵活调整分发策略。",
                    img: "/images/products/productsGA/04.png",
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
                            src: "/images/index/solution/01.svg",
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
                            src: "/images/index/solution/01.svg",
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
