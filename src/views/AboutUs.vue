<template>
  <div class="contact-us">
    <HeaderOne />
    <MainHeader />
    <div class="contact-header">
    </div>
    <div class="About-image">
      <!-- <img src="@/assets/About Us.png" alt="About Us Image" /> -->
      <div class="overlay-text">
        <h2 class="fontsize">About Us</h2>
        <h2>Building Trust, Driving Performance and Shaping a Better Electronic Feature </h2>
      </div>
    </div>
  </div>
  <section class="about-us-section">
    <div class="container">
      <div class="content-wrapper">
        <!-- Left Side - Text Content -->
        <div class="text-content">
          <h2>Our History</h2>
          <p>
            Founded in 1953, the Institution of Electronics and Telecommunication Engineers (IETE)
            is a leading professional society devoted to the advancement of Science and Technology
            developed to the advancement in the fields of Electronics, Computer, and IT.
            Government of India has recognized IETE as a Scientific and Industrial Research Organization (SIRO) 
            and also notified as an Educational Institution of National Eminence. The IETE serves its more than 
            70,000 members both individuals and industries/organizations through more than 65 centres, spread all 
            over India and abroad.
          </p>
          <h2>IETE Chennai Center</h2>
          <p>
            Chennai Centre of IETE is committed to attaining commanding heights and achieving the
            status of "Centre of Excellence" in Technical, Engineering & Management education by harnessing the 
            best practices in educational innovation and through its concerted endeavors like quality teaching, 
            industrial consultancy and training to the aspirants including corporate training.
          </p>
        </div>

        <!-- Right Side - Images -->
        <div class="image-gallery">
          <div class="main-image">
            <!-- <img src="@/assets/Rectangle 73.png" alt="Rectangle 72" /> -->
          </div>
          <div class="secondary-images">
            <!-- <img src="@/assets/Rectangle 74.png" alt="Rectangle 74" /> -->
            <!-- <img src="@/assets/Rectangle 75.png" alt="Rectangle 75" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <MainFooter />
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
};
</script>

<style scoped>
.about-us-section {
  padding: 40px 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.text-content {
  flex: 1;
  max-width: 50%;
  margin-right: 20px;
}

.text-content h2 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #000;
}

.text-content p {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 20px;
}

.image-gallery {
  display: flex;
  flex-direction: column;
  max-width: 40%;
  flex: 1;
}

.main-image img {
  width: 100%;
  margin-bottom: 20px;
}

.secondary-images {
  display: flex;
  justify-content: space-between;
}

.secondary-images img {
  width: 48%;
}
.fontsize{
    font-size: 20px !important;
}
</style>
