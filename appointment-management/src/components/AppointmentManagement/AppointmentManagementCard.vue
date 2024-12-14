<template>
    <div class="bg-slate-100 w-4/5 rounded-xl mt-32 shadow-2xl">
        <div class="p-10 flex flex-row">
            <div class="flex items-start flex-col justify-around w-3/6">
                <h1 class="text-6xl font-bold text-left">Get Appointment <br> Easy and Fast</h1>
                <p class="text-left font-light lorem font-['Open_Sans']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt esse ullam nobis, <br>tempora, ipsam dolores voluptatibus</p>
                <button @click="showModal = true" class=" bg-sky-500 p-3 rounded-md  hover:bg-sky-700 text-white transition duration-150 ease-in-out shadow-lg">Book an Appointment</button>

            </div>
            <div class="flex justify-center w-3/6 bg-transparent">   
                <img src="/images/appointment.png" class="w-96">
            </div>
        </div>  
        <AppointmentChooseBookModal :visible="showModal" @close="showModal = false" />
    </div>
</template>

<script>
import AppointmentChooseBookModal from './AppointmentModal/AppointmentChooseBookModal.vue';
export default {
    name: "AppointmentCard",
    components: {
        AppointmentChooseBookModal
    },
    data(){
        return{
            showModal: false
        }
    }
}
</script>