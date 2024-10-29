<!-- VideoImageMask.vue -->
<template>
    <div class="mask-container">
        <div class="video-wrapper">
            <video class="background-video" autoplay loop muted playsinline>
                <source :src="videoSource" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="logo-mask">
            <img :src="logoSource" alt="Carolieto" class="mask-image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoImageMask',
    props: {
        videoSource: {
            type: String,
            required: true,
            default: 'https://carolieto.com/media/ocean2.mp4'
        },
        logoSource: {
            type: String,
            required: true,
            default: 'https://carolieto.com/media/logo-t.png'
        }
    }
}
</script>

<style scoped>
.mask-container {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: #000;
}

.video-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    object-fit: cover;
}

.logo-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mask-image {
    height: 80%;
    width: auto;
    max-width: 90%;
    object-fit: contain;
    mix-blend-mode: screen;
    -webkit-mask-image: url('https://carolieto.com/media/logo-t.png');
    mask-image: url('https://carolieto.com/media/logo-t.png');
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
}

/* Alternative method using background-clip */
.logo-mask {
    -webkit-background-clip: text;
    background-clip: text;
    mix-blend-mode: screen;
}
</style>