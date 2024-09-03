<template>
  <div class="contact-us">
    <HeaderOne />
    <MainHeader />
    <div class="contact-header">
    </div>
    <div class="contact-image">
      <!-- <img src="@/assets/logo.png" alt="Contact Us Image" /> -->
      <div class="overlay-text">
        <h2>Contact Us</h2>
        <h2>Home >Contact us</h2>
      </div>
    </div>
  </div>
  <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <!-- row and col create here  -->
          <div class="row contact-form">
            <div class="col-6">
              <h3>Have any Questions?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
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
            </div>
            <!-- second col -->
            <div class="col-6">
              <form @submit.prevent="submitForm">
                <input
                  type="text"
                  v-model="name"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  v-model="name"
                  placeholder="Last Name"
                  required
                />
                <input
                  type="email"
                  v-model="email"
                  placeholder="Your Email"
                  required
                />
                <input type="text" v-model="phone" placeholder="Phone Number" />
                <textarea
                  v-model="message"
                  placeholder="Message"
                  required
                ></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  <MainFooter />
  </div>
</template>

<script>
import HeaderOne from '../components/HeaderOne.vue';
import MainHeader from '../components/MainHeader.vue';
import MainFooter from '../components/MainFooter.vue';
  export default {
    components: {
      HeaderOne,
      MainHeader,
      MainFooter,
    },
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
.contact-image {
  position: relative;
  text-align: center;
  margin-bottom: 40px; 
}

.contact-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 6px; 
  font-weight: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
  pointer-events: none; 
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

