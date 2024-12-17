<template>
    <div class="mt-32 w-full flex justify-center h-full max-sm:flex">
        <div class="w-2/3 bg-[#E3E4E6] rounded-3xl flex shadow-2xl max-sm:flex max-sm:flex-col max-sm:w-full">
            <div class="w-1/2 bg-[#E3E4E6] z-10 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl max-sm:w-full max-sm:flex max-sm:justify-center max-sm:rounded-none">
                <img class="rounded-3xl m-4 w-11/12 max-sm:w-full max-sm:p-3" src="https://img.freepik.com/free-vector/appointment-booking-with-calendar-smartphone_23-2148545727.jpg?t=st=1733992804~exp=1733996404~hmac=c64f58a5924fcaa344dfc7e8f26f9982fef349cdd5c4016d0380eb598cb44722&w=740">
            </div>
            <div class="w-1/2 bg-white h-full ml-18 max-sm:z-20 z-20 rounded-r-3xl rounded-tl-[150px] rounded-bl-[150px] shadow-2xl max-sm:rounded-none max-sm:w-full">
                <h1 class="text-5xl tracking-wider mt-10 font-extrabold">Welcome!</h1>
                <p class="font-['Noto_Serif'] font-light mt-5">Enter your username and password to access your account</p>
                <form action="" class="flex flex-col items-center p-3 w-full mt-5">
                    <div class="w-full flex flex-col items-center">
                        <div class="flex flex-col text-left w-2/3 mb-4">
                            <label for="username" class="w-1/4 text-left mb-2">Username</label>
                            <input required type="text" name="username" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        </div>
                    
                    <div class="flex flex-col items-start w-2/3 mb-4 ">
                        <label for="password" class="w-1/4 text-left mb-2">Password</label>
                        <input required type="password" name="password" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    </div>
                </div>
                    <div class="flex p-2 w-full">
                        <div class="w-1/2 flex ml-5">
                            <input type="checkbox" id="rememberme" name="rememberme" value="Bike" class="mr-1 w-4">
                            <label for="rememberme">Remember Me</label><br>
                        </div>
                    </div>
                    <div class="w-full mt-5">
                      <router-link to="/dashboard"><button type="submit" class="bg-black w-3/4 rounded-xl p-3 text-white mt-3 hover:text-white hover:bg-sky-500 transition duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out font-medium ">Sign In</button></router-link>   
                    </div>
                </form>
                

            </div>
           
        </div>
    </div>
  
</template>

<script>
export default {
    name: "AuthenticationLogin",
}
</script>