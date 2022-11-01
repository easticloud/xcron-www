<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="bcs"></products-banner>

        <!-- 2、了解区块链服务  -->
        <products-pAboutBCS :pAboutBCSTil="pAboutBCSTil" :pAboutBCS="pAboutBCS"></products-pAboutBCS>

        <!-- 3、产品与服务  -->
        <products-pmImgCon :pmImgConClass="pmImgConClass" :pmImgConTil="pmImgConTil" :pmImgCon="pmImgCon">
        </products-pmImgCon>

        <!-- 4、产品优势  -->
        <products-pmImgCon :pmImgConClass="pmImgConClass01" :pmImgConTil="pmImgConTil01" :pmImgCon="pmImgCon01">
        </products-pmImgCon>

        <!-- 5、权威认可  -->
        <products-pmDotCon :pmDotConClass="pmDotConClass" :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon">
        </products-pmDotCon>
    </div>
</template>

<script>
export default {
    name: "products-BCS",
    layout: "products",
    data() {
        return {
            // 区块链服务-banner
            pmBanner: {
                title: "区块链服务",
                desc: "区块链是构建信任的基石，是实现信用传递，价值传递的可信网络。区块链聚焦构建安全、可靠的区块链基础设施，让企业、政府快速、高效的搭建区块链网络及行业应用，实现资金流、物流、信息流的可信快速流动，高效可信协同，助力降低协作成本，提升效率。",
                img: "/images/products/products_bcs/b1.jpg",
            },
            // 了解区块链服务
            pAboutBCSTil: "了解区块链服务",
            pAboutBCS: [
                {
                    til: "100000+",
                    desc: "10万级TPS秒级共识",
                },
                {
                    til: "10000+",
                    desc: "支持10000+节点扩展",
                },
                {
                    til: "400+",
                    desc: "已落地400+应用场景",
                },
                {
                    til: "可信",
                    desc: "满足金融级可信和协同要求",
                },
            ],
            // 产品与服务
            pmImgConTil: "产品与服务",//标题
            pmImgConClass: "noimgCon",//复写样式
            pmImgCon: [//内容数据
                {
                    title: "区块链服务BCS(区块链引擎)",
                    desc: "自主研发的满足企业级和金融级的可信、协调要求的高性能、高安全的区块链技术服务平台。",
                    img: "",
                },
                {
                    title: "数字资产链 DAC",
                    desc: "自研的数字资产链平台，基于云区块链引擎，可实现数字资产的确权、可信保存、安全交易。",
                    img: "",
                },
                {
                    title: "区块链BCS \n(Hyperledger Fabric增强版)",
                    desc: "基于软硬协同、自主创新、安全可控技术，简单易用， 通过Kubernetes管理，数分钟内即可完成区块链网络的构建。",
                    img: "",
                },
                {
                    title: "可信跨链服务 TCS",
                    desc: "基于一系列可信区块链标准跨链协议，保证交易全栈可追溯可扩展等，实现同构和异构链之间的互联互通。",
                    img: "",
                },
                {
                    title: "可信分布式身份服务 TDIS",
                    desc: "为个人和企业用户提供统一的分布式身份标识，支持多场景细粒度的可验证凭证管理能力。",
                    img: "",
                },
                {
                    title: "可信数据交换与计算服务 TC3",
                    desc: "为链上应用提供可信数据资产交换和可信联合分析计算，做到数据“可用不可见，可见不可得”。",
                    img: "",
                }
            ],
            // 产品优势
            pmImgConTil01: "产品优势",//标题
            pmImgConClass01: "bcsBg",//复写样式
            pmImgCon01: [//内容数据
                {
                    title: "场景丰富",
                    desc: "提供安全计算、可信数据共享、分布式身份管理等服务，提升多方可信协作效率。",
                    img: "/images/products/products_bcs/01.svg",
                },
                {
                    title: "开放共赢",
                    desc: "专注于区块链底层技术和平台服务能力搭建，和各行业合作伙伴携手合作，共同推进区块链场景落地，帮助企业实现商业成功。",
                    img: "/images/products/products_bcs/02.svg",
                },
                {
                    title: "安全可靠",
                    desc: "提供自主研发的区块链平台，在共识算法、同态加密、零知识证明、高速网络连接、海量存储等方面具有自主知识产权的专利和技术积累。",
                    img: "/images/products/products_bcs/03.svg",
                },
                {
                    title: "高效灵活",
                    desc: "10万级TPS性能和10000+的联盟节点网络，混合云、边缘云等部署管理能力，充分满足差异化组网诉求等",
                    img: "/images/products/products_bcs/04.svg",
                },
                {
                    title: "简单易用",
                    desc: "帮助企业实现自动化配置、部署区块链应用，并提供区块链全生命周期管理，让您简单使用区块链系统，专注于上层应用的创新和开发",
                    img: "/images/products/products_bcs/05.svg",
                },
                {
                    title: "云链结合",
                    desc: "提供各种区块链需要的无限可扩展的资源和丰富多样的云计算产品、定制化的各行业解决方案，可以给企业带来更大的便利和价值",
                    img: "/images/products/products_bcs/06.svg",
                },
            ],
            // 权威认可
            pmDotConTil: "权威认可",//标题
            pmDotConClass: "bcsAuth",//复写样式
            pmDotCon: [//内容数据
                {
                    title: "通过可信区块链双项测评",
                    desc: "2021年12月通过中国通信院第六批可信区块链功能专项、性能专项两项测评，同事时性能评测局第一位，获得权威认可。",
                    img: "/images/products/products_bcs/01.png",
                },
                {
                    title: "可信云最佳实践奖",
                    desc: "凭借业界领先的区块链技术，作为第一个应用区块链技术解决政务数据共享难题的厂商，得到权威机构的高度认可。",
                    img: "/images/products/products_bcs/01.png",
                },
                {
                    title: "十佳区块链技术服务商",
                    desc: "在第二届全球供应链数字经济峰会上，荣获区块链应用分会委员会高度认可，并颁发荣誉证书。",
                    img: "/images/products/products_bcs/02.png",
                },
                {
                    title: "2021区块链技术领军企业",
                    desc: "中国西部数字经济博览会暨第二届中国西安区块链产业发展论坛中，荣获2021区块链技术应用领军企业荣誉。",
                    img: "/images/products/products_bcs/03.png",
                },
            ],
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
