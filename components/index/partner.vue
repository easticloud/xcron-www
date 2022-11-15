<template>
    <div class="m-index-item">
        <div class="wp">
            <div class="m-title">
                <h2>全国5000+客户的信任与选择</h2>
                <a href="/partner" target="_blank" class="u-desc">查看全部合作伙伴 ></a>
            </div>
            <div class="m-content">
                <span class="m-item" :href="item.href" target="_blank" v-for="(item, i) in list" :key="i">
                    <img :src="item.src" :alt="item.label" />
                </span>
            </div>
        </div>
        <div class="m-contact">
            <span>联系我们，获取更多个性化定制方案</span>
            <a class="u-btn" href="/contact#contact" target="_blank">立即咨询</a>
        </div>
    </div>
</template>
<script>
import { partner } from "@/assets/data/index.json";
export default {
    data() {
        return {};
    },
    computed: {
        list() {
            return partner;
        },
    },
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
@media screen and (max-width: @phone) {
    .m-content {
        .mt(10px);
        .m-item {
            .size(33.3%, 80px);
            padding: 0 5px;
        }
    }
    .m-contact {
        .fz(20px, 70px);
        .size(100%, 160px);
        .mt(30px);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0px;

        .u-btn {
            .size(200px, 42px);
            .fz(16px, 42px);
        }
    }
}
</style>
