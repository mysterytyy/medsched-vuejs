<template>
    <AppointmentManagementHeader />
    <main class="flex flex-col justify-center items-center">
        <AppointmentWalkInBooking />
    </main>
    <footer class="w-full mt-10">
        <AppointmentManagementFooter />
    </footer>
</template>

<script>
import AppointmentWalkInBooking from '../AppointmentAuthentication/AppointmentWalk-InBooking.vue';
import AppointmentManagementHeader from '../AppointmentHeaders/AppointmentManagementHeader.vue';
import AppointmentManagementFooter from '../AppointmentManagementFooter.vue';


export default {
    name:"AppointmentPagesWalkInBook",
    components:{
        AppointmentManagementHeader,
        AppointmentWalkInBooking,
        AppointmentManagementFooter
    }
}
</script>