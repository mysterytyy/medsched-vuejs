<template>
    <div class="flex flex-col w-full">
        <div class="mt-10 w-full p-5 flex justify-between max-sm:flex max-sm:flex-col max-sm:justify-center ">
            <div class="w-1/2 flex items-center max-sm:w-full">
            <h1 class="text-left font-[Poppins] text-3xl font-bold">Hello, <span class="text-3xl font-bold">{{ name.firstname }} {{ name.lastname }}</span></h1>
        </div>
        <div class="w-1/4 flex justify-center p-2 rounded-2xl border border-gray-200 cursor-pointer max-sm:w-full max-sm:mt-5">   
            <svg class="w-12 h-12" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#F3F2F2" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 16L16 16M16 16L14 16M16 16L16 14M16 16L16 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 4V2.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 4V2.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21.5 9H16.625H10.75M2 9H5.875" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            <div class="flex flex-col ml-2">
                <p class="text-left font-[Inter] font-bold text-xl">{{ currentDate }}</p>
                <p class="text-left font-[Inter] font-light text-lg">{{ currentTime }}</p>
            </div>
        
            </div>
        </div>
        <div class="flex w-full gap-5 px-3 font-[Poppins] font-normal max-sm:flex max-sm:flex-col">
            <div class="bg-white p-5 w-1/4 shadow-lg rounded-lg flex flex-col max-sm:w-full ">
                <div class="flex flex-row">
                    <svg class="w-6 h-6 border-2 rounded-md border-cyan-400 " viewBox="-1.6 -1.6 19.20 19.20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-1.6" y="-1.6" width="19.20" height="19.20" rx="1.344" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064"></g><g id="SVGRepo_iconCarrier"> <path d="M16 1H12V15H16V1Z" fill="#22d3f8"></path> <path d="M6 5H10V15H6V5Z" fill="#22d3f8"></path> <path d="M0 9H4V15H0V9Z" fill="#22d3f8"></path> </g></svg>
                    <h1 class="ml-2">Total Patients</h1>
                </div>
                <div class="mt-2 flex justify-between">
                    <h1 class="text-left text-3xl font-bold">{{ totalpatients }}</h1>
                    <svg class="w-24 h-24" fill="#22daee" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_1157_" d="M6,82c-0.9,0-1.8-0.2-2.6-0.7c-2.4-1.4-3.1-4.5-1.7-6.9L13.9,54c0.9-1.4,2.4-2.4,4.1-2.4 c1.7-0.1,3.3,0.7,4.3,2.1l5.2,7.2l11-18.8c0.8-1.4,2.4-2.4,4-2.5c1.7-0.1,3.3,0.7,4.3,2l9.6,12.9l25.3-42c1.4-2.4,4.5-3.1,6.9-1.7 c2.4,1.4,3.1,4.5,1.7,6.9L61.2,66c-0.9,1.4-2.4,2.3-4,2.4c-1.7,0.1-3.3-0.7-4.3-2l-9.6-12.8L32.2,72.4c-0.9,1.5-2.4,2.4-4.1,2.5 c-1.7,0.1-3.3-0.7-4.3-2.1l-5.2-7.2l-8.3,13.9C9.4,81.1,7.7,82,6,82z"></path> </g></svg>
                </div>
            </div>
                
            <div class="bg-white p-5 w-1/4 shadow-lg rounded-lg flex flex-col max-sm:w-full">
                <div class="flex flex-row">
                    <svg class="w-6 h-6 border-2 rounded-md border-cyan-400 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <h1 class="ml-2">Employees</h1></div>
                <div class="mt-2 flex justify-between">
                    <h1 class="text-left text-3xl font-bold">{{ employees }}</h1>
                    <svg viewBox="0 0 1024 1024" class="icon w-24 h-24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M405.333333 469.333333h213.333334v426.666667H405.333333zM128 256h213.333333v640H128zM682.666667 128h213.333333v768H682.666667z" fill="#00BCD4"></path></g></svg>
                </div>
                </div>
                
                
            <div class="bg-white p-5 w-1/4 shadow-lg rounded-lg flex flex-col max-sm:w-full">
                <div class="flex flex-row">
                    <svg class="w-6 h-6 border-2 rounded-md border-cyan-400 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <h1 class="ml-2">Appointments</h1></div>

                <div class="mt-2 flex justify-between">
                    <h1 class="text-left text-3xl font-bold">{{ appointments }}</h1>
                    <svg class="w-24 h-24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#22d3ee" d="M10.2,30.913c1.91,0.75,3.871,1.131,5.829,1.131c7.961,0,15.253-6.644,15.922-14.508 c0.036-0.424-0.107-0.794-0.394-1.106C31.275,16.124,30.876,16,30.46,16h-0.247C30.211,8,24,1.789,16,1.787V1.541 c0-0.826-0.625-1.497-1.457-1.497c-0.015,0-0.092,0.004-0.107,0.006C9.894,0.443,5.534,3.113,2.751,7.193 c-2.742,4.02-3.503,8.748-2.155,13.312C1.985,25.207,5.578,29.098,10.2,30.913z M29.213,16H16.598C16.326,16,16,15.674,16,15.402 V2.787C23,2.789,29.211,9,29.213,16z M3.59,7.757c2.616-3.834,6.661-6.343,10.954-6.713c0.28,0,0.457,0.223,0.457,0.497v13.861 C15,16.226,15.774,17,16.598,17H30.46c0.139,0,0.267,0.005,0.361,0.107c0.099,0.107,0.146,0.222,0.134,0.37 c-0.628,7.368-7.463,13.58-14.926,13.58c-1.832,0-3.67-0.363-5.464-1.068c-4.336-1.704-7.702-5.356-9.004-9.764 C0.3,15.954,1.021,11.524,3.59,7.757z"></path> </g> </g></svg>
                </div>
                </div>
                
            <div class="bg-white p-5 w-1/4 shadow-lg rounded-lg flex flex-col max-sm:w-full">
                <div class="flex flex-row">
                    <svg class="w-6 h-6 border-2 rounded-md border-cyan-400 " fill="#22d3ee" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M2,14H5V11H2Zm9,0h3V11H11ZM2,5H5V2H2Zm9-3V5h3V2ZM6.5,5h3V2h-3Zm0,9h3V11h-3ZM11,9.5h3v-3H11Zm-4.5,0h3v-3h-3ZM2,9.5H5v-3H2Z"></path> </g> </g></svg>
                    <h1 class="ml-2">Total Services</h1>

                    
                </div>
                <div class="mt-2 flex justify-between">
                        <h1 class="text-left text-3xl font-bold">{{ totalservices }}</h1>
                        <svg class="w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <linearGradient x1="50" y1="40" x2="50" y2="100" id="LG1" gradientUnits="userSpaceOnUse"> <stop style="stop-color:#22d3ee;stop-opacity:1" offset="0"></stop> <stop style="stop-color:#50daed;stop-opacity:1" offset="1"></stop> </linearGradient> </defs> <path style="fill:#ffffff;stroke:#ffffff;stroke-width:1" d="M 98,2 98,99 2,99 2,2 z"></path> <path style="fill:url(#LG1);stroke:#ffffff;stroke-width:0.5" d="m 3,75 2,0 0,-20 5,0 0,25 5,0 0,-5 5,0 0,10 10,0 0,-70 5,0 0,35 5,0 0,-20 5,0 0,30 5,0 0,20 10,0 0,10 5,0 0,-5 5,0 0,-25 5,0 0,-20 5,0 0,25 5,0 0,15 10,0 0,10 2,0 0,8 -94,0 z"></path> </g></svg>
                        
                    </div>
                
            
            </div>
        </div>
        <div class="flex justify-evenly mt-10 max-sm:flex max-sm:flex-col max-sm:p-2">
            <div class="bg-white w-3/6 font-[Poppins] shadow-lg rounded-lg max-sm:w-full">
                <div class="flex justify-between items-center">
                    <h1 class="text-left ml-2">Patient's Visited</h1>
                    <ul class="flex flex-nowrap text-sm max-sm:text-xs font-medium text-center text-gray-500 cursor-pointer dark:border-gray-700 dark:text-gray-400">
                        <li class="me-2">
                            <a aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-lg active dark:bg-gray-800 dark:text-blue-500">Monthly</a>
                        </li>
                        <li class="me-2">
                            <a class=" inline-block p-4 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Weekly</a>
                        </li>
                        <li class="me-2">
                            <a class="inline-block p-4 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Today</a>
                        </li>
                    </ul>

                </div>
            <div class="flex justify-center">
                <img src="/images/line-graph.png" class="w-11/12 h-full" alt="">
            </div>
        </div>

            <div class="bg-white w-2/6 font-[Poppins] rounded-lg shadow-lg max-sm:w-full max-sm:mt-3">
                <div class="flex justify-between items-center rounded-lg ">
                    <h1 class="text-left ml-2 ">Patient</h1>
                    <select class="outline-none px-3 py-2 rounded-lg border-gray-200" name="" id="">
                        <option value="">Last 7 days</option>
                        <option value="">Last 1 month</option>
                        <option value="">Last 3 months</option>
                    </select>   
                </div>
                <div class="p-2 rounded-lg">
                    <img class="h-96" src="/images/bar-graph.png" alt="">
                </div>
            </div>
        </div>
        

        
    </div>
    
</template>

<script>
    export default {
        name:"AppointmentDashboardView",
        data(){
            return{
                name: {
                    firstname: "John",
                    middlename: "Yoo",
                    lastname: "Doe"
                },
                totalpatients: "7,735",
                employees: 50,
                appointments: 30,
                totalservices: 14,
                currentDate: this.getCurrentDate(),
                currentTime: this.getCurrentTime()
            };
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
            }
        }

      
    }

</script>