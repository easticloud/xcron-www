<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、云专线bannar -->
        <products-pmBanner :pmBanner="pmBanner"></products-pmBanner>

        <!-- 2、了解云专线  -->
        <products-pAboutBCS :pAboutBCS="pAboutBCS" :pAboutBCSTil="pAboutBCSTil" :pAboutBCSClass="pAboutBCSClass">
        </products-pAboutBCS>

        <!-- 3、应用场景  -->
        <products-pmScene :pmScene="pmScene"></products-pmScene>

        <!-- 4、权威认可  -->
        <products-pmDotCon :pmDotConClass="pmDotConClass" :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon">
        </products-pmDotCon>

        <!-- 5、联系我们Contact  -->
        <products-contactUs></products-contactUs>

        <!-- 6、服务支持-->
        <products-pmService></products-pmService>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pAboutBCS from '../../components/products/pAboutBCS.vue';
import pmScene from '../../components/products/pmScene.vue';
import pmDotCon from '../../components/products/pm-dotCon.vue';
import pmBanner from '../../components/products/pmBanner.vue';
export default {
    name: "products-DC",
    data() {
        return {
            // 云专线-banner
            pmBanner: {
                title: "云专线",
                desc: "云专线（Direct Connect）用于搭建用户本地数据中心与VPC之间高速、低时延、稳定安全的专属连接通道，充分利用服务优势的同时，继续使用现有的IT设施，实现灵活一体，可伸缩的混合云计算环境。",
                img: "/images/products/productsDC/b1.jpg",
            },
            // 了解云专线
            pAboutBCSTil: "了解云专线",
            pAboutBCSClass: "m-p-ECS",
            pAboutBCS: [
                {
                    til: "用通道高安全",
                    desc: "用户使用云专线接入VPC，使用专享私密通道进行通信，网络隔离，安全性极高",
                },
                {
                    til: "多种接入线路",
                    desc: "云专线支持从用户IDC拉运营商MSTP/传输专线、裸光纤、MPLS VPN等类型的专线接入",
                },
                {
                    til: "混合云无缝扩展",
                    desc: "通过云专线将用户本地数据中心与云上资源互联，形成灵活可伸缩的混合云部署",
                },
                {
                    til: "超大带宽",
                    desc: "主力region专线单线路最大支持100Gbps带宽连接，满足各类用户带宽需求",
                },
            ],
            // 应用场景 
            pmScene: {
                products: 0,
                til: "应用场景",
                isShow: false,
                sceneClass: "m-Bms-productsDC",
                list: [
                    {
                        label: "混合云部署",
                        children: {
                            title: "混合云部署",
                            titletag: "通过云专线将云下用户数据中心和云上VPC互联，利用云上的弹性，快速扩展能力，扩展应用层的计算能力",
                            src: "/images/products/productsDC/01.png",
                            tag: [
                                {
                                    tagTil: "· 混合云架构",
                                    tagCon: "多地接入，拓扑灵活",
                                },
                                {
                                    tagTil: "· 安全可靠",
                                    tagCon: "专属网络通信，安全隔离，稳定可靠",
                                },
                                {
                                    tagTil: "· 高性能",
                                    tagCon: "主力region单线最大带宽支持100Gbps",
                                },
                            ],
                        },
                    },
                    {
                        label: "多云互联",
                        children: {
                            title: "多云互联",
                            titletag: "通过云专线将多云互联，业务部署在多云进行备份，提高业务的可靠性",
                            src: "/images/products/productsDC/02.png",
                            tag: [
                                {
                                    tagTil: "· 多云架构",
                                    tagCon: "多地接入，拓扑灵活，多云备份容灾",
                                },
                                {
                                    tagTil: "· 安全可靠",
                                    tagCon: "专属网络通信，安全隔离，稳定可靠",
                                },
                                {
                                    tagTil: "· 高性能",
                                    tagCon: "主力region单线最大带宽支持100Gbps",
                                },
                            ],
                        },
                    },
                ],
            },
            // 权威认可
            pmDotConTil: "权威认可",//标题
            pmDotConClass: "bcsAuth-1",//复写样式
            pmDotCon: [//内容数据
                {
                    title: "可信云·云平台网络能力",
                    desc: "云专线解决方案获得中国信息通信研究院可信云·云平台网络能力认证",
                    img: "/images/products/productsDC/1.png",
                },
                {
                    title: "网络安全等级保护",
                    desc: "网络安全等级保护是公安部用于指导国内各组织单位进行网络安全建设的依据",
                    img: "/images/products/productsDC/2.png",
                },
                {
                    title: "中国网络安全审查",
                    desc: "中国网络安全审查是中华人民共和国网信办保障网络安全和数据安全、维护国家安全的要求",
                    img: "/images/products/productsDC/3.png",
                }
            ],
        }
    },
    components: {
        pmBanner,
        pAboutBCS,
        pmScene,
        pmDotCon
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-p-aboutBCS {
    height: 403px;
}
</style>
