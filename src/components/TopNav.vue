<template>
    <div class="w-100 position-fixed top-0" style="z-index: 10;">
        <div class="d-flex justify-content-between align-items-center py-2 px-2"
            style="background-color: var(--secondary-color);">
            <div class="d-flex align-items-center">
                <i data-bs-toggle="offcanvas" data-bs-target="#topSideMenu" aria-controls="topSideMenu"
                    class="bi bi-list fs-4 mx-2" style="color: var(--primary-color);"></i>
                <!-- <router-link to="/search-page" class="d-flex">
                    <i class="bi bi-search fs-4 mx-2 " style="color: var(--primary-color);"></i>
                </router-link> -->
            </div>
            <router-link to="/" class="d-none d-lg-flex align-items-center text-decoration-none">
                <img src="https://carolieto.com/uploads/logo.png" alt="Brand Lgo"
                    style="width: 100px;object-fit: contain;">
            </router-link>
            <router-link to="/" class="d-flex d-lg-none align-items-center text-decoration-none">
                <img src="https://carolieto.com/uploads/logo.png" alt="Brand Logo"
                    style="width: 100px;object-fit: contain;">
            </router-link>
            <div class="d-flex">
                <div class="text-center position-relative">
                    <router-link to="/cart-page">
                        <i class="bi bi-cart fs-4 mx-2" style="color: var(--primary-color);"></i>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- SideMenu Offcanvas -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="topSideMenu" aria-labelledby="topSideMenuLabel">
            <div class="offcanvas-header border-bottom d-flex justify-content-between align-items-center"
                style="background-color: var(--secondary-color); ">
                <div class="d-flex align-items-center">
                    <img src="https://carolieto.com/uploads/logo.png" alt="Brand Logo"
                        style="width: 100px;object-fit: contain;">
                    <!-- <small class=" mb-0 ms-1 fw-bold" style=" color: var(--primary-color); letter-spacing: 2px">MAC
                        HIDDLE</small> -->
                </div>
                <button type="button" class="fs-4 btn bi bi-x-lg " style="color: var(--primary-color); "
                    data-bs-dismiss="offcanvas" aria-label="Close">

                </button>
            </div>
            <div style="background-color: var(--secondary-color); color: var(--primary-color);"
                class="offcanvas-body position-relative w-100">
                <div v-for="(page, index) in pages" :key="index" class=" border-bottom py-3"
                    data-bs-dismiss="offcanvas">
                    <router-link :to="page.router" class=" d-flex text-start text-decoration-none"
                        style="color: var(--primary-color);">
                        <i :class="page.icon"></i>
                        <p class="m-0 ms-2">{{ page.name }}</p>
                    </router-link>
                </div>
            </div>
            <div class="position-absolute bottom-0 w-100 py-3" style="color: var(--primary-color);">
                <p class="text-center my-3 fs-4 ">Reach Us</p>
                <div class="d-flex justify-content-evenly fs-2 w-100">
                    <a href="https://www.instagram.com/" class="text-decoration-none"
                        style="color: var(--primary-color)">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/" class="text-decoration-none"
                        style="color: var(--primary-color)">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="https://in.linkedin.com/" class="text-decoration-none" style="color: var(--primary-color)">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/" class="text-decoration-none" style="color: var(--primary-color)">
                        <i class="bi bi-youtube"></i>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'TopNav',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo/mac2.png",
            pages: [
                {
                    name: 'About Us',
                    icon: 'bi bi-arrow-right ',
                    router: '/aboutUs'
                },
                {
                    name: 'Account',
                    icon: 'bi bi-arrow-right ',
                    router: '/myAccount'
                },
                {
                    name: 'Support',
                    icon: 'bi bi-arrow-right ',
                    router: '/faqs/customer-service'
                },
                {
                    name: 'Career',
                    icon: 'bi bi-arrow-right ',
                    router: '/career'
                },
            ],

        }
    },
    methods: {}
}
</script>

<style scoped>
.count {
    position: absolute;
    top: -4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #eb3e25;
    right: 0px;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 14px;
}

.pulse-animation {
    animation: pulse 1s infinite alternate;
}

@keyframes pulse {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.1);
    }
}
</style>