/**
 *  作者：yeshengqiang
 *  时间：2017-06-04
 *  描述：混合类
 */

export default {
    data () {
        return {
            list: [],                                           // 列表展示
            loading: true,                                     // loading 动画
            loadingText: this.$store.state.loadingText,         // loading 文字
            searchData: {                                       // 搜索条件
                pageNo: this.$store.state.pageNo,               // 当前页码
                pageSize: this.$store.state.pageSize            // 分页大小
            },
            multipleSelection: [],                              // 多选
            totalElement: this.$store.state.totalElement        // 总数量
        };
    },
    computed: {
        // 分页是否展示
        pageShow () {
            return !!this.list.length;
        }
    },
    created () {
        this.currentChange(1);
    },
    methods: {
        currentChange (val) {
            this.loading = false;
            this.searchData.pageNo = val;
            // 获取列表
            this._getList();
        }
    }
};
