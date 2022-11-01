<template>
    <div class="m-p-show">
        <div class="m-picture">
            <div class="wp">
                <h2>产品展示</h2>
                <div class="m-picture-con">
                    <p><img class="u-img" src="../../static/images/products/products_ai/01.jpg" /></p>
                    <p><img class="u-img" src="../../static/images/products/products_ai/02.jpg" /></p>
                </div>
            </div>
        </div>

        <div class="m-parameter">
            <div class="wp">
                <h2>产品配置</h2>
                <div class="table-box">
                    <p class="table-til">智能AI边缘盒子</p>
                    <client-only>
                        <table border="1" class="m-p-table">
                            <tr v-for="(item, index) in data" :key="index">
                                <td>{{ item.label }}</td>
                                <td class="f-col">{{ item.value }}</td>
                            </tr>
                        </table>
                    </client-only>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { product_show } from "@/assets/data/product.json";
export default {
    data() {
        return {
            data: product_show
        };
    },
};
</script>

<style scope lang="less">
@import "../../assets/css/products/product-show.less";
</style>
