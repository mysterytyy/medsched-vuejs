<template>
    <aside class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800 border-r-2 border-slate-100 shadow-sm">
        <a href="https://flowbite.com/" class="flex items-center ps-2.5 mb-5 h-1/6 ">
            <svg class="mr-3 h-6 sm:h-9 text-cyan-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path fill="currentColor" d="M60,16H48V4c0-2.211-1.789-4-4-4H20c-2.211,0-4,1.789-4,4v12H4c-2.211,0-4,1.789-4,4v40c0,2.211,1.789,4,4,4 h56c2.211,0,4-1.789,4-4V20C64,17.789,62.211,16,60,16z M24,8h16v8H24V8z M40,44h-4v4c0,2.211-1.789,4-4,4s-4-1.789-4-4v-4h-4 c-2.211,0-4-1.789-4-4s1.789-4,4-4h4v-4c0-2.211,1.789-4,4-4s4,1.789,4,4v4h4c2.211,0,4,1.789,4,4S42.211,44,40,44z"></path>
                </svg>
            <span class="self-center text-xl font-semibold text-black whitespace-nowrap dark:text-white font-[Poppins]">MedSched</span>
        </a>
        <ul class="space-y-32 font-medium mt-10">
            <div class="space-y-3 font-medium mt-10">
                <li>
                <router-link to="/dashboard" active-class="bg-sky-400 text-white" class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white dark:text-white hover:bg-sky-400 dark:hover:bg-gray-700 transition duration-300 ease-in-out group">
                    <svg class="w-7 h-7 fill-current bg-transparent text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white " viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M55.64 22.751H35.09C34.5596 22.751 34.0509 22.9617 33.6758 23.3368C33.3007 23.7118 33.09 24.2205 33.09 24.751V55.571C33.0916 56.1009 33.3028 56.6087 33.6775 56.9834C34.0523 57.3582 34.5601 57.5694 35.09 57.571H55.64C56.1699 57.5694 56.6777 57.3582 57.0525 56.9834C57.4272 56.6087 57.6384 56.1009 57.64 55.571V24.751C57.64 24.2205 57.4293 23.7118 57.0542 23.3368C56.6791 22.9617 56.1704 22.751 55.64 22.751Z" fill="text-gray-900"></path> <path d="M55.64 5.62695H35.09C34.5596 5.62695 34.0509 5.83767 33.6758 6.21274C33.3007 6.58781 33.09 7.09652 33.09 7.62695V17.8969C33.0916 18.4269 33.3028 18.9347 33.6775 19.3094C34.0523 19.6841 34.5601 19.8954 35.09 19.8969H55.64C56.1699 19.8954 56.6777 19.6841 57.0525 19.3094C57.4272 18.9347 57.6384 18.4269 57.64 17.8969V7.62695C57.64 7.09652 57.4293 6.58781 57.0542 6.21274C56.6791 5.83767 56.1704 5.62695 55.64 5.62695Z" fill="text-gray-900"></path> <path d="M28.24 36.451H7.7C6.59543 36.451 5.7 37.3465 5.7 38.451V55.5711C5.7 56.6756 6.59543 57.5711 7.7 57.5711H28.24C29.3446 57.5711 30.24 56.6756 30.24 55.5711V38.451C30.24 37.3465 29.3446 36.451 28.24 36.451Z" fill="text-gray-900"></path> <path d="M28.24 5.62697H7.70002C7.43712 5.62604 7.17661 5.67714 6.93355 5.77733C6.69048 5.87751 6.46964 6.02477 6.28373 6.21068C6.09783 6.39658 5.95054 6.61742 5.85035 6.86049C5.75017 7.10355 5.6991 7.36406 5.70002 7.62697V31.557C5.70002 32.0874 5.91074 32.5961 6.28581 32.9712C6.66088 33.3462 7.16959 33.557 7.70002 33.557H28.24C28.7704 33.557 29.2791 33.3462 29.6542 32.9712C30.0293 32.5961 30.24 32.0874 30.24 31.557V7.62697C30.2409 7.36406 30.1898 7.10355 30.0896 6.86049C29.9895 6.61742 29.8422 6.39658 29.6563 6.21068C29.4704 6.02477 29.2495 5.87751 29.0065 5.77733C28.7634 5.67714 28.5029 5.62604 28.24 5.62697Z" fill="text-gray-900"></path> </g></svg>
                <span class="ms-3 font-[Inter] text-lg text-normal">Dashboard</span>
                
                </router-link> 
            </li>
            <li>
                <router-link to="/appointment" active-class="bg-sky-400 text-white" class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white dark:text-white hover:bg-sky-400 dark:hover:bg-gray-700 transition duration-300 ease-in-out group">
                    <svg class="w-7 h-7 fill-current bg-transparent text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.94028 2C7.35614 2 7.69326 2.32421 7.69326 2.72414V4.18487C8.36117 4.17241 9.10983 4.17241 9.95219 4.17241H13.9681C14.8104 4.17241 15.5591 4.17241 16.227 4.18487V2.72414C16.227 2.32421 16.5641 2 16.98 2C17.3958 2 17.733 2.32421 17.733 2.72414V4.24894C19.178 4.36022 20.1267 4.63333 20.8236 5.30359C21.5206 5.97385 21.8046 6.88616 21.9203 8.27586L22 9H2.92456H2V8.27586C2.11571 6.88616 2.3997 5.97385 3.09665 5.30359C3.79361 4.63333 4.74226 4.36022 6.1873 4.24894V2.72414C6.1873 2.32421 6.52442 2 6.94028 2Z" fill="text-gray-900"></path> <path opacity="0.5" d="M21.9995 14.0001V12.0001C21.9995 11.161 21.9963 9.66527 21.9834 9H2.00917C1.99626 9.66527 1.99953 11.161 1.99953 12.0001V14.0001C1.99953 17.7713 1.99953 19.6569 3.1711 20.8285C4.34267 22.0001 6.22829 22.0001 9.99953 22.0001H13.9995C17.7708 22.0001 19.6564 22.0001 20.828 20.8285C21.9995 19.6569 21.9995 17.7713 21.9995 14.0001Z" fill="text-gray-900"></path> </g></svg>
                <span class="ms-3 font-[Inter] text-lg text-normal">Appointment</span>
                
                
                </router-link> 
            </li>
            <li>
                <router-link to="/idunno" active-class="bg-sky-400 text-white" class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white dark:text-white hover:bg-sky-400 dark:hover:bg-gray-700 transition duration-300 ease-in-out group">
                    <svg class="w-7 h-7 fill-current bg-transparent text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <span class="ms-3 font-[Inter] text-lg text-normal">Inbox</span>
                </router-link> 
            </li>
        </div>
        <div>
            <li>
                <router-link to="/" class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 transition duration-300 ease-in-out group">
                <svg 
                    class="w-7 h-7 text-gray-500 dark:text-gray-400 group-hover:text-white transition duration-300 ease-in-out"  
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="SVGRepo_iconCarrier">
                        <path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12L16 12" 
                            stroke="currentColor" 
                            stroke-width="1.5" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"></path>
                    </g>
                </svg>
                <span class="ms-3 font-[Inter] text-lg">Log out</span>
            </router-link>

            </li>
        </div>
        </ul>
    </div>
</aside>
</template>

<script>
    export default {
        name:"AppointmentSidebarView"
    }
</script>