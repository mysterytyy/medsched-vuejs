<template>
    <div class="flex flex-col w-full justify-center items-center">
        <div class="flex justify-evenly mt-5 items-center w-full ">
             <div class="w-1/2 relative ">
                <span class=" absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg class="w-5 h-5 text-gray-500" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>search</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-256.000000, -1139.000000)" fill="#000000"> <path d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z" id="search" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                </span>
                <input v-model="searchQuery" type="search" class="w-full p-3 pl-10 rounded-lg font-[Poppins] border-2 border-sky-500 outline-none" placeholder="Search">
             </div>  
             <div class="w-1/4 flex justify-center p-2 rounded-2xl border border-gray-200 cursor-pointer">   
                <svg class="w-12 h-12" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#F3F2F2" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 16L16 16M16 16L14 16M16 16L16 14M16 16L16 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 4V2.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 4V2.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21.5 9H16.625H10.75M2 9H5.875" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                <div class="flex flex-col ml-2">
                    <p class="text-left font-[Inter] font-bold text-xl">{{ currentDate }}</p>
                    <p class="text-left font-[Inter] font-light text-lg">{{ currentTime }}</p>
                </div>
        
            </div>
            </div>
        <div class="w-5/6 mt-10 bg-white shadow-md p-3 rounded-lg">
           
            <div>
                <h1 class="text-left ml-5 text-2xl font-normal font-[Poppins]">Available Centers</h1>
            </div>
            <div class="flex justify-center items-center gap-5 m-5 h-1/3 font-[Inter] text-xl flex-wrap mt-5">
                <div
                v-for="(center, index) in filteredAvailableServices"
                :key="index"
                class="bg-white p-5 h-40 w-1/5 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out cursor-pointer border-2 border-sky-400"
                >
                <img :src="center.image" class="w-16 h-16" :alt="center.name">
                <h1 class="text-gray-700">{{ center.name }}</h1>
                </div>

            </div>
        </div>
        <div class="w-full mt-10 h-full flex justify-center ">
            <div class="bg-white w-5/6 rounded-lg shadow-lg p-3">
                <div>
                <h1 class="text-left ml-5 text-2xl font-normal font-[Poppins]">Unavailable Centers</h1>
            </div>
            <div class="flex justify-center items-center gap-5 m-5 h-1/3 font-[Inter] text-xl flex-wrap mt-5">
                <div v-for="(center, index) in filteredUnavailableServices" :key="index" class="p-5 h-40 w-1/5 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out cursor-pointer border-2 border-red-400">
                    <img class="w-16 h-16" :src="center.image" alt="">
                    <h1 class="text-gray-700">{{ center.name }}</h1>
                </div>   
            </div>
            </div>  
        </div>
    </div>
    
</template>

<script>


    export default {
        name:"AppointmentBookAppointmentView",
        data(){
            return{
                searchQuery: "",
                currentDate: this.getCurrentDate(),
                currentTime: this.getCurrentTime(),
                availablecenters: [
                    {
                        name: "Center for Women",
                        image: "/images/centers/cardio.png"
                    },
                    {
                        name: "Aesthetics",
                        image: "/images/centers/cardio.png"
                    },
                    {
                        name: "Center for Cancer",
                        image: "/images/centers/center-for-cancer.png"
                    }
                ],
                unavailablecenters: [
                    {
                        name: "Center for Nuclear",
                        image: "/images/centers/center-for-nuclear.png"
                    },
                    {
                        name: "Center for Rehab",
                        image: "/images/centers/center-for-rehab.png"
                    },
                    {
                        name: "Center for Wound",
                        image: "/images/centers/center-for-wound.png"
                    },
                    {
                        name: "Dental",
                        image: "/images/centers/dental.png"
                    },
                    {
                        name: "Hyperbaric",
                        image:"/images/centers/hyperbaric.png"
                    },
                    {
                        name: "Laboratory",
                        image: "/images/centers/laboratory.png"
                    },
                    {
                        name: "Pulmonary",
                        image: "/images/centers/pulmonary.png"
                    },
                    {
                        name: "Radiation",
                        image: "/images/centers/radiation.png"
                    },
                    {
                        name: "Radiology",
                        image: "/images/centers/radiology.png"
                    },
                    {
                        name: "123123",
                        image: "/images/centers/aesthetics.png"
                    },
                    {
                        name: "Center for Respiratory Care",
                        image: "/images/centers/pulmonary.png"
                    }
                ]
            }
        },
        mounted(){
            this.timer = setInterval(() => {
                this.currentDate = this.getCurrentDate();
                this.currentTime = this.getCurrentTime()
            }, 1000);    
        },
        beforeUnmount(){
            clearInterval(this.timer);
        },
        methods:{
            getCurrentDate(){
                const now = new Date();
                const options = {year: 'numeric', month: 'long', day: 'numeric'};
                const date = now.toLocaleDateString('en-US', options);
                return `${date}`; 
            },
            getCurrentTime(){
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, '0')
                const minutes = now.getMinutes().toString().padStart(2, '0');
                const seconds = now.getSeconds().toString().padStart(2, '0')
                return `${hours}:${minutes}:${seconds}`; 
            },
            
        },
        computed:{
            filteredAvailableServices(){
                if(!this.searchQuery.trim()) return this.availablecenters;
                    return this.availablecenters.filter((center) => center.name.toLowerCase().includes(this.searchQuery.toLowerCase().trim()))
            },
            filteredUnavailableServices(){
                if(!this.searchQuery.trim()) return this.unavailablecenters;
                    return this.unavailablecenters.filter((center) => center.name.toLowerCase().includes(this.searchQuery.toLowerCase().trim()))
            }
        }
       
        
    }

</script>