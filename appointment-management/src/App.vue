<template>
  <html class="scroll-smooth">
    <router-view />
  </html>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* Reset default browser styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* App-wide styling */
#app {
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; /* Improves text rendering in Webkit browsers */
  -moz-osx-font-smoothing: grayscale; /* Improves text rendering in Firefox on macOS */
  text-align: center; /* Centers text content in the app */
  color: #2c3e50; /* Dark gray text color */
}

html, body{
  overflow-x: hidden;
}

</style>

