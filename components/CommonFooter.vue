<template>
    <div class="c-footer">
        <div class="wp">
            <div class="m-item">
                <span class="u-title">热门推荐</span>
                <a class="u-link" :href="item.href" target="_blank" v-for="(item, i) in hot" :key="i">
                    {{ item.label }}
                </a>
            </div>
            <div class="m-item">
                <span class="u-title">关于我们</span>
                <a class="u-link" :href="item.href" target="_blank" v-for="(item, i) in contact" :key="i">
                    {{ item.label }}
                </a>
            </div>
            <div class="m-item">
                <span class="u-title">权威认证</span>
                <div class="u-line" v-for="(item, i) in approved" :key="i">
                    <img class="u-img" :src="item.src" />
                    <div class="u-txt">
                        <span>{{ item.label }}</span>
                        <span v-if="item.desc">{{ item.desc }}</span>
                    </div>
                </div>
            </div>
            <div class="m-item">
                <span class="u-title">联系我们</span>
                <span>咨询热线：</span>
                <div class="u-phone">025-86702988</div>
                <span>邮箱：SDSF@025108.com </span>
                <span>商务合作：15335159292（胡经理）</span>
                <span>渠道合作：15335159298（王经理）</span>
            </div>
            <div class="m-item m-code">
                <img class="u-code" src="/images/index/footer/code.png" alt="实点实分" />
                <span>随时了解最新资讯</span>
                <span>关注实点实分公众号</span>
            </div>
        </div>
        <div class="m-copyright">
            <span class="u-txt">© 2022 江苏实点实分网络科技有限公司 丨 苏ICP备15031332号</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hot: [
                { label: "云服务器", href: "" },
                { label: "高性能计算", href: "" },
                { label: "容量引擎", href: "" },
                { label: "人脸识别", href: "" },
                { label: "实时音视频", href: "" },
            ],
            contact: [
                { label: "企业介绍", href: "" },
                { label: "品牌理念", href: "" },
                { label: "荣誉证书", href: "" },
                { label: "客户案例", href: "" },
                { label: "加入我们", href: "" },
            ],
            approved: [
                { label: "高新技术企业", src: "/images/index/footer/tech.png" },
                { label: "质量管理体系认证", desc: "ISO09001", src: "/images/index/footer/9001.png" },
                { label: "信息安全管理体系认证", desc: "ISO27001", src: "/images/index/footer/27001.png" },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
};
</script>

<style scope lang="less">
@import "~@/assets/css/footer.less";
</style>
