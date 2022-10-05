<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、bannar -->
        <products-pmBanner :pmBanner="pmBanner"></products-pmBanner>

        <!-- 2、了解弹性云服务器  -->
        <products-pAboutBCS :pAboutBCS="pAboutBCS" :pAboutBCSTil="pAboutBCSTil" :pAboutBCSClass="pAboutBCSClass">
        </products-pAboutBCS>

        <!-- 3、产品优势  -->
        <products-pmDotCon :pmDotConClass="pmDotConClass" :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon">
        </products-pmDotCon>

        <!-- 4、擎天架构加持，助力弹性云服务器更快、更稳 -->
        <products-pmPInfo :pmPInfoTil="pmPInfoTil" :pmPInfoImg="pmPInfoImg"></products-pmPInfo>

        <!-- 5、权威认可  -->
        <products-pmDotCon :pmDotConClass="pmDotConClass01" :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01">
        </products-pmDotCon>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pmDotCon from '../../components/products/pm-dotCon.vue';
import pmBanner from '../../components/products/pmBanner.vue';
import pmPInfo from '../../components/products/pmPInfo.vue';
import pAboutBCS from '../../components/products/pAboutBCS.vue';
export default {
    name: "products-ECS",
    data() {
        return {
            // 弹性云服务器-banner
            pmBanner: {
                title: "弹性云服务器",
                desc: "弹性云服务器（Elastic Cloud Server, ECS）是一种云上可随时自助获取、可弹性伸缩的计算服务，可帮助您打造安全、可靠、灵活、高效的应用环境。",
            },
            // 了解弹性云服务器
            pAboutBCSTil: "了解弹性云服务器",
            pAboutBCSClass: "m-p-ECS",
            pAboutBCS: [
                {
                    til: "30+年",
                    desc: "注入自身在ICT基础设施领域30多年的技术、能力、经验积累",
                },
                {
                    til: "多样性算力",
                    desc: "支持X86、鲲鹏、昇腾、异构四大类型算力，提供更优算力选择",
                },
                {
                    til: "200+",
                    desc: "支持200+企业应用场景，满足各类业务的上云需求",
                },
                {
                    til: "80+",
                    desc: "80+全球安全合规认证，打造中立、安全、可信的云服务",
                },
            ],
            // 产品优势
            pmDotConTil: "产品优势",//标题
            pmDotConClass: "ecs-dotcon",
            pmDotCon: [
                {
                    title: "弹性灵活，助您低成本轻松上云",
                    desc: "-用户可通过Web页面或开放API，同时管理一个、数百个、甚至数千个弹性云服务器实例 \n-用户可根据业务需求自行定义弹性伸缩策略，通过可视化控制台配置定时或周期性的监控策略，动态调整弹性云服务器实例，满足业务需求的同时，减少资源投入 \n-提供按需、包周期、竞价等多种计费模式，满足各类业务使用需求",
                    img: "/images/products/productsECS/01.jpeg",
                },
                {
                    title: "性能强劲，为企业提供旗舰级产品",
                    desc: "-最大提供208vCPU，4096G内存，引领业界顶级算力 \n-业界首推千万级PPS转发实例，单实例最大内网带宽可达44Gbps \n-千台弹性云服务器分钟级极速发放",
                    img: "/images/products/productsECS/02.jpeg",
                },
                {
                    title: "多规格类型，满足不同企业的个性化需求",
                    desc: "-提供X86、鲲鹏、昇腾、异构等多种类型的弹性云服务器 \n-提供公共、私有、共享三种镜像，还可以使用镜像市场提供的包含各类软件的优质第三方镜像 \n-所有弹性云服务器和镜像可一键部署，无需配置，满足用户建站、应用开发、可视化管理等个性化需求",
                    img: "/images/products/productsECS/03.jpeg",
                },
                {
                    title: "数据可靠，提供坚实的基础数据平台",
                    desc: "-数据持久性高达99.9999999%，保证数据安全可靠，保护您的业务免受故障影响 \n-提供极速型SSD、超高IO、通用型SSD、高IO等多种性能规格的云硬盘，可根据业务需要灵活选择不同规格 \n-支持共享云硬盘、云硬盘加密、云硬盘备份、云服务器备份、快照等功能，可满足不同业务场景的需求",
                    img: "/images/products/productsECS/04.jpeg",
                },
                {
                    title: "多重防护，专业保护您的数据安全",
                    desc: "-帮助用户快速发现安全弱点和威胁，并给出最佳安全实践建议，有效减少或避免由于网络中病毒和恶意攻击带来的损失 \n-通过专业的防DDoS设备为客户互联网应用提供精细化的抵御DDoS攻击能力 \n-联合全球知名数字证书服务机构，为您提供的一站式安全套接层（SSL）证书和传输层安全（TLS）证书的全生命周期管理服务，实现网站的可信身份认证与安全数据传输",
                    img: "/images/products/productsECS/05.jpeg",
                },
            ],
            // 技术支撑
            pmPInfoTil: "擎天架构加持，助力弹性云服务器更快、更稳",//标题
            pmPInfoImg: "/images/products/productsECS/bg.png",
            // 权威认可
            pmDotConTil01: "权威认可",//标题
            pmDotConClass01: "bcsAuth",//复写样式
            pmDotCon01: [//内容数据
                {
                    title: "云计算服务能力标准符合性一级证书",
                    desc: "由中国电子工业标准化技术协会（ESA）信息技术服务分会颁发，标志着基础设施服务在规模、功能、性能、安全、人员和管理等维度全面满足工业和信息化部《云计算综合标准化体系建设指南》的最高要求。",
                    img: "/images/products/productsECS/01.png",
                },
                {
                    title: "OCP与USCP运筹优化算法赛道第一名",
                    desc: "在GECCO 2020国际会议中，擎天架构的调度算法团队同时获得OCP与USCP运筹优化算法赛道第一名，算法运行结果刷新了十个文献算例的已知最好结果。",
                    img: "/images/products/productsECS/02.png",
                },
                {
                    title: "51项国际榜单纪录",
                    desc: "擎天架构调度算法团队打破了51项由全球优化算法领域权威机构SINTEF维护的PDPTW榜单纪录，成为中国研究机构中最多纪录的保持者。",
                    img: "/images/products/productsECS/03.png",
                },
                {
                    title: "可信云技术最佳实践奖",
                    desc: "擎天架构，凭借业界领先的云基础设施技术底座，以及面向多场景的技术创新，得到可信云权威机构的高度认可，荣获2020-2021年度“可信云技术最佳实践奖”。",
                    img: "/images/products/productsECS/04.png",
                },
                {
                    title: "下一代云计算技术创新奖",
                    desc: "中国电子技术标准化研究院主办的“第九届中国云计算标准和应用大会”，鲲鹏云服务全系列计算实例（鲲鹏ECS/BMS），荣获主委会高度认可，并颁发荣誉证书。",
                    img: "/images/products/productsECS/05.png",
                },
                {
                    title: "年度领先游戏云服务器",
                    desc: "广东省游戏协会、深圳市文化市场等多家产业协会指导，游戏行业头部媒体游戏陀螺、陀螺电竞等联合主办的2019未来商业生态链接大会暨第四届金陀螺奖颁奖典礼上，通用计算增强型实例C6s被评选为2019年度领先游戏云服务器。",
                    img: "/images/products/productsECS/06.png",
                },
            ],
        }
    },
    components: {
        pmBanner,
        pmDotCon,
        pAboutBCS,
        pmPInfo
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
