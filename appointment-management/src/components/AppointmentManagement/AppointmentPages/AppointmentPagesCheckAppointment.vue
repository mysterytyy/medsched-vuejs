<template>
    <div class="flex">
        <AppointmentSidebarView />
    </div>
    <main class="ml-64 flex-1 flex justify-center">
        <AppointmentCheckAppointmentView />
    </main>
</template>

<script>
import AppointmentCheckAppointmentView from '../AppointmentCheckAppointment/AppointmentCheckAppointmentView.vue';
import AppointmentSidebarView from '../AppointmentSidebar/AppointmentSidebarView.vue';

export default {
    name: "AppointmentPagesCheckAppointment",
    components: {
        AppointmentSidebarView,
        AppointmentCheckAppointmentView

    }
}
</script>