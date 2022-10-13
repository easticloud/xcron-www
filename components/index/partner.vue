<template>
    <div class="m-index-item">
        <div class="wp">
            <div class="m-title">
                <h2>全国5000+客户的信任与选择</h2>
                <a href="" target="_blank" class="u-desc">查看全部合作伙伴 ></a>
            </div>
            <div class="m-content">
                <a class="m-item" :href="item.href" target="_blank" v-for="(item, i) in list" :key="i">
                    <img :src="item.src" :alt="item.label" />
                </a>
            </div>
        </div>
        <div class="m-contact">
            <span>联系我们，获取更多个性化定制方案</span>
            <a class="u-btn" href="" target="_blank">立即咨询</a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { label: "三度集团", href: "", src: "/images/index/partner/01.png" },
                { label: "华为云", href: "", src: "/images/index/partner/02.png" },
                { label: "网宿科技", href: "", src: "/images/index/partner/03.png" },
                { label: "斗鱼", href: "", src: "/images/index/partner/04.png" },
                { label: "字节跳动", href: "", src: "/images/index/partner/05.png" },
                { label: "硅基智能", href: "", src: "/images/index/partner/06.png" },
                { label: "Aegis擎盾", href: "", src: "/images/index/partner/07.png" },
                { label: "Stacks network", href: "", src: "/images/index/partner/08.png" },
                { label: "易信科技", href: "", src: "/images/index/partner/09.png" },
                { label: "速丰通联", href: "", src: "/images/index/partner/10.png" },
                { label: "创世云数据", href: "", src: "/images/index/partner/11.png" },
                { label: "INIDC", href: "", src: "/images/index/partner/12.png" },
                { label: "Fiber Home", href: "", src: "/images/index/partner/13.png" },
                { label: "安恒信息", href: "", src: "/images/index/partner/14.png" },
                { label: "驰速信息", href: "", src: "/images/index/partner/15.png" },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
    computed: {},
    methods: {},
};
</script>

<style scope lang="less">
.m-index-item .m-title h2 {
    font-weight: 400;
}

.m-content {
    .flex;
    .mt(50px);
    flex-wrap: wrap;
    justify-content: space-between;

    .m-item {
        .size(20%, 120px);
        .flex;
        padding: 20px;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
    }
}

.m-contact {
    .fz(36px, 150px);
    .size(100%, 150px);
    .flex;
    .mt(75px);
    .color(#fff);
    gap: 30px;
    align-items: center;
    justify-content: center;
    background-color: #848484;

    span {
        font-weight: 400;
    }

    .u-btn {
        .size(200px, 65px);
        .r(5px);
        .fz(24px, 65px);
        .x;
        .color(#fff);
        background-color: #cf0010;
        font-weight: 500;

        &:hover {
            filter: brightness(110%);
        }
    }
}
</style>
