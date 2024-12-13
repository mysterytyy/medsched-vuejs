<template>
    <AppointmentManagementHeader />
    <main class="flex flex-col justify-center items-center">
        <AppointmentMakeAppointment />
    </main>
    <footer class="w-full mt-10">
        <AppointmentManagementFooter />
    </footer>
</template>

<script>
import AppointmentManagementHeader from '../AppointmentHeaders/AppointmentManagementHeader.vue';
import AppointmentMakeAppointment from '../AppointmentAuthentication/AppointmentMakeAppointment.vue';
import AppointmentManagementFooter from '../AppointmentManagementFooter.vue';

export default {
    name:"AppointmentPagesMakeAppointment",
    components: {
        AppointmentManagementHeader,
        AppointmentMakeAppointment,
        AppointmentManagementFooter
    }
}
</script>