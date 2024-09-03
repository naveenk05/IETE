<template>
    <div class="contact-us">
      <div class="contact-header">
        <h2>Contact Us</h2>
        <p>Home > Contact Us</p>
      </div>
  
      <div class="contact-form">
        <h3>Have any Questions?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div class="contact-details">
          <div>
            <p><strong>Email Us</strong></p>
            <p>support@example.com</p>
          </div>
          <div>
            <p><strong>Contact Us</strong></p>
            <p>+91 9876543210</p>
          </div>
          <div>
            <p><strong>Center Location</strong></p>
            <p>No. 25, Corner Smith Road, Gopalapuram, Chennai</p>
          </div>
        </div>
        <form @submit.prevent="submitForm">
          <input type="text" v-model="name" placeholder="Your Name" required />
          <input type="email" v-model="email" placeholder="Your Email" required />
          <input type="text" v-model="phone" placeholder="Phone Number" />
          <textarea v-model="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
  
      <div class="map">
        <!-- Include an iframe or a map component here -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
    },
    methods: {
      submitForm() {
        alert(`Message sent by ${this.name}`);
        // Logic to send form data to the server
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-us {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .contact-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .contact-form {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
  }
  
  .contact-details div {
    margin-bottom: 15px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  input, textarea {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #ff6f61;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .map {
    margin-top: 40px;
  }
  
  .map iframe {
    border: none;
    border-radius: 8px;
  }
  </style>
  