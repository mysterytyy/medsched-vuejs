<template>
    <AppointmentManagementCard />
    <AppointmentManagementBenefits />
    <footer class="w-full">
      <AppointmentManagementFooter />
    </footer>
</template>

<script>
import AppointmentManagementCard from './AppointmentManagementCard.vue';
import AppointmentManagementBenefits from './AppointmentManagementBenefits.vue';
import AppointmentManagementFooter from './AppointmentManagementFooter.vue';

export default {
    name: 'AppointmentMain',
    components: {
        AppointmentManagementCard,
        AppointmentManagementBenefits,
        AppointmentManagementFooter
    }
}
</script>

