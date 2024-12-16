<template>
    <div class="flex flex-col items-center w-full h-screen">
        <div class="w-full mt-10 flex justify-between ">
            <div class="flex flex-row w-1/3">
                <h1 class="text-3xl font-bold font-[Poppins] text-left ml-5">Appointment List |</h1>
                <RefreshSVG />
            </div>
            <div class="w-1/3 flex justify-center">
                <button class="bg-sky-400 px-8 py-2 w-5/12 rounded-lg shadow-lg text-white font-[Inter] flex flex-row hover:bg-sky-600 hover:text-white transition duration-300 ease-in-out group">
                    <svg class="w-6 h-6 mr-1 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>Create New</button>
                </div>
        </div>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700 bg-slate-200 w-full mt-5">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
                    <li class="me-2" role="presentation">
                        <button @click="setActiveTab('pending')" :class="{'text-gray-600 border-sky-400': activeTab === 'pending', 'text-gray-500 border-transparent': activeTab !== 'pending' }" class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-sky-400 dark:hover:text-gray-300 uppercase transition duration-300 ease-in-out text-base font-[Inter]" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="activeTab === 'pending'">Pending Request</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button @click="setActiveTab('confirmed')" :class="{'text-gray-600 border-sky-400': activeTab === 'confirmed', 'text-gray-500 border-transparent': activeTab !== 'confirmed'}" class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-sky-400 dark:hover:text-gray-300 uppercase transition duration-300 ease-in-out text-base font-[Inter]" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard"  aria-selected="activeTab === 'confirmed'">Confirmed Request</button>
                    </li>
                </ul>
            </div>
            <div id="default-styled-tab-content" class="w-full p-2">
                <div v-if="activeTab === 'pending'" class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                   <AppointmentTablePendingData :requests="pendingRequests" />
                </div>
                <div v-if="activeTab === 'confirmed'" class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <AppointmentTableConfirmedData :requests="confirmedRequests" />
                </div>

            </div>

    </div>
</template>

<script>
import AppointmentTableConfirmedData from '../AppointmentTableDatas/AppointmentTableConfirmedData.vue';
import AppointmentTablePendingData from '../AppointmentTableDatas/AppointmentTablePendingData.vue';
import { confirmedrequestdata } from '@/data/confirmedrequestdata';
import { pendingrequestdata } from '@/data/pendingrequestdata';
import RefreshSVG from '@/svg/RefreshSVG.vue';

export default {
    name: "AppointmentCheckAppointmentView",
    components:{
        AppointmentTablePendingData,
        AppointmentTableConfirmedData,
        RefreshSVG
    },
    data(){
        return{
            activeTab: 'pending',
            pendingRequests: pendingrequestdata,
            confirmedRequests: confirmedrequestdata    
        };
    },
    methods:{
        setActiveTab(tab){
            this.activeTab = tab;
        }
    }
}
</script>