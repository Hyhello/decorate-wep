/**
 * 作者：yeshengqiang
 * 时间：2018-06-07
 * 描述：企业优势
 */
<style lang="scss" scoped>
    @import 'src/scss/vars';

    .super-part {
        position: relative;
        margin: 0 auto;
        width: 950px;
        height: 164px;
        background-position: center center;
        background-size: 100%;
        margin-bottom: 15px;
        background-repeat: no-repeat;
        &.part1 {
            background-image: url(../../assets/images/9172162_企业优势1_14e6fa3f-239b-48e9-85c8-3534853184cf_resize_picture.jpeg);
        }
        &.part2 {
            background-image: url(../../assets/images/9172192_企业优势2_7dd89817-4d5e-4b12-8bbd-1792acf55063_resize_picture.jpeg);
        }
        &.part3 {
            background-image: url(../../assets/images/9172193_企业优势3_c11489ef-c3a5-473d-9a18-e6635f93b12d_resize_picture.jpeg);
        }
        &.part4 {
            background-image: url(../../assets/images/9172194_企业优势4_a669727f-2393-4017-88ad-5e4dfb124aa3_resize_picture.jpeg);
        }
        .editableContent {
            position: absolute;
            width: 340px;
            height: 100px;
            bottom: 0;
            font-size: 12px;
            p {
                font-family: "微软雅黑, Microsoft YaHei";
                line-height: 1.6;
                font-size: 12px;
                margin-bottom: 5px;
            }
            &.left {
                left: 124px;
            }
            &.right {
                right: 5px;
            }
        }
    }
</style>
<template>
    <div class="container">
        <div class="super-part part1">
            <div class="editableContent left">
                <p>1)装修设计软件有：CAD;3DMAX;MAYA;PHOTOSHOP;SketchUp；</p>
                <p>2)声学设计软件有：EASE4.0；DIRAC; SIA SmaartLive;cara等主流声学软件。</p>
            </div>
            <div class="editableContent right">
                <p>工欲善其事必先利其器。采购国际大品牌</p>
                <p>1)精密工具：博士；史丹利；田岛；东成等，</p>
                <p>2)检测仪器：杭州爱华；台湾泰仕；安捷伦等具有CMA国家认证标志等高端声学检测仪器。</p>
            </div>
        </div>
        <div class="super-part part2">
            <div class="editableContent left">
                <p>1)公司研发和生产隔音材料</p>
                <p>2)代理西班牙进口品牌TACSOUND北京销售权</p>
                <p>3)合作材料均为大品牌甚至国际知名产品</p>
                <p>4)材料有环保及质量检测报告，公司二次检测确保安全</p>
            </div>
            <div class="editableContent right">
                <p>1)行业内率先推出的《声装质量保障体系》</p>
                <p>2)合理工期计划；128处细节验收，质检驻扎工地</p>
                <p>3)工人师傅稳定、施工经验丰富，确保质量</p>
                <p>4)施工人员与设计师、材料员团队配合默契，工程顺利进展。</p>
            </div>
        </div>
        <div class="super-part part3">
            <div class="editableContent left">
                <p>1)制定合理的价格标准</p>
                <p>2)报价规范，材料及工艺做法明细、明了</p>
                <p>3)价格比同行低5-10个百分点</p>
                <p>4)材料有环保及质量检测报告，公司二次检测确保安全</p>
            </div>
            <div class="editableContent right">
                <p>1)十年声学设计及施工经验</p>
                <p>2)超过500个声学装修案例经验</p>
                <p>3)每次工程竣工后总结，避免不足，技术改良，使用到下个工程中去</p>
            </div>
        </div>
        <div class="super-part part4">
            <div class="editableContent left">
                <p>1)最快只要一周即可完成一个声学装修工程</p>
                <p>2)在保障质量的情况小，较同行工期可以缩短20%</p>
            </div>
            <div class="editableContent right">
                <p>1)奉行“客户是上帝、是衣食父母”的原则</p>
                <p>2)交钥匙工程，从开工到竣工，业主无需操心</p>
                <p>3)配套商服务，客户需要采购的设备，我公司可以代购和推荐，价格低于市场价</p>
            </div>
        </div>
    </div>
</template>
<script>
    import list from '@/mixins/list';
    import { getCustomerCase } from '@/api/customerCase';

    export default {
        mixins: [ list ],
        methods: {
            async _getList () {
                const result = await getCustomerCase();
                this.loading = false;
                this.list = result.data;
            }
        }
    };
</script>
