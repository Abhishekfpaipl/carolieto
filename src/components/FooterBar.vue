<template>
    <div class="container-fluid pt-3 border-top border-bottom d-none d-md-block"
        style="background-color: var(--secondary-color);color:var(--primary-color)">
        <div class="row">
            <div class="col-12 col-md-4 mb-3 d-flex flex-column align-items-center justify-content-center">
                <router-link to="/" class="text-decoration-none text-dark d-flex flex-column align-items-center">
                    <img src="https://carolieto.com/uploads/logo.png" style="width: 200px;object-fit: contain; ">
                </router-link>

            </div>

            <div class=" col-12 col-md-4 mb-3 text-center">
                <p class="mb-2 fw-bold">Contact Us</p>
                <p class="mb-2">Email : info@carolieto.com</p>
                <p class="mb-2">Address : C 58, Ground Floor, C-Block, <br>
                    Mansarover Garden, Delhi - 110015 </p>
                <div class="d-flex gap-2 justify-content-center">
                    <p class="fw-bold">Follow Us :</p>
                    <i class="bi bi-twitter-x"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-instagram"></i>
                </div>
            </div>
            <div class="col-12 col-md-4 d-flex justify-content-around">
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Company</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1"
                            style="color:var(--primary-color)" v-for="(link, index) in company" :key="index">{{
                            link.name }}</router-link>
                    </div>
                </div>
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Resources</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1"
                            style="color:var(--primary-color)" v-for="(link, index) in links" :key="index">{{ link.name
                            }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-bg-dark py-2 d-none d-md-flex justify-content-between px-md-4">
        <p class="mb-0">All rights reserved</p>
        <a href="https://www.covisor.in" class="text-white text-decoration-none">Copyright &copy; Covisor Infotech Pvt
            Ltd</a>
    </div>
</template>

<script>
export default {
    name: 'FooterBar',
    data() {
        return {
            company: [
                {
                    id: 1,
                    name: 'Home',
                    link: '/'
                },
                {
                    id: 1,
                    name: 'Contact Us',
                    link: '/contact-us'
                },
                {
                    id: 2,
                    name: 'About Us',
                    link: '/about-us'
                },
                {
                    id: 3,
                    name: 'Privacy Policy',
                    link: '/privacy-policy'
                },

            ],
            links: [
                {
                    id: 13,
                    name: 'Link',
                    link: '/'
                },
                {
                    id: 1,
                    name: 'Link',
                    link: '/'
                },
                {
                    id: 12,
                    name: 'Link',
                    link: '/'
                },
            ],
        }
    },
}
</script>

<style></style>
