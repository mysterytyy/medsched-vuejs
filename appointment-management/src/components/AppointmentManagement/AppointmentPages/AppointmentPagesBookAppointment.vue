<template>
    <div>
        <AppointmentSidebarView />
        <main class="ml-64 max-sm:ml-0 flex-1 flex justify-center bg-gray-200">
            <AppointmentBookAppointmentView />
        </main>
    </div>
</template>

<script>
import AppointmentSidebarView from '../AppointmentSidebar/AppointmentSidebarView.vue';
import AppointmentBookAppointmentView from '../AppointmentMainContainer/AppointmentBookAppointmentView.vue';

export default {
    name:"AppointmentPagesBookAppointment",
    components:{
        AppointmentSidebarView,
        AppointmentBookAppointmentView
    }
}
</script>