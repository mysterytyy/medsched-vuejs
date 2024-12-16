<template>
    <div class="flex">
            <AppointmentSidebarView />
        <main class="ml-64 flex-1 flex justify-center bg-gray-200 h-fit">
            <AppointmentDashboardView />
        </main>
    </div>
    
  
</template>

<script>
import AppointmentDashboardView from '../AppointmentMainContainer/AppointmentDashboardView.vue';
import AppointmentSidebarView from '../AppointmentSidebar/AppointmentSidebarView.vue';



export default {
    name: "AppointmentPagesDashboard",
    components: {
        AppointmentSidebarView,
        AppointmentDashboardView
    }
}

</script>