<template>  
        <AppointmentManagementHeader />
    <main class="flex flex-col justify-center items-center ">
        <AppointmentManagementMain />
    </main>
</template>

<script>
import AppointmentManagementHeader from '../AppointmentHeaders/AppointmentManagementHeader.vue';
import AppointmentManagementMain from '../AppointmentManagementMain.vue';

export default {
    name: "AppointmentPagesIndex",
    components: {
        AppointmentManagementHeader,
        AppointmentManagementMain
    }
}
</script>