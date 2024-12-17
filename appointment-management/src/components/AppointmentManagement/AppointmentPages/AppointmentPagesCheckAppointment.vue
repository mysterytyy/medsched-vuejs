<template>
    <div>
        <AppointmentSidebarView />
    </div>
    <main class="ml-64 max-sm:ml-0 flex-1 flex justify-center">
        <AppointmentCheckAppointmentView />
    </main>
</template>

<script>
import AppointmentCheckAppointmentView from '../AppointmentMainContainer/AppointmentCheckAppointmentView.vue';
import AppointmentSidebarView from '../AppointmentSidebar/AppointmentSidebarView.vue';


export default {
    name: "AppointmentPagesCheckAppointment",
    components: {
        AppointmentSidebarView,
        AppointmentCheckAppointmentView

    }
}
</script>