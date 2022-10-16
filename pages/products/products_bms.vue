<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、bannar -->
        <products-pmBanner :pmBanner="pmBanner"></products-pmBanner>

        <!-- 2、了解裸金属服务器  -->
        <products-pAboutBCS :pAboutBCS="pAboutBCS" :pAboutBCSTil="pAboutBCSTil" :pAboutBCSClass="pAboutBCSClass">
        </products-pAboutBCS>

        <!-- 3、产品优势  -->
        <products-pmDotCon :pmDotConClass="pmDotConClass" :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon">
        </products-pmDotCon>

        <!-- 4、擎天架构，为裸金属提供业界领先技术支撑 -->
        <products-pmPInfo :pmPInfoTil="pmPInfoTil" :pmPInfoImg="pmPInfoImg"></products-pmPInfo>

        <!-- 5、应用场景  -->
        <products-pmScene :pmScene="pmScene"></products-pmScene>

        <!-- 6、服务支持-->
        <products-pmService></products-pmService>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pmDotCon from '../../components/products/pm-dotCon.vue';
import pmBanner from '../../components/products/pmBanner.vue';
import pAboutBCS from '../../components/products/pAboutBCS.vue';
import pmPInfo from '../../components/products/pmPInfo.vue';
import pmScene from '../../components/products/pmScene.vue';
export default {
    name: "products-BMS",
    data() {
        return {
            // 裸金属服务器-banner
            pmBanner: {
                title: "裸金属服务器",
                desc: "裸金属服务器（Bare Metal Server）为您和您的企业提供专属的云上物理服务器，具备传统物理服务器高性能的同时，兼具云上高安全可靠、灵活快速发放等特点，助力企业在数据库、大数据、容器、高性能计算、AI等场景关键业务云上创新。",
                img: "/images/products/products_bms/b1.jpg",
            },
            // 裸金属服务器
            pAboutBCSTil: "了解裸金属服务器",
            pAboutBCSClass: "m-p-ECS",
            pAboutBCS: [
                {
                    til: "性能卓越",
                    desc: "零虚拟化开销，性能无损，支持高带宽、低时延云存储、云网络",
                },
                {
                    til: "高效部署",
                    desc: "支持分钟级资源快速发放，自助式资源生命周期管理和运维",
                },
                {
                    til: "安全可靠",
                    desc: "资源用户专属，支持VPC、安全组隔离、主机安全，云磁盘、硬盘备份恢复等",
                },
                {
                    til: "快速集成",
                    desc: "支持云服务和解决方案快速集成，加速业务云化上线效率",
                },
            ],
            // 产品优势
            pmDotConTil: "产品优势",//标题
            pmDotConClass: "ecs-dotcon",
            pmDotCon: [
                {
                    title: "用更优的成本，享更多的服务",
                    desc: "• 裸金属服务器 \n只需支付裸金属实例费用，无需购买和安装任何软硬件，简化运维操作，无缝对接各类公有云服务 \n• 传统物理服务器 \n服务器、系统、数据库等软硬件费用 + 机房托管费用 + 运维操作成本",
                    img: "/images/products/products_bms/01.jpeg",
                    imgCss: "pic-l",
                },
                {
                    title: "分钟级快速部署，自助式运维体验",
                    desc: "• 支持分钟级资源快速发放，按需申请，不受硬件资源约束，满足租户的资源弹性和快速部署需求  \n• 基于统一console控制台、开放API和SDK，支持自助式资源生命周期管理和运维",
                    img: "/images/products/products_bms/02.jpeg",
                    imgCss: "pic-r",
                },
                {
                    title: "云上安全防护，保障企业数据安全",
                    desc: "• 免费提供DDoS防护、木马查杀、防暴力破解等服务，可轻松实现多用户对多服务器的访问控制 \n• 裸金属服务器是用户专属的计算资源，支持VPC、安全组隔离、主机安全能力；满足企业数据安全和监管的安全和可靠性诉求",
                    img: "/images/products/products_bms/03.jpeg",
                    imgCss: "pic-l",
                },
                {
                    title: "云上高可靠存储，为企业数据保驾护航",
                    desc: "• 采用云磁盘作为数据持久化，支持服务器重建，整体可用性、可靠性高于传统服务器 \n• 支持在线对裸金属服务器进行云硬盘挂载、卸载，满足用户对弹性存储的诉求；同时业界独家支持共享卷，更好支持集群场景应用 \n• 支持云磁盘作为系统盘和数据盘、硬盘备份恢复能力",
                    img: "/images/products/products_bms/04.jpeg",
                    imgCss: "pic-r",
                },
                {
                    title: "云上升级换代，时刻保持技术领先",
                    desc: "• 云擎天架构加持，无虚拟化开销和性能损失，100%释放算力资源 \n• 深度定制化硬件，尽享云上硬件红利 \n• 业界独家支持共享云存储，更好满足集群应用需求 \n• 资源服务遍布全球，助力企业业务全球快速扩展",
                    img: "/images/products/products_bms/05.jpeg",
                    imgCss: "pic-l",
                },
            ],
            // 技术支撑
            pmPInfoTil: "擎天架构，为裸金属提供业界领先技术支撑",//标题
            pmPInfoImg: "/images/products/products_bms/bg.png",
            // 应用场景 
            pmScene: {
                products: 0,
                til: "应用场景",
                isShow: false,
                sceneClass: "m-Bms-scene",
                list: [
                    {
                        label: "核心数据库",
                        children: {
                            title: "企业核心数据库场景",
                            titletag: "满足核心数据库对性能和安全的要求，云BMS提供多种规格的服务器，支持自动化挂载共享云硬盘。",
                            src: "/images/products/products_bms/01.svg",
                            tag: [
                                {
                                    tagTil: "· 集群部署",
                                    tagCon: "多台主机同时绑定云硬盘，支持集群应用部署",
                                },
                                {
                                    tagTil: "· 大容量",
                                    tagCon: "可挂载多块云硬盘，单盘最大32TB, 弹性扩容，按需计费",
                                },
                                {
                                    tagTil: "· 高可靠",
                                    tagCon: "三副本备份，数据持久性达99.9999999%，保障数据安全可靠",
                                },
                            ],
                        },
                    },
                    {
                        label: "高性能计算",
                        children: {
                            title: "高性能计算场景",
                            titletag: "针对高计算，高吞吐的场景特点，BMS支持最新Intel CPU的计算实例，结合100G网络，带来低时延的性能体验",
                            src: "/images/products/products_bms/02.svg",
                            tag: [
                                {
                                    tagTil: "· 低时延",
                                    tagCon: "100G网络自动化、安全隔离，支持微秒级时延",
                                },
                                {
                                    tagTil: "· 高性能",
                                    tagCon: "支持Intel最新CPU，性能强劲",
                                },
                                {
                                    tagTil: "· 易扩展",
                                    tagCon: "支持开放API，便于生态集成",
                                },
                            ],
                        },
                    },
                    {
                        label: "大数据",
                        children: {
                            title: "大数据存储与分析场景",
                            titletag: "大数据存储、分析等典型业务。支持裸金属本地存储和结合OBS服务的存算分离方案",
                            src: "/images/products/products_bms/03.svg",
                            tag: [
                                {
                                    tagTil: "· 大数据专用实例",
                                    tagCon: "BMS本地存储型D系列实例、鲲鹏通用计算KS系列实例",
                                },
                                {
                                    tagTil: "· 高性价比",
                                    tagCon: "支持大数据存算分离方案，计算、存储资源独立扩展",
                                },
                                {
                                    tagTil: "· 易用性",
                                    tagCon: "支持分钟级快速发放，实现业务快速部署上线",
                                },
                            ],
                        },
                    },
                ],
            }

        }
    },
    components: {
        pmBanner,
        pmDotCon,
        pAboutBCS,
        pmPInfo,
        pmScene
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-p-aboutBCS {
    height: 427px;
}

.bcsAuth .m-tabs .m-item {
    height: 240px;
}
</style>
