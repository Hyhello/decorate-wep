/**
 * 作者：yeshengqiang
 * 时间：2018-05-07
 * 描述：用户留言
 */
<style lang="scss" scoped>
    @import 'src/scss/vars';

    .message-panel {
        width: 50%;
        text-align: center;
    }
</style>
<template>
    <div class="container">
        <div class="message-panel">
            <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="您的姓名">
                <el-input v-model="form.name" placeholder="您的姓名 *"></el-input>
            </el-form-item>
            <el-form-item label="您的 E-MAIL">
                <el-input v-model="form.name" placeholder="您的 E-MAIL *"></el-input>
            </el-form-item>
            <el-form-item label="您的面积">
                <el-input v-model="form.name" placeholder="您的面积 *"></el-input>
            </el-form-item>
            <el-form-item label="您的需求">
                <el-input
                    type="textarea"
                    :rows="7"
                    placeholder="您的需求 *"
                    v-model="form.demand">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">发送需求</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                form: {}
            };
        }
    };
</script>
