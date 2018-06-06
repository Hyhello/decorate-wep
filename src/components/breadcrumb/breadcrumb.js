/**
 * 作者：yeshengqiang
 * 时间：2018-05-17
 * 描述：面包屑
 */
 import './breadcrumb.scss';
 export default {
    name: 'Breadcrumb',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        separator: {
            type: String,
            default: '/'
        }
    },
    mounted () {
        this.updateChildSeparator();
    },
    watch: {
        separator () {
            this.updateChildSeparator();
        }
    },
    methods: {
        findChild (name, cb) {
            const find = (child) => {
                const bool = child.$options.name === name;
                if (bool) {
                    cb(child);
                } else if (Array.isArray(child.$children)) {
                    child.$children.forEach(item => {
                        find(item);
                    });
                }
            };
            if (Array.isArray(this.$children)) {
                this.$children.forEach(child => {
                    find(child);
                });
            }
        },
        updateChildSeparator () {
            this.$nextTick(() => {
                this.findChild('BreadcrumbItem', (item) => {
                    item.separator = this.separator;
                });
            });
        }
    },
    render (h) {
        return h(this.tag, {
            'class': [
                'breadcrumb-panel'
            ],
            attrs: {
                'aria-label': 'breadcrumb',
                'rule': 'navigation'
            }
        }, [this.$slots.default]);
    }
 };
