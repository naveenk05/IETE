<template>
  <nav class="navbar">
    <!-- Navbar content goes here -->
    <div class="navbar-brand">
      <img :src="logo" alt="Logo">
    </div>
    <ul class="navbar-menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About Us</router-link></li>
      <li><router-link to="/courses">Courses</router-link></li>
      <li><router-link to="/contact">Contact Us</router-link></li>
    </ul>
  </nav>
</template>

<script>
import logo from '../assets/logo.png';

export default {
    name:'AppNavbar',
    data(){
        return{
            logo,
        };
    },

}
</script>

<style>

</style>