<template>
    <div class="flex flex-col w-full">
        <div class="mt-20 w-full p-5 flex justify-between ">
            <div class="w-1/2 flex items-center">
            <h1 class="text-left font-[Poppins] text-3xl font-bold">Hello, {{ name }}</h1>
        </div>
        <div class="w-1/4 flex justify-center p-2 rounded-2xl border border-gray-200 cursor-pointer">   
            <svg class="w-12 h-12" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#F3F2F2" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 16L16 16M16 16L14 16M16 16L16 14M16 16L16 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 4V2.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 4V2.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21.5 9H16.625H10.75M2 9H5.875" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            <div class="flex flex-col ml-2">
                <p class="text-left font-[Inter] font-bold text-xl">{{ currentDate }}</p>
                <p class="text-left font-[Inter] font-light text-lg">{{ currentTime }}</p>
            </div>
        
        </div>
        </div>
        <div class="w-full mt-10 h-full ">
            <div>
                <h1 class="text-left ml-5 text-2xl font-bold font-[Poppins]">Available Services</h1>
            </div>
            <div class="flex justify-center items-center gap-5 m-5 h-1/3 font-[Inter] text-xl flex-wrap mt-5">
                <div class="bg-sky-400 p-5 h-40 w-1/5 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                    <h1>Service #1</h1>
                </div>   
                <div class="bg-sky-400 p-5 h-40 w-1/5 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                    </svg>
                    <h1>Service #2</h1> 
                </div>
                <div class="bg-sky-400 p-5 h-40 w-1/5 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>

                    <h1>Service #3</h1>
                </div>
                <div class="bg-sky-400 p-5 h-40 w-1/5 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
                    </svg>

                    <h1>Service #4</h1>
                </div>
                <div class="bg-sky-400 p-5 h-40 w-1/5 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                    <h1>Service #5</h1>
                </div>
            </div>
        </div>
        <div class="w-full mt-10 h-full ">
            <div>
                <h1 class="text-left ml-5 text-2xl font-bold font-[Poppins]">Unavailable Services</h1>
            </div>
            <div class="flex justify-center items-center gap-5 m-5 h-1/3 font-[Inter] text-xl flex-wrap mt-5">
                <div class="bg-red-400 p-5 h-40 w-1/5 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>

                    <h1>Service #1</h1>
                </div>   
                <div class="bg-red-400 p-5 h-40 w-1/5 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                    <h1>Service #2</h1>
                </div>
                <div class="bg-red-400 p-5 h-40 w-1/5 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>

                    <h1>Service #3</h1>
                </div>
                <div class="bg-red-400 p-5 h-40 w-1/5 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>

                    <h1>Service #4</h1>
                </div>
                <div class="bg-red-400 p-5 h-40 w-1/5 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>

                    <h1>Service #5</h1>
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
                name: "John Doe",
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