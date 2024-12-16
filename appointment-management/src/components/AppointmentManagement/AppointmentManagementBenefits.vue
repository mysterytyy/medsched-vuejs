<template>
    <div class="bg-sky-500 w-full mt-52 h-52 py-10 relative">
        <div class="flex flex-row justify-center gap-20 absolute left-1/2 transform -translate-x-1/2 -top-32 z-10 max-sm:flex max-sm:flex-col">
            <div class="bg-white w-64 rounded-lg shadow-lg p-5 flex flex-col items-center hover:bg-sky-500 hover:text-white transition duration-300 cursor-pointer ease-in-out transform hover:-translate-y-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            <h1 class="font-bold text-lg mt-2">Benefits #1</h1>
            <p class="font-light mt-2 font-['Noto_Serif']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto perspiciatis eaque ducimus id eius quia a ipsa nemo tenetur libero voluptas quos labore minus, porro nihil corrupti delectus aliquam?</p>
        </div>
        <div class="bg-sky-500 text-white w-64 rounded-lg shadow-lg p-5 flex flex-col items-center hover:bg-white hover:text-black transition duration-300 cursor-pointer ease-in-out transform hover:-translate-y-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" />
            </svg>

            <h1 class="font-bold text-lg mt-2">Benefits #2</h1>
            <p class="font-light mt-2 font-['Noto_Serif']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto perspiciatis eaque ducimus id eius quia a ipsa nemo tenetur libero voluptas quos labore minus, porro nihil corrupti delectus aliquam?</p>
        </div>
        <div class="bg-white w-64 rounded-lg shadow-lg p-5 flex flex-col items-center hover:bg-sky-500 hover:text-white transition duration-300 cursor-pointer ease-in-out transform hover:-translate-y-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
            <h1 class="font-bold text-lg mt-2">Benefits #3</h1>
            <p class="font-light mt-2 font-['Noto_Serif']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto perspiciatis eaque ducimus id eius quia a ipsa nemo tenetur libero voluptas quos labore minus, porro nihil corrupti delectus aliquam?</p>
        </div>  
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "AppointmentBenefits"
    }
</script>