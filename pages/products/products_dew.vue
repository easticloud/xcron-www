<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="dew"></products-banner>

        <!-- 2、了解数据加密服务  -->
        <products-frame-text text-key="dew"></products-frame-text>

        <!-- 3、功能描述  -->
        <products-graphic-matrix matrix-key="dew"></products-graphic-matrix>

        <!-- 4、应用场景  -->
        <products-tabs tab-key="dew" custom-class="m-Bms-scene"></products-tabs>
    </div>
</template>

<script>
export default {
    name: "products-DEW",
    layout: 'products',
    data() {
        return {
            // 应用场景
            pmScene: {
                index: 0,
                til: "应用场景",

                sceneClass: "m-Bms-scene",
                list: [
                    {
                        label: "密钥管理",
                        children: {
                            title: "密钥管理（KMS）",
                            titletag: "通过经过认证的第三方硬件安全模块（HSM），轻松创建和控制用于加密数据的密钥，与使用OBS、EVS、IMS等服务集成，以帮助您保护这些产品存储的数据",
                            src: "/images/products/products_dew/01.svg",
                            tag: [
                                {
                                    tagTil: "· 应用广泛",
                                    tagCon: "与OBS、EVS、IMS等服务集成，方便易用",
                                },
                                {
                                    tagTil: "· 功能丰富",
                                    tagCon: "可支持启用、禁用、删除等功能，具备丰富的全生命周期密钥管理功能",
                                },
                                {
                                    tagTil: "· 集成方便",
                                    tagCon: "租户可以通过API调用密钥加密应用",
                                },
                                {
                                    tagTil: "· 安全可靠",
                                    tagCon: "用户主密钥的在线冗余存储、根密钥多份物理离线备份以及定期备份保障密钥的持久性",
                                },
                            ],
                        },
                    },
                    {
                        label: "专属加密",
                        children: {
                            title: "专属加密（云加密机）",
                            titletag: "高合规性要求的加密场景，可以选择基于国家密码局认证或FIPS 140-2 第 3 级验证的硬件加密机，对租户业务进行专属加密，默认提供双机以提高可靠性",
                            src: "/images/products/products_dew/02.svg",
                            tag: [
                                {
                                    tagTil: "· 合规遵从",
                                    tagCon: "硬件加密机经过第三方机构认证",
                                },
                                {
                                    tagTil: "· 国密加密",
                                    tagCon: "支持SM1、SM2、SM3、SM4国产加密算法",
                                },
                                {
                                    tagTil: "· 性能保证",
                                    tagCon: "专属加密卡保证不同加密协议下并发高速运算",
                                },
                                {
                                    tagTil: "· 高兼容性",
                                    tagCon: "提供与实体密码设备相同的功能与接口，可完全兼容传统应用并方便其向云端迁移",
                                },
                            ],
                        },
                    },
                    {
                        label: "密钥对管理",
                        children: {
                            title: "密钥对管理（Key Pair）",
                            titletag: "登录时有高安全性要求的场景，用户通过管理控制台创建或者导入自己的密钥对后，在购买弹性云服务器时，可选择通过密钥对方式登录，并且该密钥对可重置和替换",
                            src: "/images/products/products_dew/03.svg",
                            tag: [
                                {
                                    tagTil: "· 安全性更高",
                                    tagCon: "密钥对默认使用SSH-2格式和RSA-2048加解密算法",
                                },
                                {
                                    tagTil: "· 私钥可托管",
                                    tagCon: "支持将本地私钥托管到云端加密存储，本地不用再保存方便使用，解决私钥本地管理的安全性问题",
                                },
                                {
                                    tagTil: "· 密钥可控制",
                                    tagCon: "租户可以把自己的密钥导入云使用",
                                },
                            ],
                        },
                    },
                    {
                        label: "凭据管理",
                        children: {
                            title: "凭据管理（CSMS）",
                            titletag: "用户或应用程序可以通过CSMS创建、检索、更新、删除凭据，轻松实现对敏感凭据的全生命周期和统一管理",
                            src: "/images/products/products_dew/04.svg",
                            tag: [
                                {
                                    tagTil: "· 凭据加密保护",
                                    tagCon: "凭据通过集成KMS进行加密存储",
                                },
                                {
                                    tagTil: "· 凭据安全检索",
                                    tagCon: "将应用程序代码中的硬编码凭据替换为对凭据的API调用，以便以编程方式动态检索和管理凭据",
                                },
                                {
                                    tagTil: "· 凭据双重轮换",
                                    tagCon: "凭据通过多版本管理，实现应用层凭据的安全轮换，同时配置加密密钥的自动轮换，来提高数据的安全性",
                                },
                                {
                                    tagTil: "· 凭据集中管控",
                                    tagCon: "与IAM集成，通过身份、权限管理确保只有授权用户可以检索或修改凭据，与CTS集成，审计对凭据的操作访问。有效防范对敏感信息的非法访问和泄漏",
                                },
                            ],
                        },
                    },
                ],
            },
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
