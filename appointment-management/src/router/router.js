import { createRouter, createWebHistory } from "vue-router";
import AppointmentPagesLogin from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesLogin.vue";
import AppointmentPagesIndex from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesIndex.vue";
import AppointmentPagesWalkInBook from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesWalkInBook.vue";
import AppointmentPagesMakeAppointment from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesMakeAppointment.vue";
import AppointmentPagesDashboard from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesDashboard.vue";
import AppointmentPagesCheckAppointment from "@/components/AppointmentManagement/AppointmentPages/AppointmentPagesCheckAppointment.vue";

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
        name: 'AppointmentCheckAppointment',
        component: AppointmentPagesCheckAppointment
        
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router