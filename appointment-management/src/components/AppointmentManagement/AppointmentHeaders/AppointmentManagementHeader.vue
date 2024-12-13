<template>
    <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 fixed top-0 shadow-lg z-50 w-full">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a class="flex items-center cursor-pointer">
                <svg class="mr-3 h-6 sm:h-9 text-cyan-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path fill="currentColor" d="M60,16H48V4c0-2.211-1.789-4-4-4H20c-2.211,0-4,1.789-4,4v12H4c-2.211,0-4,1.789-4,4v40c0,2.211,1.789,4,4,4 h56c2.211,0,4-1.789,4-4V20C64,17.789,62.211,16,60,16z M24,8h16v8H24V8z M40,44h-4v4c0,2.211-1.789,4-4,4s-4-1.789-4-4v-4h-4 c-2.211,0-4-1.789-4-4s1.789-4,4-4h4v-4c0-2.211,1.789-4,4-4s4,1.789,4,4v4h4c2.211,0,4,1.789,4,4S42.211,44,40,44z"></path>
            </svg>

                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MedSched</span>
            </a>
            <div class="flex items-center lg:order-2">
                <router-link class="bg-sky-500 hover:bg-sky-700 p-4 text-white rounded-xl text-lg transition duration-150 ease-in-out" to="/login">Log in</router-link>
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>   
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:hover:text-cyan-500 lg:text-primary-700 lg:p-0 dark:text-white text-lg font-inter transition duration-150 ease-in-out" aria-current="page"><router-link to="/" active-class="text-cyan-500">Home</router-link></a>
                    </li>
                    <li>
            <button @click="toggleDropdown" class="relative flex items-center justify-between text-lg w-full py-2 px-3 text-gray-700 rounded hover:bg-cyan-500 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Appointment<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <div v-show="isDropDownOpen" class="z-10 font-normal absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600 ">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    
                    <a href="#" class="block px-4 py-2 text-sm hover:text-cyan-500 dark:hover:bg-gray-600 dark:hover:text-white"><router-link to="/walk-in" active-class="text-cyan-500">Walk-In Booking</router-link></a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm hover:text-cyan-500 dark:hover:bg-gray-600 dark:hover:text-white"><router-link to="/make-appointment" active-class="text-cyan-500">Make an Appointment</router-link></a>
                  </li>
                </ul>
                    </div>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100  lg:hover:text-cyan-500 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-lg transition duration-150 ease-in-out">Contact</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100  lg:hover:text-cyan-500 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-lg transition duration-150 ease-in-out">About Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <AppointmentChooseBookModal :visible="showModal" @close="showModal = false" />
</header>
</template>

<script>
import AppointmentChooseBookModal from '../AppointmentModal/AppointmentChooseBookModal.vue';

export default {
    name: 'AppointmentHeader',
    components:{
        AppointmentChooseBookModal
    },
    data(){
        return {
            showModal: false,
            isDropDownOpen: false
        }
    },
    computed:{
        isAppointmentActive(){
            return ['/walk-in', '/make-appointment'].includes(this.$route.path)
        }
    },
    methods: {
        toggleDropdown(){
            this.isDropDownOpen = !this.isDropDownOpen
        }
    }
}
</script>

<style>
.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.dropdown-enter, .dropdown-leave-to /* .dropdown-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(-10px);
}</style>