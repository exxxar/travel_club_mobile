<template>
    <svg xmlns="http://www.w3.org/2000/svg" :class="'tc-fill tc-fill-'+color" :width="width" :height="height"
         viewBox="0 0 420.6 410.5">
        <radialGradient cx="56.3501" cy="19.2179"
                        gradientTransform="matrix(0.9986 -5.233596e-02 4.448556e-02 0.8488 -36.9742 443.8014)"
                        gradientUnits="userSpaceOnUse" id="SVGID_1_" r="711.335">
            <stop offset="0" style="stop-color:#FED576"/>
            <stop offset="0.2634" style="stop-color:#F47133"/>
            <stop offset="0.6091" style="stop-color:#BC3081"/>
            <stop offset="1" style="stop-color:#4C63D2"/>
        </radialGradient>
        <radialGradient cx="154.0732" cy="134.5501"
                        gradientTransform="matrix(0.9986 -5.233596e-02 4.448556e-02 0.8488 -24.3617 253.2946)"
                        gradientUnits="userSpaceOnUse" id="SVGID_2_" r="365.2801">
            <stop offset="0" style="stop-color:#FED576"/>
            <stop offset="0.2634" style="stop-color:#F47133"/>
            <stop offset="0.6091" style="stop-color:#BC3081"/>
            <stop offset="1" style="stop-color:#4C63D2"/>
        </radialGradient>
        <path :class="color==='gradient' ? 'st0' :''"
              d="M401.3,195c31.8-.1,63.7-.5,95.5,0,55.4,1.1,102.7,38.2,107.4,92.6,5.6,66,7.8,132.7,4.7,198.8-3,62.7-33.4,108.8-106,114.2-67.9,5-137,7.3-204.4.1-89.1-9.5-104.7-62.9-107.7-125.1-2.9-60.3.1-121.2,4.7-181.5,4.4-58.6,51.6-98.5,110.4-99C337.7,194.7,369.5,195,401.3,195Zm-2.6,370.5h98.1a56.1,56.1,0,0,0,5.8,0c37.6-3.2,68.1-33.8,68.7-72.2,1-62.6.8-125.2-.2-187.8-.5-37.7-24.7-68.1-61.8-70.7-65-4.5-130.5-7.8-195.5-5-55,2.4-83.6,32.1-84.8,78.6-1.4,60.6-1.3,121.3-.1,182,.8,42.7,31.2,73.6,71.8,74.9C333.3,566.4,366.1,565.5,398.7,565.5Z"
              transform="translate(-189.7 -194.8)"/>
        <path :class="color==='gradient' ? 'st1' :''"
              d="M506.3,398.4c.3,58.4-47,106.1-105.3,106.2-56.7.2-107-47.6-107.3-101.9-.4-63.1,45-108.1,107.4-109.5C452.1,292,511.5,340,506.3,398.4ZM399.2,467.2c38.7,2.3,70.8-28.2,73-69.5,1.9-35.4-35-68.5-71.7-68.6s-71.2,32.9-71.3,69.1S360.7,466.8,399.2,467.2Z"
              transform="translate(-189.7 -194.8)"/>
        <circle :class="color==='gradient' ? 'st2' :''" cx="325.8" cy="89.5" r="20.9"/>
    </svg>
</template>

<script>
    export default {
        name: "Instagram",
        props: {
            color: {
                type: String,
                default: 'white'
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '100%'
            },
        }
    }
</script>

<style scoped>
    .st0 {
        fill: url(#SVGID_1_);
    }

    .st1 {
        fill: url(#SVGID_2_);
    }

    .st2 {
        fill: #654C9F;
    }
</style>
