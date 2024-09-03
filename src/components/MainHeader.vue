<template>
  <header class="app-header">
    <div class="container">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <nav>
        <ul class="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Academics</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped>
.app-header {
  background-color: white;
  padding: 10px 0;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  height: 50px;
}
.nav-list {
  list-style: none;
  display: flex;
  gap: 18px;
}
.nav-list li a {
  color: black;
  text-decoration: none;
}
</style>
