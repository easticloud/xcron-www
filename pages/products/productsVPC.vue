<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、虚拟私有云bannar -->
        <products-pmBanner :pmBanner="pmBanner"></products-pmBanner>

        <!-- 2、了解虚拟私有云  -->
        <products-pAboutBCS :pAboutBCS="pAboutBCS" :pAboutBCSTil="pAboutBCSTil" :pAboutBCSClass="pAboutBCSClass">
        </products-pAboutBCS>

        <!-- 3、产品优势  -->
        <products-pmDotCon :pmDotConClass="pmDotConClass" :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon">
        </products-pmDotCon>

        <!-- 4、权威认可  -->
        <products-pmDotCon :pmDotConClass="pmDotConClass01" :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01">
        </products-pmDotCon>

        <!-- 5、应用场景  -->
        <products-pmScene :pmScene="pmScene"></products-pmScene>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pmDotCon from '../../components/products/pm-dotCon.vue';
import pmBanner from '../../components/products/pmBanner.vue';
import pAboutBCS from '../../components/products/pAboutBCS.vue';
import pmScene from '../../components/products/pmScene.vue'
export default {
    name: "products-VPC",
    data() {
        return {
            // 虚拟私有云-banner
            pmBanner: {
                title: "虚拟私有云",
                desc: "虚拟私有云（Virtual Private Cloud）是用户在云上申请的隔离的、私密的虚拟网络环境。用户可以基于VPC构建独立的云上网络空间，配合弹性公网IP、云连接、云专线等服务实现与Internet、云内私网、跨云私网互通，帮您打造可靠、稳定、高效的专属云上网络",
            },
            // 了解虚拟私有云
            pAboutBCSTil: "了解虚拟私有云",
            pAboutBCSClass: "m-p-ECS",
            pAboutBCS: [
                {
                    til: "灵活易用",
                    desc: "支持跨可用区部署ECS实例，自定义路由和对等连接，灵活地控制VPC内和VPC间的通信",
                },
                {
                    til: "100%隔离",
                    desc: "云上私有网络，租户之间100%隔离。基于主机侧和基于网络侧多重安全防护",
                },
                {
                    til: "高速带宽",
                    desc: "为客户提供全动态BGP和静态BGP等多种带宽服务，满足不同客户需要",
                },
                {
                    til: "轻松扩展",
                    desc: "提供多种服务与VPC配合，使得客户本地数据中心业务能够无缝扩展到云上",
                },
            ],
            // 产品优势
            pmDotConTil: "产品优势",//标题
            pmDotConClass: "ecs-dotcon",
            pmDotCon: [
                {
                    title: "灵活组网，按需对网络进行规划和管理",
                    desc: "提供自定义路由和对等连接，能帮助客户更灵活的控制VPC内和VPC间通信 \n-自定义路由表中包含VPC内自定义路由规则，可用于判断网络流量的导向目的地址 \n-对等连接是指两个VPC之间的网络连接。可以使用私有IP地址在两个VPC之间进行通信",
                    img: "/images/products/productsVPC/01.jpeg",
                },
                {
                    title: "安全可靠，租户间100%隔离",
                    desc: "利用VxLAN协议使得VPC之间能够完成100%隔离\n子网，IP地址段，DHCP等子服务，客户可以根据自己需要选择搭配，自由定义",
                    img: "/images/products/productsVPC/02.jpeg",
                },
                {
                    title: "多种高速带宽类型，满足不同企业的个性化需求",
                    desc: "华为云为客户提供全动态BGP和静态BGP等多种带宽服务，满足不同客户诉求\n-全动态BGP带宽服务\n使用BGP协议接入国内多个运营商，支持多达21+线路。可以根据设定的寻路协议实时自动故障切换，保证网络稳定，网络时延低\n-静态BGP带宽服务\n云数据中心同时接入运营商BGP线路和静态线路，高速带宽，高性价比",
                    img: "/images/products/productsVPC/03.jpeg",
                },
                {
                    title: "混合云架构，轻松构建混合云",
                    desc: "同时提供VPN和云专线服务，助力客户本地数据中心业务能够无缝扩展到云上",
                    img: "/images/products/productsVPC/04.jpeg",
                },
                {
                    title: "多重防护，基于主机侧和基于网络侧多重安全防护",
                    desc: "-安全组\n主机侧防护：通过对报文协议（TCP、UDP、ICMP）以及端口的过滤保证在数据中心下对虚拟机的访问进行严格的控制\n-ACL防火墙\n网络侧防护：VPC 的子网级别和VPC级别安全服务，支持黑白名单，可用来控制进出一个或多个子网的流量",
                    img: "/images/products/productsVPC/05.jpeg",
                },
            ],
            // 权威认可
            pmDotConTil01: "权威认可",//标题
            pmDotConClass01: "bcsAuth",//复写样式
            pmDotCon01: [//内容数据
                {
                    title: "云网能力技术最佳实践奖",
                    desc: "由中国信息通信研究院、中国标准化协会颁发的技术创新的系列奖项。KYON企业级云网络凭借极简敏捷的携网上云能力，以及数项技术创新，得到可信云权威评估机构的高度认可，斩获“2020可信云技术最佳实践奖”",
                    img: "/images/products/productsVPC/icon.png",
                },
                {
                    title: "IPv6支持度优秀奖",
                    desc: "作为首批通过工信部IPv6认证的云厂商之一，16项云服务获得工信部认证的云服务IPv6支持能力测评证书，标志着云服务在IPv6网络下的各项能力均已走在行业前列",
                    img: "/images/products/productsVPC/icon.png",
                },
            ],
            // 应用场景 
            pmScene: {
                products: 0,
                til: "应用场景",
                isShow: false,
                sceneClass: "m-Bms-productsVPC",
                list: [
                    {
                        label: "云端专属网络",
                        children: {
                            title: "云端专属网络",
                            titletag: "基于云构建的云上私有网络环境，用户通过弹性IP访问云上私有网络环境，配置部署业务",
                            src: "/images/products/productsVPC/01.svg",
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
                            src: "/images/products/productsVPC/02.svg",
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
                            src: "/images/products/productsVPC/03.svg",
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
    components: {
        pmBanner,
        pmDotCon,
        pAboutBCS,
        pmScene
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.bcsAuth {
    background-color: #fff;

    .m-tabs .m-item {
        height: 270px;
    }
}
</style>
