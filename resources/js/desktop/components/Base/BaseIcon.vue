<template>
    <svg xmlns="http://www.w3.org/2000/svg" v-if="$slots.default"
         :width="width"
         :height="height"
         viewBox="0 0 18 18"
         :aria-labelledby="name"
         role="presentation"
    >
        <title>{{name}} icon</title>
        <slot/>
    </svg>
    <component v-else-if="icon" v-bind:is="icon" v-bind="attributes"></component>
</template>
<script>
    export default {
        name: "BaseIcon",
        props: {
            name: String,
            size: {
                type: [String, Number],
                default: '1em'
            },
            width: {
                type: [String, Number],
                default: function () {
                    let tmp_size = this.size;
                    if (!this.size) {
                        tmp_size = '1em';
                    }
                    return tmp_size;
                }
            },
            height: {
                type: [String, Number],
                default: function () {
                    let tmp_size = this.size;
                    if (!this.size) {
                        tmp_size = '1em';
                    }
                    return tmp_size;
                }
            },
            color: {
                type: String,
                default: 'white'
            },
            fill: {
                type: [String,Boolean],
                default: true
            },
            stroke: {
                type: [String,Boolean],
                default: false
            },
            path_name:{
                type:Boolean,
                default: false
            },
        },
        data: () => ({
            icon: null,
            extic: 'vue',
            // attributes: null
        }),
        async created() {
            if(this.path_name == true) {
                this.extic = 'svg';
                // let svg_tmp = await import('@public/'+this.name+'.'+this.extic);
                // console.log('svg_tmp', svg_tmp)
                this.icon = () => import('@public/'+this.name+'.'+this.extic);
                // this.icon = <template>${svg_tmp}</template>
            }
            else {
                this.extic = 'vue';
                this.icon = () => import('@icon/'+this.name+'.'+this.extic);
            }
        },
        watch: {
            name() {
                if(this.path_name == true) {
                    // this.extic = 'svg';
                    this.icon = () => import('@public/'+this.name+'.'+this.extic);
                }
                else {
                    this.extic = 'vue';
                    this.icon = () => import('@icon/'+this.name+'.'+this.extic);
                }
            }
        },
        computed: {
            // icon() {
            //     return () => import('../Icons/'+this.name+'.vue')
            // }
            attributes() {
                let attributes = this.$props ? this.$props : [];
                if(this.name=='blue-brush') {
                    console.log(attributes)
                }

                for (let propName in attributes) {
                    if (attributes[propName] === null || attributes[propName] === undefined || attributes[propName] === '') {
                        delete attributes[propName];
                    }
                }
                attributes['aria-labelledby'] = this.name;
                attributes.role = "presentation";
                if (typeof this.fill == 'boolean' && this.fill) {
                    if (!attributes.class) attributes.class = '';
                    attributes.class = 'tc-fill tc-fill-' + this.color;
                    delete attributes['fill'];
                }
                else {
                    attributes['fill'] = this.fill+' ';
                }
                // if (this.stroke) {
                //     attributes.class += 'tc-stroke tc-stroke-' + this.color;
                // }
                if (typeof this.stroke == 'boolean' && this.stroke) {
                    if (!attributes.class) attributes.class = '';
                    attributes.class += 'tc-stroke tc-stroke-' + this.color;
                    delete attributes['stroke'];
                }
                else {
                    attributes.stroke = this.stroke
                }
                // if(this.fill) {
                //     attributes.class +=' tc-fill'+this.color;
                // }
                delete attributes['path_name'];
                delete attributes['size'];
                return attributes
            }
        }
    }
</script>

