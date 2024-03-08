<template>
    <div>
        <div class="quick-menu" ref="quickMenu" :style="quickMenuStyle" style="cursor: pointer;">
            <div v-for="(n,key) in menuCount" class="sub-menu" :style="getSubMenu(n-1)">
                <div class="tooltip-target w-100 h-100">
                <span class="tooltip fadein right flat-tooltip dark arrow-left">{{titles[n-1]}}</span>
                <a :style="subMenuStyle" @mouseover.stop="mouseEnterSubMenu" @mouseout.stop="mouseOutSubMenu"
                   data-bs-toggle="modal" :data-bs-target="menuUrlList[n-1]"
                >
                    <base-icon :name="iconClass[n-1]" ref="icon" height="100%"></base-icon>
                </a>
                </div>
            </div>
        </div>
        <div class="peng-menu desktop" :style="quickMenuStyle">
            <img src="/images/penguin5.png" v-if="penguin" @click="toggleMenu"
                 style="height:250px; bottom:0; left:0; z-index:2;" class="peng"/>
            <img src="/images/penguin6.png" v-else @click="toggleMenu" style="height:180px; bottom:0; left:0;z-index:2;"
                 class="peng"/>
        </div>
        <div class="peng-menu mobile tablet" :style="quickMenuStyle">
            <img src="/images/penguin5.png" v-if="penguin" @click="toggleMenu"
                 style="height:180px; bottom:0; left:0;z-index:2;" class="peng"/>
            <img src="/images/penguin6.png" v-else @click="toggleMenu" style="height:130px; bottom:0; left:0;z-index:2;"
                 class="peng"/>
        </div>
    </div>
</template>
<script>
    export default{
        name: "PenguinMenu",
        props:{
            menuCount:{
                type: Number,
                required: true,
                default:4
            },
            iconClass:{
                type:Array,
                required: true
            },
            titles:{
                type:Array,
                required: true
            },
            menuUrlList:{
                type:Array,
                // required: true
            },
            backgroundColor:{
                type:String,
                default:'#20babb'
            },
            color:{
                type:String,
                default:'#fff'
            },
            isOpenNewTab:{
                type:Boolean,
                default:false
            },
            position:{
                type:String,
                default:'top-left'
            }
        },
        mounted() {
            // var Tawk_API=Tawk_API||{}
            // var Tawk_LoadStart=new Date();
            // var s1=document.createElement("script");
            // var s0=document.getElementsByTagName("script")[0];
            // s1.async=true;
            // s1.src='https://embed.tawk.to/6011a65ac31c9117cb73211e/1et2f3ktl';
            // s1.charset='UTF-8';
            // s1.setAttribute('crossorigin','*');
            // s0.parentNode.insertBefore(s1,s0);
            // document.head.appendChild(s1)
        },
        computed:{
            openNewTab(){
                return this.isOpenNewTab?'_blank':'_self'
            },
            quickMenuStyle(){
                const topPosition = {top:'20px'},
                    bottomPosition={bottom:'20px'},
                    leftPosition = {left:'20px'},
                    rightPosition = {right:'20px'};
                let style = this.isTop?topPosition:bottomPosition;
                Object.assign(style, this.isLeft?leftPosition:rightPosition);
                Object.assign(style,{transform: this.isLeft?"rotate(-180deg)":"rotate(180deg)"});
                return style
            },
            menuStyle(){
                return {
                    backgroundColor: this.backgroundColor,
                    color: this.color
                }
            },
            subMenuStyle(){
                return {
                    backgroundColor: this.backgroundColor,
                    color: this.color
                }
            },

            isTop(){
                return !!~this.position.toLowerCase().indexOf('top')
            },
            isLeft(){
                return !!~this.position.toLowerCase().indexOf('left')
            }
        },
        data(){
            return{
                penguin: true,
                menuSize:60,
                subMenu4:[[["0","-160"],["-80","-138.6"],["-138.6","-80"],["-160","0"]],[["0","-160"],["80", "-138.6"],["138.6","-80"],["160","0"]],[["0","160"],["138.6","80"],["80","138.6"],["160","0"]],[["-160","0"],["-138.6","80"],["-80","138.6"],["0","160"]]],
                subMenu3:[[["-160","0"],["-113","-121"],["0","-160"]],[["0","-160"],["113","-113"],["160","0"]],[["0","160"],["113","113"],["160","0"]],[["-160","0"],["-113","113"],["0","160"]]],
                subMenu2:[[["-160","0"],["0","-160"]],[["0","-160"],["160","0"]],[["0","160"],["160","0"]],[["-160","0"],["0","160"]]]
            }
        },
        methods:{
            getSubMenu(n){
                let menuPosition = this.menuCount===4?this.subMenu4:this.menuCount===3?this.subMenu3:this.subMenu2
                menuPosition = this.isTop&&this.isLeft?menuPosition[2]:this.isTop&&!this.isLeft?menuPosition[1]:!this.isTop&&this.isLeft?menuPosition[3]:menuPosition[0]
                return {top:menuPosition[n][0]+'px',left:menuPosition[n][1]+'px'}
            },
            toggleMenu(e){
                let menuEl = this.$refs.quickMenu
                // let menuIconEl = this.$refs.icon
                if(!~menuEl.className.indexOf(' active')){
                    menuEl.className += ' active';
                    this.penguin=false;
                    // menuIconEl.forEach( function(element, index) {
                    //     element.className += ' menu-animate';
                    // });
                } else {
                    menuEl.className = menuEl.className.replace(' active','')
                    this.penguin=true;
                    // menuIconEl.forEach( function(element, index) {
                    //     element.className = element.className.replace(' menu-animate','')
                    // });
                }

            },
            processCallback(key){
                console.log(key)
                this.$emit('process',key)
            },
            mouseEnterSubMenu(e){
                if(e.target.tagName==='A'){
                    e.target.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
                    // e.target.firstElementChild.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
                } else if(e.target.tagName==='I'){
                    e.target.parentElement.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
                    // e.target.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
                }

            },
            mouseOutSubMenu(e){
                if(e.target.tagName==='A'){
                    e.target.style.backgroundColor = this.backgroundColor
                    // e.target.firstElementChild.style.backgroundColor = this.backgroundColor
                }else if(e.target.tagName==='I'){
                    e.target.parentElement.style.backgroundColor = this.backgroundColor
                    // e.target.style.backgroundColor = this.backgroundColor
                }

            },
            lightenColor (hex, amt) {
                var usePound = false
                if (hex[0] === '#') {
                    hex = hex.slice(1)
                    usePound = true
                }
                var num = parseInt(hex, 16)
                var r = (num >> 16) + amt
                if (r > 255) r = 255
                else if (r < 0) r = 0
                var b = ((num >> 8) & 0x00FF) + amt
                if (b > 255) b = 255
                else if (b < 0) b = 0
                var g = (num & 0x0000FF) + amt
                if (g > 255) g = 255
                else if (g < 0) g = 0
                return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
            }
        }
    }
</script>
<style lang="less">
    .tooltip-target{
        position:relative;
    }
    .tooltip{
        pointer-events: none;
        opacity:0;
        position:absolute;
        text-align:justify;
        border:1px solid #ccc;
        background-color:white;
        z-index:999;
        text-transform: full-width;
        width:100px
    }
    .tooltip-target:hover .tooltip{
        display:inline-block;
        opacity:1;
    }
    .left{
        top:0;
        right:100%;
    }
    .right{
        top:0;
        left:100%;
    }
    .above{
        bottom:100%;
        left:0;
    }
    .fadein{
         -webkit-transition: opacity .8s ease;
         -moz-transition: opacity .8s ease;
         -ms-transition: opacity .8s ease;
         -o-transition: opacity .8s ease;
         transition: opacity .8s ease;
     }

    .tooltip.dark{
        background-color: rgba(9, 6, 58, 0.68);
        color:#fff;
        border:none;
    }

    .arrow-bottom:after, .arrow-bottom:before,
    .arrow-top:after, .arrow-top:before,
    .arrow-left:after, .arrow-left:before,
    .arrow-right:after, .arrow-right:before{
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }
    .arrow-bottom:after,
    .arrow-top:after,
    .arrow-left:after,
    .arrow-right:after{
        border-color: rgba(0, 0, 0, 0);
        border-width: 8px;
    }

    .arrow-bottom:before,
    .arrow-top:before,
    .arrow-left:before,
    .arrow-right:before{
        border-color: rgba(0, 0, 0, 0);
        border-width: 10px;
    }
    /*arrow right*/
    .arrow-right:after, .arrow-right:before {
        left: 100%;
        top: 50%;
    }
    .arrow-right:after {
        border-left-color: white;
        margin-top: -8px;
    }
    .arrow-right:before {
        border-left-color: #ccc;
        margin-top: -10px;
    }
    .dark.arrow-right:after {
        border-left-color: #444;
    }
    .dark.arrow-right:before {
        border-left-color: transparent;
    }
    /*arrow left*/
    .arrow-left:after, .arrow-left:before {
        right: 100%;
        top: 50%;
    }
    .arrow-left:after {
        border-right-color: white;
        margin-top: -8px;
    }
    .arrow-left:before {
        border-right-color: #ccc;
        margin-top: -10px;
    }
    .dark.arrow-left:after{
        border-right-color: #444;
    }
    .dark.arrow-left:before {
        border-right-color: transparent;
    }

    /*arrow bottom*/
    .arrow-bottom:after, .arrow-bottom:before {
        top: 100%;
        left: 50%;
    }
    .arrow-bottom:after {
        border-top-color: white;
        margin-left: -8px;
    }
    .arrow-bottom:before {
        border-top-color: #ccc;
        margin-left: -10px;
    }
    .dark.arrow-bottom:after {
        border-top-color: #444;
    }
    .dark.arrow-bottom:before {
        border-top-color: transparent;
    }
    /* Flat tooltip */
    .flat-tooltip{
        padding:5px;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
    .menu-animate {
        -webkit-animation: bounce 1s linear 1s;
        -moz-animation: bounce 1s linear 1s;
        animation: bounce 1s linear 1s;
    }
    .mobile.peng-menu {
        width: 100px;
        height: 130px;
    }
    .tablet.peng-menu {
        width: 100px;
        height: 130px;
    }
    @media screen and (max-width: 992px) {
        .quick-menu {
            width: 40px !important;
            height: 55px !important;
        }
    }

    .peng-menu {
        /*color: #fff;*/
        position: fixed;
        width: 100px;
        height: 190px;
        /*-webkit-transition: all 1s ease;*/
        /*-moz-transition: all 1s ease;*/
        /*transition: all 1s ease;*/
        right: 30px;
        transform: none !important;
        z-index: 3;
        cursor: pointer;
    }
    .peng {
        display: block;
        position: absolute;
        /*border-radius: 50% !important;*/
        /*width: 60px;*/
        /*height: 60px;*/
        text-align: center;
        /*box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23), 0 3px 10px rgba(0, 0, 0, 0.16);*/
        color: #fff;
        /*-webkit-transition: all 1s ease;*/
        /*-moz-transition: all 1s ease;*/

    }
    .quick-menu {
        color: #fff;
        position: fixed;
        width: 65px;
        height: 95px;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        transition: all 1s ease;
        right: 30px;
        z-index: 3;
        > .menu {
            display: block;
            position: absolute;
            border-radius: 50% !important;
            width: 60px;
            height: 60px;
            text-align: center;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23), 0 3px 10px rgba(0, 0, 0, 0.16);
            color: #fff;
            -webkit-transition: all 1s ease;
            -moz-transition: all 1s ease;
            transition: all 1s ease;
            .core-menu {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0px;
                top: 0px;
                width: 60px;
                height: 60px;
                /*-webkit-transform: rotate(180deg);*/
                /*-moz-transform: rotate(180deg);*/
                /*-ms-transform: rotate(180deg);*/
                /*-o-transform: rotate(180deg);*/
                /*transform: rotate(180deg);*/
                -webkit-transition: all 1s ease;
                -moz-transition: all 1s ease;
                transition: all 1s ease;
                .bar {
                    -webkit-transition: all 1s ease;
                    -moz-transition: all 1s ease;
                    transition: all 1s ease;
                    width: 28px;
                    height: 3px;
                    background: #fff;
                    position: absolute;
                    top: 35%;
                    margin-top: -1.5px;
                    left: 16px;
                    -webkit-transform-origin: 0% 50%;
                    -moz-transform-origin: 0% 50%;
                    -ms-transform-origin: 0% 50%;
                    -o-transform-origin: 0% 50%;
                    transform-origin: 0% 50%;
                    &:before ,&:after{
                        -webkit-transition: all 1s ease;
                        -moz-transition: all 1s ease;
                        transition: all 1s ease;
                        content: '';
                        width: 28px;
                        height: 3px;
                        background: #fff;
                        position: absolute;
                        left: 0px;
                        -webkit-transform-origin: 0% 50%;
                        -moz-transform-origin: 0% 50%;
                        -ms-transform-origin: 0% 50%;
                        -o-transform-origin: 0% 50%;
                        transform-origin: 0% 50%;
                    }
                    &:before{
                        margin-top: 30%;
                    }
                    &:after {
                        margin-top: 60%;
                    }
                }
            }
        }
        .sub-menu{
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            position: absolute;
            width: 60px;
            height: 60px;
            font-size: 30px;
            text-align: center;
            border-radius: 50% !important;
            a{
                outline: none;
                text-decoration: none;
                display: block;
                border-radius: 50% !important;
                width: 100%;
                height: 100%;
                padding: 5px;
                i {
                    outline: none;
                    font-size:30px;
                    margin-top:12px;
                    background:transparent;
                    &:before{
                        vertical-align: middle;
                    }
                }
                &:hover {
                    cursor: pointer;
                }
            }
        }
        &.active{
            -webkit-transform: rotate(0deg)!important;
            -moz-transform: rotate(0deg)!important;
            -ms-transform: rotate(0deg)!important;
            -o-transform: rotate(0deg)!important;
            transform: rotate(0deg)!important;
            .menu{
                -webkit-transform: scale(0.7);
                -moz-transform: scale(0.7);
                -ms-transform: scale(0.7);
                -o-transform: scale(0.7);
                transform: scale(0.7);
                .bar {
                    top: 50%;
                    margin-top: -1.5px;
                    left: 50%;
                    margin-left: -12px;
                    -webkit-transform-origin: 50% 50%;
                    -moz-transform-origin: 50% 50%;
                    -ms-transform-origin: 50% 50%;
                    -o-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
                    -webkit-transform: rotate(405deg);
                    -moz-transform: rotate(405deg);
                    -ms-transform: rotate(405deg);
                    -o-transform: rotate(405deg);
                    transform: rotate(405deg);
                    &:before {
                        -webkit-transform-origin: 50% 50%;
                        -moz-transform-origin: 50% 50%;
                        -ms-transform-origin: 50% 50%;
                        -o-transform-origin: 50% 50%;
                        transform-origin: 50% 50%;
                        -webkit-transform: rotate(-450deg);
                        -moz-transform: rotate(-450deg);
                        -ms-transform: rotate(-450deg);
                        -o-transform: rotate(-450deg);
                        transform: rotate(-450deg);
                        margin-top: 0px;
                    }
                    &:after{
                        opacity: 0;
                    }
                }
            }
        }
    }
    @-webkit-keyframes bounce {
        0%,100% {
            -webkit-transform: translateY(0px);
        }
        10% {
            -webkit-transform: translateY(6px);
        }
        30% {
            -webkit-transform: translateY(-4px);
        }
        70% {
            -webkit-transform: translateY(3px);
        }
        90% {
            -webkit-transform: translateY(-2px);
        }
    }
    @-moz-keyframes bounce {
        0%,100% {
            -moz-transform: translateY(0px);
        }
        10% {
            -moz-transform: translateY(6px);
        }
        30% {
            -moz-transform: translateY(-4px);
        }
        70% {
            -moz-transform: translateY(3px);
        }
        90% {
            -moz-transform: translateY(-2px);
        }
    }
    @keyframes bounce {
        0%,100% {
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -ms-transform: translateY(0px);
            -o-transform: translateY(0px);
            transform: translateY(0px);
        }
        10% {
            -webkit-transform: translateY(6px);
            -moz-transform: translateY(6px);
            -ms-transform: translateY(6px);
            -o-transform: translateY(6px);
            transform: translateY(6px);
        }
        30% {
            -webkit-transform: translateY(-4px);
            -moz-transform: translateY(-4px);
            -ms-transform: translateY(-4px);
            -o-transform: translateY(-4px);
            transform: translateY(-4px);
        }
        70% {
            -webkit-transform: translateY(3px);
            -moz-transform: translateY(3px);
            -ms-transform: translateY(3px);
            -o-transform: translateY(3px);
            transform: translateY(3px);
        }
        90% {
            -webkit-transform: translateY(-2px);
            -moz-transform: translateY(-2px);
            -ms-transform: translateY(-2px);
            -o-transform: translateY(-2px);
            transform: translateY(-2px);
        }
    }
</style>
