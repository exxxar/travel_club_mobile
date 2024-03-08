<template>
    <div class="ms-auto mr-auto sky-wrapper">
        <div class='sky'>
            <div class='cloud-1 cloud'>
                <div class='cloud--inner1'></div>
                <div class='cloud--inner4'></div>
                <div class='cloud--inner2'></div>
                <div class='cloud--inner3'></div>
            </div>
            <div class='cloud-2 cloud'>
                <div class='cloud--inner1'></div>
                <div class='cloud--inner4'></div>
                <div class='cloud--inner2'></div>
                <div class='cloud--inner3'></div>
            </div>
            <div class='cloud-3 cloud'>
                <div class='cloud--inner1'></div>
                <div class='cloud--inner4'></div>
                <div class='cloud--inner2'></div>
                <div class='cloud--inner3'></div>
            </div>
            <div class='ballon'>
                <div class='ballon-inner'>
                    <div class='ball-inner'></div>
                    <div class='ballon-ball'>
                        <div class='ballon-ball1'>
                            <div class='ballon-ball2'>
                                <div class='ballon-ball3'>
                                    <!-- <div class='ball-inner--0'></div>
                                    <div class='ball-inner--1'></div>
                                    <div class='ball-inner--2'></div>
                                    <div class='ball-inner--3'></div>
                                    <div class='ball-inner--4'></div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='ballon-rope'></div>
                    <div class='ballon-rope1'></div>
                    <div class='ballon-rope2'></div>
                    <div class='ballon-rope3'></div>
                    <div class='ballon-rope4'></div>
                    <div class='ballon-rope5'></div>
                    <div class='ballon-rope6'></div>
                    <div class='ballon-rope7'></div>
                    <div class='ballon-rope8'></div>
                    <div class='ballon-rope9'></div>
                    <div class='ballon-rope10'></div>
                    <div class='ballon-seat'></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">

    .sky-wrapper {
        position: relative;
        height: 40vh;
        width: 100%;
        background: url('/img/travel/Resurs_7.svg') no-repeat center;
    }

    .ballon {
        margin: 0 auto;
        width: 150px;
        position: relative;
        top: 45%;
        -webkit-transform: translateY(-45%);
        transform: translateY(-45%);
    }

    .ballon-inner {
        -webkit-animation: drift 5s ease-in-out infinite;
        animation: drift 5s ease-in-out infinite;
    }

    .ballon-ball {
        height: 150px;
        width: 150px;
        position: relative;
        /*background: yellow;*/
        border-radius: 150%;
        border-bottom-left-radius: 425%;
        border-bottom-right-radius: 425%;
        border-top-left-radius: 425%;
        border-top-radius: 220%;
        background: orange;
        transform: rotate(135deg);
        /*border-radius: 50%;
        border: 3px solid #bf5caa;*/
        overflow: hidden;
    }

    .ballon-ball1 {
        height: 150px;
        width: 150px;
        position: relative;
        /*background: yellow;*/
        border-bottom-left-radius: 100%;
        border-bottom-right-radius: 220%;
        border-top-left-radius: 220%;
        background: yellow;
        overflow: hidden;
    }

    .ballon-ball2 {
        height: 150px;
        width: 150px;
        position: relative;
        border-bottom-left-radius: 0%;
        border-bottom-right-radius: 530%;
        border-top-left-radius: 530%;
        background: orange;
        overflow: hidden;
    }

    .ballon-ball3 {
        height: 175px;
        width: 37px;
        position: relative;
        background: yellow;
        border-bottom-left-radius: 1000%;
        border-bottom-right-radius: 1000%;
        border-top-left-radius: 1000%;
        overflow: hidden;
        transform: rotate(45deg);
        border-top-right-radius: 1000%;
        margin-left: 64px;
        margin-top: -20px
    }

    .ball-inner {
        position: absolute;
        height: 38px;
        top: 60px;
        left: 0;
        width: 100%;
        overflow: hidden;
        border-radius: 50%;
        border-bottom: 5px solid black;
        z-index: 1;
    }

    /*.ball-inner--0 {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: -3px;
      border: 3px solid #bf5caa;
    }
    .ball-inner--1 {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: 17px;
      border: 3px solid #bf5caa;
    }
    .ball-inner--2 {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: 37px;
      border: 3px solid #bf5caa;
    }
    .ball-inner--3 {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: 57px;
      border: 3px solid #bf5caa;
    }
    .ball-inner--4 {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: 77px;
      border: 3px solid #bf5caa;
    }
    */
    .ballon-rope {
        height: 130px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 117px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(28deg);
        top: 76px;
        /*height: 55.5555555556px;
        width: 55.5555555556px;
        position: absolute;
        z-index: -1;
        left: 23.2558139535px;
        top: 55.5555555556px;
        border: #cd7856 solid 3px;
        border-right: #cd7856 solid 3px;
        -webkit-transform: rotate(53deg) skew(18deg);
                transform: rotate(53deg) skew(18deg);*/
    }

    .ballon-rope1 {
        height: 130px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 32px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(-28deg);
        top: 76px;
    }

    .ballon-rope2 {
        height: 120px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 41px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(-25deg);
        top: 84px;
    }

    .ballon-rope3 {
        height: 120px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 108px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(25deg);
        top: 84px;
    }

    .ballon-rope4 {
        height: 130px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 54px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(-20deg);
        top: 90px;
    }

    .ballon-rope5 {
        height: 130px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 94px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(20deg);
        top: 90px;
    }

    .ballon-rope6 {
        height: 130px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 66px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(-9deg);
        top: 93px;
    }

    .ballon-rope7 {
        height: 130px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 82px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(9deg);
        top: 93px;
    }

    .ballon-rope8 {
        height: 120px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 74.5px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(0deg);
        top: 97px;
    }

    .ballon-rope9 {
        height: 30px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 85px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(-3deg);
        top: 167px;
    }

    .ballon-rope10 {
        height: 30px;
        width: 0px;
        position: absolute;
        z-index: 0;
        left: 63px;
        border: #010000 solid 1px;
        border-right-color: rgb(1, 0, 0);
        border-right-style: solid;
        border-right-width: 1px;
        border-right: #000 solid 1px;
        transform: rotate(3deg);
        top: 167px;
    }

    .ballon-seat {
        width: 28.5714285714px;
        height: 28.5714285714px;
        position: relative;
        border: 3px solid #633421;
        border-radius: 0 0 6px 6px;
        margin: 25px auto;
        background: -webkit-gradient(linear, left top, right top, from(#987359), color-stop(50%, #89534d), color-stop(85%, #4a2b21));
        background: linear-gradient(to right, #987359 0%, #89534d 50%, #4a2b21 85%);
        top: 20px;
    }

    .ballon-seat:before {
        content: '';
        width: 28.5714285714px;
        height: 14.2857142857px;
        position: absolute;
        border-radius: 0 0 6px 6px;
        bottom: 0;
        left: -2px;
        border-top: 3px solid #633421;
        background: transparent;
    }

    .sky {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        max-width: 650px;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
        margin: 0 auto;
    }

    .cloud {
        position: absolute;
        background: #dcf6ff;
        border-radius: 200px;
    }

    .cloud--inner1:before, .cloud--inner1:after {
        content: '';
        position: absolute;
        background: #dcf6ff;
        width: 48%;
        height: 100%;
        top: -34%;
        left: 2%;
        border-radius: 300px;
    }

    .cloud--inner1:after {
        width: 65%;
        height: 120%;
        top: -21%;
        left: auto;
        right: 2%;
    }

    .cloud--inner3:before, .cloud--inner3:after {
        content: '';
        position: absolute;
        background: #dcf6ff;
        width: 55%;
        height: 91%;
        top: 21%;
        left: -9%;
        border-radius: 300px;
    }

    .cloud--inner3:after {
        width: 55%;
        height: 100%;
        top: 34%;
        left: auto;
        right: 8%;
    }

    .cloud--inner2:before, .cloud--inner2:after {
        content: '';
        position: absolute;
        background: #ace7f9;
        width: 61%;
        height: 100%;
        top: 30%;
        left: -12%;
        border-radius: 200px;
    }

    .cloud--inner2:after {
        width: 55%;
        height: 100%;
        top: 54%;
        left: auto;
        right: 10%;
    }

    .cloud--inner4:before, .cloud--inner4:after {
        content: '';
        position: absolute;
        border-radius: 200px;
    }

    .cloud--inner4:before {
        background: #ace7f9;
        width: 50%;
        height: 89%;
        top: 19%;
        left: auto;
        right: -20%;
    }

    .cloud--inner4:after {
        background: #dcf6ff;
        width: 50%;
        height: 74%;
        top: 18%;
        left: auto;
        right: -19%;
    }

    .cloud-1 {
        width: 110px;
        height: 55px;
        bottom: 50%;
        left: 105%;
        -webkit-animation: moveClouds 17s linear infinite;
        animation: moveClouds 17s linear infinite;
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
    }

    .cloud-2 {
        width: 83.3333333333px;
        height: 41.6666666667px;
        bottom: 15%;
        left: 105%;
        -webkit-animation: moveClouds 12s linear infinite;
        animation: moveClouds 12s linear infinite;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }

    .cloud-3 {
        width: 66.6666666667px;
        height: 33.3333333333px;
        top: 5%;
        left: 105%;
        -webkit-animation: moveClouds 15s linear infinite;
        animation: moveClouds 15s linear infinite;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
    }

    @-webkit-keyframes moveClouds {
        0% {
            -webkit-transform: translateX(-15vw);
            transform: translateX(-15vw);
            opacity: 0;
        }
        5% {
            opacity: 0.1;
        }
        10% {
            opacity: 0.5;
        }
        15% {
            opacity: 0.8;
        }
        20% {
            opacity: 1;
        }
        70% {
            opacity: 0.8;
        }
        80% {
            opacity: 0.5;
        }
        90% {
            opacity: 0.1;
        }
        100% {
            -webkit-transform: translateX(-650px);
            transform: translateX(-650px);
            opacity: 0;
        }
    }

    @keyframes moveClouds {
        0% {
            -webkit-transform: translateX(-15vw);
            transform: translateX(-15vw);
            opacity: 0;
        }
        5% {
            opacity: 0.1;
        }
        10% {
            opacity: 0.5;
        }
        15% {
            opacity: 0.8;
        }
        20% {
            opacity: 1;
        }
        70% {
            opacity: 0.8;
        }
        80% {
            opacity: 0.5;
        }
        90% {
            opacity: 0.1;
        }
        100% {
            -webkit-transform: translateX(-650px);
            transform: translateX(-650px);
            opacity: 0;
        }
    }

    @-webkit-keyframes drift {
        0% {
            -webkit-transform: translateY(0px) rotate();
            transform: translateY(0px) rotate();
        }
        50% {
            -webkit-transform: translateY(-20px) rotate(-3deg);
            transform: translateY(-20px) rotate(-3deg);
        }
        100% {
            -webkit-transform: translateY(0px) rotate();
            transform: translateY(0px) rotate();
        }
    }

    @keyframes drift {
        0% {
            -webkit-transform: translateY(0px) rotate();
            transform: translateY(0px) rotate();
        }
        50% {
            -webkit-transform: translateY(-20px) rotate(-3deg);
            transform: translateY(-20px) rotate(-3deg);
        }
        100% {
            -webkit-transform: translateY(0px) rotate();
            transform: translateY(0px) rotate();
        }
    }
</style>
