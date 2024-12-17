<template>
    <AppointmentManagementHeader />
    <main class="flex flex-col justify-center items-center ">
        <AppointmentAboutUsView />
    </main>

</template>

<script>
import AppointmentAboutUsView from '../AppointmentAboutUs/AppointmentAboutUsView.vue';
import AppointmentManagementHeader from '../AppointmentHeaders/AppointmentManagementHeader.vue';

export default {
    name: 'AppointmentPagesAboutUs',
    components:{
        AppointmentAboutUsView,
        AppointmentManagementHeader
    }
}
</script>