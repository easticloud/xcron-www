<template>
    <div class="m-p-service">
        <div class="wp">
            <p><span><img src="../../assets/img/img.jpeg" alt="" /></span>7*24小时服务</p>
            <p><span><img src="../../assets/img/img.jpeg" alt="" /></span>免费备案</p>
            <p><span><img src="../../assets/img/img.jpeg" alt="" /></span>无忧退订</p>
            <p><span><img src="../../assets/img/img.jpeg" alt="" /></span>全周期专业服务</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {

    },
};
</script>

<style scope lang="less">
@import "../../assets/css/products/pmBanner.less";

.m-p-service {
    .size(100%, 150px);
    background: #848484;

    .wp {
        font-weight: 400;
        .fz(24px, 33px);
        color: #fff;
        .flex;
        gap: 95px;
        padding: 58px 0;
        height: 33px;
        align-items: center;
        justify-content: center;

        p {
            .pl(55px);
            .pr;
            .flex;
            .db;

            span {
                .db;
                .pa;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                .size(40px);

                img {
                    .size(40px);
                    .dbi;
                }
            }
        }
    }
}
</style>
