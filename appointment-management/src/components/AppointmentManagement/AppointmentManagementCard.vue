<template>
    <div class="bg-slate-100 w-4/5 rounded-xl mt-32 shadow-2xl max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:w-5/6">
        <div class="p-10 flex flex-row max-sm:flex max-sm:flex-col">
            <div class="flex items-start flex-col justify-around w-3/6 max-sm:w-full max-sm:flex max-sm:justify-center max-sm:p-7">
                <h1 class="text-6xl font-bold text-left max-sm:text-cyan-500 max-sm:text-base max-sm:hidden lg:hidden">Get Appointment <br> Easy and Fast</h1>
                <h1 class="text-6xl font-bold text-left max-sm:text-4xl max-sm:w-full">Get Appointment Easy and Fast</h1>
                <p class="text-left font-light lorem font-['Open_Sans'] max-sm:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt esse ullam nobis, <br>tempora, ipsam dolores voluptatibus</p>
                <div class="max-sm:w-full ">
                    <button @click="showModal = true" class=" bg-sky-500 p-3 rounded-md  hover:bg-sky-700 text-white transition duration-150 ease-in-out shadow-lg max-sm:mt-4">Book an Appointment</button>
                </div>
                

            </div>
            <div class="flex justify-center w-3/6 bg-transparent max-sm:flex max-sm:justify-center max-sm:w-full max-sm:mt-3">   
                <img src="/images/appointment.png" class="w-96 max-sm:mt-4 max-sm:w-96">
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