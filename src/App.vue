<template>
  <TopNav />
  <router-view />
  <BottomNav />
</template>
<script>
import BottomNav from '@/components/BottomNav.vue';
import TopNav from '@/components/TopNav.vue'
export default {
  name: 'E-comApp',
  components: {
    BottomNav,
    TopNav,
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

.text-ellipsis2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
