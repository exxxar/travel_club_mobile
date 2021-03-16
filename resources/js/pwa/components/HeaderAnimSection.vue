<template>
    <div class="section full mt-3 mb-3">
        <div
            class="editorial-background"
            style="background:linear-gradient(0deg,rgb(255, 224, 134), rgb(248, 135, 6));"
        >
        </div>
        <svg class="editorial"
             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28"
             preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave"
                      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,153, 0.7)"/>
                <use xlink:href="#gentle-wave" x="48" y="3" fill="#f8e30159"/>
                <use xlink:href="#gentle-wave" x="48" y="6" fill="rgb(255, 224, 134)"/>
            </g>
        </svg>
        <div class="particles">
            <div class='cloud-1 cloud' v-for="n in 26">
                <div class='cloud--inner1'></div>
                <div class='cloud--inner4'></div>
                <div class='cloud--inner2'></div>
                <div class='cloud--inner3'></div>
            </div>
        </div>
    </div>
</template>
