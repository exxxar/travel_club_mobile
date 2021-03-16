<template>
    <div class="row m-auto justify-content-center align-items-center loader" style="width:100%; height:100%;">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="500" viewBox="0 0 400 400">
            <g id="jjperezaguinaga">
                <g id="innerCircles">
                    <path id="circle5" d="M288.57,200.17c.43-34.35-21.3-67.55-52.86-81-31.26-14.17-70.43-7.83-95.48,15.7-25.67,22.85-35.48,61.31-24.13,93.7,10.64,32.64,41.77,57.23,76,59.85l-.12,1.42c-34.82-2.66-66.44-27.65-77.25-60.81-11.54-32.91-1.57-72,24.52-95.2,25.45-23.91,65.24-30.36,97-16,32.06,13.7,54.14,47.43,53.7,82.34Z" style="fill:#f15c27"/>
                    <path id="circle4" d="M284.94,200.17a85,85,0,1,0-20.59,55.4l1.54,1.32A86.9,86.9,0,1,1,287,200.17Z" style="fill:#ff9b54"/>
                    <path id="circle3" d="M282.09,200.17a82.08,82.08,0,1,0-24,58,82.15,82.15,0,0,0,24-58h2a84.11,84.11,0,1,1-24.63-59.47,84.14,84.14,0,0,1,24.63,59.47Z" style="fill:#ffa821"/>
                    <path id="circle1" d="M279.07,200.17c.51-32.56-21.54-63.75-52.26-74.4-30.48-11.41-67.29-1.4-87.71,24C118,174.5,115,212.6,131.92,240.37c16.17,28.27,50.92,44,82.83,37.48l.21,1.09c-32.36,6.61-67.61-9.33-84-38-17.16-28.16-14.13-66.79,7.28-91.89,20.71-25.74,58-35.89,88.94-24.32,31.16,10.81,53.51,42.43,53,75.45Z" style="fill:#ff8400"/>
                    <path id="circle2" d="M276.89,200.17a76.89,76.89,0,1,0-22.52,54.37,76.91,76.91,0,0,0,22.52-54.37h1.57a78.46,78.46,0,1,1-23-55.48,78.49,78.49,0,0,1,23,55.48Z" style="fill:#ff7519"/>
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "Loader"
    }
</script>

<style scoped>
    .loader svg {
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
        margin: auto;
    }
    @-webkit-keyframes rotate-right {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes rotate-left {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(-360deg);
        }
    }
    #circle1 {
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-transform-origin: 200px 200px;
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-animation: rotate-right 12s linear 0s infinite;
    }

    #circle2 {
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-transform-origin: 200px 200px;
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-animation: rotate-left 24s linear 0s infinite;
    }

    #circle3 {
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-transform-origin: 200px 200px;
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-animation: rotate-right 12s linear 0s infinite;
    }

    #circle4 {
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-transform-origin: 200px 200px;
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-animation: rotate-left 24s linear 0s infinite;
    }

    #circle5 {
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-transform-origin: 200px 200px;
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-animation: rotate-right 12s linear 0s infinite;
    }

</style>
