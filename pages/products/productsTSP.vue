<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、终端安全防护bannar -->
        <products-pmBanner :pmBanner="pmBanner"></products-pmBanner>

        <!-- 2、产品优势-->
        <products-pmDotCon :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01"></products-pmDotCon>

        <!-- 3、应用场景  -->
        <products-pmDotCon :pmDotConClass="pmDotConClass" :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon">
        </products-pmDotCon>

        <!-- 4、产品功能  -->
        <products-pmImgCon :pmImgConTil="pmImgConTil" :pmImgCon="pmImgCon"></products-pmImgCon>

        <!-- 5、服务支持-->
        <products-pmService></products-pmService>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pmDotCon from '../../components/products/pm-dotCon.vue';
import pmImgCon from '../../components/products/pm-imgCon.vue';
import pmBanner from '../../components/products/pmBanner.vue';
export default {
    name: "products-TSP",
    data() {
        return {
            // 终端安全防护-banner
            pmBanner: {
                title: "终端安全防护",
                desc: "可对终端侧的安全威胁事前预防、事中防护及事后检测和响应，并联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",
                img: "/images/products/productsTSP/b1.jpg",
            },
            // 产品功能
            pmImgConTil: "产品功能",
            pmImgCon: [
                {
                    title: "恶性病毒处置修复",
                    desc: "基于AI与大数据分析技术，能够快速对恶性病毒变种进行检测，实现病毒快速、无损修复，原文件可继续使用",
                    img: "/images/products/productsTSP/5.png",
                },
                {
                    title: "勒索病毒专项防护",
                    desc: "提供实现预防、防御、检测与响应的4-6-6三层立体防护，为终端提供全面、实时、快速、有效的安全防护能力，让勒索病毒无所遁形，保护组织终端业务安全",
                    img: "/images/products/productsTSP/6.png",
                },
                {
                    title: "网端联动",
                    desc: "通过网络及终端的深度协同联动，能够实现在网络端发现威胁、定位主机后，可直接在控制台下发对终端的处置命令，实现高协同、更有效、全面的危险防御",
                    img: "/images/products/productsTSP/7.png",
                },
            ],
            // 应用场景
            pmDotConTil: "应用场景",//标题
            pmDotConClass: "ecs-dotcon",
            pmDotCon: [
                {
                    title: "企业终端遭勒索病毒攻击并感染，文件被加密，核心资产受威胁",
                    desc: "通过4 层勒索入侵防御、6级勒索反加密防护和6项勒索检测与响应，可提前识别和封锁攻击入口，对攻击手段进行对抗，并快速定位、处置与阻断勒索病毒，减少对用户的业务影响",
                    img: "/images/products/productsTSP/s1.jpg",
                    imgCss: "pic-l",
                },
                {
                    title: "企业员工下载携带未知威胁的文件，终端安全防护软件无法识别，安全事件频发",
                    desc: "通过网络及终端的深度协同联动，终端未知的新型威胁可通过流量侧如上网行为分析、上网流量检测等提前发现异常并及时分析与处置，实现更全面的安全威胁防护",
                    img: "/images/products/productsTSP/s2.jpeg",
                    imgCss: "pic-r",
                },
            ],
            // 产品优势
            pmDotConTil01: "产品优势",//标题
            pmDotCon01: [
                {
                    title: "轻资产",
                    desc: "无需在本地服务器上安装控制台，云端按需订阅终端安全服务即可，即开即用，大大降低设备投入成本。",
                    img: "/images/products/productsTSP/01.svg",
                },
                {
                    title: "全网终端统一管理",
                    desc: "除在网终端外，离网终端（出差、移动办公）也可进行统一管控；云端管理平台实时更新全网（在网和离网）终端病毒库。",
                    img: "/images/products/productsTSP/02.svg",
                },
                {
                    title: "桌面管控运维简单",
                    desc: "拥有广告弹窗、远程桌面、USB管控、违规外联等桌管功能，日常运维管理简单高效。。",
                    img: "/images/products/productsTSP/03.svg",
                },
                {
                    title: "实时响应",
                    desc: "云端专家7*24小时在线服务，及时响应和处理您的问题。全网安全风险情报实时同步，支持微信公众号主动告警和一键处置风险。",
                    img: "/images/products/productsTSP/04.svg",
                },
            ],
        }
    },
    components: {
        pmBanner,
        pmDotCon,
        pmImgCon
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-imgCon {
    background-color: #fff;

    .m-tabs .m-item {
        height: 310px;
    }
}

.ecs-dotcon {
    .m-tabs {
        .m-item {
            height: 242px;

            .u-pic {
                height: 242px;
            }
        }
    }
}
</style>
