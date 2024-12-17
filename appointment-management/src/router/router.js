import { createRouter, createWebHistory } from "vue-router";
import AppointmentPagesLogin from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesLogin.vue";
import AppointmentPagesIndex from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesIndex.vue";
import AppointmentPagesWalkInBook from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesWalkInBook.vue";
import AppointmentPagesMakeAppointment from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesMakeAppointment.vue";
import AppointmentPagesDashboard from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesDashboard.vue";
import AppointmentPagesCheckAppointment from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesCheckAppointment.vue";
import AppointmentPagesBookAppointment from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesBookAppointment.vue";
import AppointmentPagesAboutUs from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesAboutUs.vue";

const routes = [
    {
        path: '/',
        name: 'AppointmentIndex',
        component: AppointmentPagesIndex
    },
    {
        path: '/login',
        name: 'AppointmentLogin',
        component: AppointmentPagesLogin
    },
    {
        path: '/walk-in',
        name: 'AppointmentWalk-In',
        component: AppointmentPagesWalkInBook
    },
    {
        path: '/make-appointment',
        name: 'AppointmentMakeAppointment',
        component: AppointmentPagesMakeAppointment
    },
    {
        path: '/dashboard',
        name: 'AppointmentDashboard',
        component: AppointmentPagesDashboard
        
    },
    {
        path: '/appointment',
        name: 'AppointmentBookAppointment',
        component: AppointmentPagesBookAppointment
        
    },
    {
        path: '/scheduledappointment',
        name: 'AppointmentCheckAppointment',
        component: AppointmentPagesCheckAppointment
        
    },
    {
        path: '/aboutus',
        name: 'AppointmentAboutUs',
        component: AppointmentPagesAboutUs
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router