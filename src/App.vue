<template>
  <TopNav />
  <transition name="fade">
    <router-view />
  </transition>
  <FooterBar />
  <BottomNav />
</template>
<script>
import BottomNav from '@/components/BottomNav.vue';
import FooterBar from '@/components/FooterBar.vue';
import TopNav from '@/components/TopNav.vue'
export default {
  name: 'E-comApp',
  components: {
    BottomNav,
    TopNav,
    FooterBar,
  },
  computed: {
    hide() {
      const hiddenPages = ['LoginPage', 'RegistrationPage', 'ForgotPasswordPage', 'CartPage', 'NotificationPage', 'OrdersListPage', 'EmailVerificationPage', 'ResetPasswordPage']
      return hiddenPages.includes(this.$route.name)
    },
    hidden() {
      const hiddenPages = ['LoginPage', 'RegistrationPage', 'ForgotPasswordPage', 'ProductPage', 'NotificationPage', 'EmailVerificationPage', 'ResetPasswordPage']
      return hiddenPages.includes(this.$route.name)
    },
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --primary-color: #EDC3AB;
  --secondary-color: #231F20;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.text-ellipsis2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-ellipsis3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.accordion {
  --bs-accordion-btn-focus-box-shadow: none !important;
}

.form-control {
  box-shadow: none !important;
}
</style>
