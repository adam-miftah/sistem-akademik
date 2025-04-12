<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

* {
  font-family: "K2D", sans-serif;
  box-sizing: border-box; 
  max-width: 100%; 
}

body {
  display: flex;
  flex-direction: column;
  height: 100vh; 
  margin: 0;
  padding: 0;
  overflow-x: hidden; 
  overflow-y: scroll; 
}

@media (max-width: 768px) {
  body {
    overflow-x: hidden; /* Pastikan tidak ada scroll horizontal di mobile */
  }
}
</style>
