<template>
    <div class="flex">
            <AppointmentSidebarView />
        <main class="ml-64 flex-1 flex justify-center ">
            <AppointmentDashboardView />
        </main>
    </div>
    
  
</template>

<script>
import AppointmentDashboardView from '../AppointmentDashboard/AppointmentDashboardView.vue';
import AppointmentSidebarView from '../AppointmentSidebar/AppointmentSidebarView.vue';



export default {
    name: "AppointmentPagesDashboard",
    components: {
        AppointmentSidebarView,
        AppointmentDashboardView
    }
}

</script>