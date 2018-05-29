/**
 * 作者：yeshengqiang
 * 时间：2018-05-07
 * 描述：用户留言
 */
<style lang="scss" scoped>
    @import 'src/scss/vars';

    .message-panel {
        width: 40%;
    }
    .text-center {
        text-align: center;
    }
    .form-group {
        margin-bottom: 15px;
        label {
            display: inline-block;
            max-width: 100%;
            margin-bottom: 10px;
            font-weight: 700;
        }
        .form-control {
            box-sizing: border-box;
            display: block;
            width: 100%;
            height: 34px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            color: #555;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
            -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
            transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        }
        textarea.form-control {
            height: auto;
        }
        .btn {
            display: inline-block;
            padding: 6px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid #0000;
            border-radius: 4px;
            -webkit-appearance: button;
        }
        .btn-primary {
            background-color: $global_color;
            color: $white;
        }
        button, input, select, textarea {
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
        }
    }
</style>
<template>
    <div class="container">
        <div class="message-panel">
            <div class="form-group">
                <label for="exampleInputEmail1">您的姓名</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">您的电话</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">您的面积</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">备注</label>
                <textarea class="form-control" rows="3"></textarea>
            </div>
            <div class="form-group text-center">
                <button class="btn btn-primary">提交发表</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    };
</script>
