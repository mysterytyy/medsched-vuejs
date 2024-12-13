<template>
    <AppointmentManagementHeader />
    <main class="flex flex-col justify-center items-center">
        <AppointmentLogin />
    </main>
    <footer class="w-full mt-10">
        <AppointmentManagementFooter />
    </footer>
</template>

<script>
import AppointmentLogin from '../AppointmentAuthentication/AppointmentLogin.vue';
import AppointmentManagementHeader from '../AppointmentHeaders/AppointmentManagementHeader.vue';
import AppointmentManagementFooter from '../AppointmentManagementFooter.vue';

    export default {
        name: 'AppointmentPagesLogin',
        components: {
            AppointmentManagementHeader,
            AppointmentLogin,
            AppointmentManagementFooter
        }
    }
</script>