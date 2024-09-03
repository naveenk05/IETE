<template>
  <header class="site-header">
    <div class="header-container">
      <div class="header-left">
        <div class="contact-info">
          <!-- <img src="@/assets/location-icon.png" alt="Location Icon" /> -->
          <span>No. 37, Conran Smith Road, Gopalapuram, Chennai</span>
        </div>
        <div class="contact-info">
          <!-- <img src="@/assets/mail-icon.png" alt="Mail Icon" /> -->
          <span>info@example.com</span>
        </div>
        <div class="contact-info">
          <!-- <img src="@/assets/call-icon.png" alt="Call Icon" /> -->
          <span>+91-9876543222</span>
        </div>
      </div>
      <div class="header-right">
        <div class="social-links">
          <!-- <a href="#"><img src="@/assets/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="@/assets/linkedin.png" alt="LinkedIn" /></a>
          <a href="#"><img src="@/assets/instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="@/assets/youtube.png" alt="YouTube" /></a>
          <a href="#"><img src="@/assets/twitter.png" alt="Twitter" /></a> -->
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
  .site-header {
    background-color: #2c2e54;
    color: #fff;
    padding: 10px 0;
  }
  
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header-left {
    display: flex;
    align-items: center;
  }
  
  .contact-info {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  
  .contact-info img {
    margin-right: 5px;
    width: 16px;
    height: 16px;
  }
  
  .header-right {
    display: flex;
    align-items: center;
  }
  
  .social-links {
    display: flex;
    align-items: center;
  }
  
  .social-links a {
    margin-right: 15px;
  }
  
  .social-links a img {
    width: 24px;
    height: 24px;
    background-color: transparent;
  }
  </style>
  
