<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、bannar -->
        <products-pmBanner :pmBanner="pmBanner"></products-pmBanner>

        <!-- 2、产品优势  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon" :pmDotConClass="pmDotConClass"></products-pmDotCon>

        <!-- 3、产品功能  -->
        <products-pmImgCon :pmImgConTil="pmImgConTil" :pmImgCon="pmImgCon"></products-pmImgCon>

        <!-- 4、场景使用  -->
        <products-pmSceneUse></products-pmSceneUse>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pmBanner from '../../components/products/pmBanner.vue';
import pmDotCon from '../../components/products/pm-dotCon.vue';
import pmImgCon from '../../components/products/pm-imgCon.vue';
export default {
    name: "products-AIS",
    data(){
        return{
            pmBanner:{
                title: "AI在线服务",
                desc: "AI 在线服务是面向AI在线inference服务的大规模分布式计算平台：提供海量计算节点，自动负载均衡，动态扩缩容；基于UCloud云生态构建，提供高可用性、高安全性和高功能性保障；按需收费，灵活便捷；适用于图像识别、自然语言处理等多个AI领域。",
            },
            // AI在线服务
            pmDotConTil:"产品优势",//标题
            pmDotConClass:"m-p-oSer",//复写样式
            pmDotCon: [
                {
                    title: "面向AI开发",
                    desc: "支持多种主流AI框架（Tensorflow，Keras, MXNet, Caffe），快速AI算法在线服务化。",
                    img: "",
                },
                {
                    title: "海量计算资源",
                    desc: "十万核级别计算资源池，充分保障计算资源需求。",
                    img: "",
                },
                {
                    title: "按需使用、按量付费",
                    desc: "按照实际计算资源消耗收费，无需担心资源闲置浪费。",
                    img: "",
                },
                {
                    title: "弹性伸缩，快速扩容",
                    desc: "随着业务的高峰和低峰，系统自动调整计算资源配比，自动对计算集群进行横向扩展和回缩。",
                    img: "",
                },
                {
                    title: "服务高可用",
                    desc: "计算节点集群化，提供可用区级别的容灾保障，无需担心单点错误。",
                    img: "",
                },
                {
                    title: "用户隔离，安全可靠",
                    desc: "多用户存储、网络、计算资源隔离，安全可靠。",
                    img: "",
                },
                {
                    title: "简单易用",
                    desc: "操作简单上手，并支持可视化业务管理和监控。",
                    img: "",
                },
            ],
            pmImgConTil:"产品功能",
            pmImgCon: [
                {
                    title: "自动化部署工具",
                    desc: "提供自动化部署工具，一键从本地部署到UAI-Inference集群。",
                    img: "/images/index/scene/01.svg",
                },
                {
                    title: "服务管理",
                    desc: "支持在线新增、更新、删除、启动、停止、恢复AI服务。",
                    img: "/images/index/scene/01.svg",
                },
                {
                    title: "版本管理",
                    desc: "支持同一服务多版本部署，灰度切换，流量控制，版本回滚。",
                    img: "/images/index/scene/01.svg",
                },
                {
                    title: "日志查询",
                    desc: "支持在线查询服务版本发布情况，服务运行情况。",
                    img: "/images/index/scene/01.svg",
                },
                {
                    title: "监控报警",
                    desc: "支持对服务运行异常状态及时报警。",
                    img: "/images/index/scene/01.svg",
                }
            ],
        }
    },
    components:{
        pmBanner,
        pmDotCon,
        pmImgCon
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

</style>
