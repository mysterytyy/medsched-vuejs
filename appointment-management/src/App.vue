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

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
