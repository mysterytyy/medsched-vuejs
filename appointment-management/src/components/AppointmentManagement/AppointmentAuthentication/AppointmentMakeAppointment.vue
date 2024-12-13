<template>
    <div class="mt-32 w-full flex justify-center h-full">
        <div class="w-4/5 bg-[#E3E4E6] rounded-3xl flex shadow-2xl">
            <div class="w-1/2 bg-[#E3E4E6] z-10 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
                <img class="rounded-3xl m-4 w-11/12" src="https://img.freepik.com/free-vector/appointment-booking-with-calendar-smartphone_23-2148545727.jpg?t=st=1733992804~exp=1733996404~hmac=c64f58a5924fcaa344dfc7e8f26f9982fef349cdd5c4016d0380eb598cb44722&w=740">
            </div>
            <div class="w-1/2 bg-white h-full ml-18 z-20 rounded-r-3xl rounded-tl-3xl shadow-2xl">
                
                <div class="ml-6">
                    <h1 class="text-3xl tracking-wider mt-5 font-extrabold">Begin your Appointment</h1>
                    <p class="font-['Noto_Serif'] font-light mt-5 text-left">Please fill in the patient's information below. </p>
                </div>
                <form action="" class="p-3 w-full mt-5">
                    <div class="w-full flex flex-col items-center">
                        <div class="flex flex-row w-full">
                            <div class="flex flex-row text-left w-full mb-4 p-3 items-center">
                                <div class="w-4/5 flex flex-col ">
                                    <label for="firstname" class="text-left mb-2">First Name</label>
                                    <input required type="text" name="firstname" class="w-4/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                </div>
                                <div class="w-4/5 flex flex-col">
                                    <label for="middlename" class="text-left mb-2">Middle Name</label>
                                    <input required type="text" name="middlename" class="w-4/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"> 
                                </div>
                                <div class="w-4/5 flex flex-col">
                                    <label for="lastname" class="text-left mb-2">Last Name</label>
                                    <input required type="text" name="lastname" class="w-4/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row w-full ">
                            <div class="flex flex-row text-left w-full mb-4 p-3 items-center">
                                <div class="w-4/5 flex flex-col">
                                    <label for="suffix" class="text-left mb-2">Suffix</label>
                                    <input required type="text" name="suffix" class="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                </div>
                                <div class="w-4/5 flex flex-col">
                                    <label for="suffix" class="w-3/4 text-left mb-2">Date of Birth</label>
                                    <input required type="date" name="suffix" class="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row w-full ">
                            <div class="flex flex-row text-left w-full mb-4 p-3 items-center">
                                <div class="w-4/5 flex flex-col">
                                    <label for="gender">Gender</label>
                                        <select name="gender" id="gender" class="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                </div>
                                <div class="w-4/5 flex flex-col">
                                    <label for="civilstatus">Civil Status</label>
                                        <select name="civilstatus" id="civilstatus" class="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                            <option value="male">Single</option>
                                            <option value="female">Married</option>
                                        </select>
                                </div>
                                <div class="w-4/5 flex flex-col">
                                    <label for="nationality">Nationality</label>
                                        <select name="nationality" id="nationality" class="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                            <option value="filipino">Filipino</option>
                                            <option value="chinese">Chinese</option>
                                        </select>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row w-full ">
                            <div class="flex flex-row text-left w-full mb-4 p-3 items-center">
                                <div class="w-4/5 flex flex-col">
                                    <label for="mobilenumber">Mobile Number</label>
                                    <input type="text" name="mobilenumber" id="email" class="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                </div>
                                <div class="w-4/5 flex flex-col">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" id="email" class="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                </div>
                            </div>
                        </div>              
                        <div class="flex w-full ml-6">
                            <input type="checkbox" name="acceptdataprivacy" id="acceptdataprivacy" class="w-4">
                            <label for="acceptdataprivacy" class="ml-2 ">Accept Data Privacy</label>
                        </div>
                    </div>
                    <div class="w-full mt-5">
                        <button type="submit" class="bg-black w-3/4 rounded-xl p-3 text-white mt-3 hover:text-white hover:bg-sky-500 transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out font-medium ">Submit</button>
                    </div>
                </form>
                

            </div>
           
        </div>
    </div>
  
</template>

<script>
export default {
    name: "AuthenticationWalkInBooking",
}
</script>