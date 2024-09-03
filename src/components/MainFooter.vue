<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-row">
        <div class="footer-column">
          <h3>IETE Chennai Center</h3>
          <p>The IETE is the National Apex Professional body of Electronics and Telecommunication, Computer Science and IT Professionals.</p>
        </div>
        <div class="footer-column">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Awards</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Members</a></li>
            <li><a href="#">Mission and Vision</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">History</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Contacts</h3>
          <p><strong>Location:</strong> No. 37, Conran Smith Road, Gopalapuram, Chennai-600 086</p>
          <p><strong>Call Us:</strong> (044) 28350045</p>
          <p><strong>Mail Us:</strong> <a href="mailto:ietecnet@md3.vsnl.net.in">ietecnet@md3.vsnl.net.in</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="social-links">
          <!-- <a href="#"><img src="@/assets/facebook.png" alt="Facebook"/></a>
          <a href="#"><img src="@/assets/linkedin.png" alt="LinkedIn"/></a>
          <a href="#"><img src="@/assets/instagram.png" alt="Instagram"/></a>
          <a href="#"><img src="@/assets/youtube.png" alt="Youtube"/></a>
          <a href="#"><img src="@/assets/twitter.png" alt="Twitter"/></a> -->
        </div>
        <p>&copy; 2024 IETE Chennai - All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style scoped>
.site-footer {
  background-color: #2c2e54;
  color: #fff;
  padding: 40px 0;
  width: 100%;
}

.footer-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-column {
  width: 22%;
}

.footer-column h3 {
  color: #ffffff;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-column h3::after {
  content: '';
  display: block;
  width: 40px; 
  height: 3px; 
  background-color: #ff6f3c; 
  position: absolute;
  left: 0; 
  bottom: 0; 
}
.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  margin-top: 20px;
  border-top: 1px solid #3a3b68;
  padding-top: 10px;
  flex-wrap: wrap; 
}

.social-links {
  display: flex;
  justify-content: center; 
  align-items: center;
  margin-bottom: 10px;
}

.social-links a {
  margin-right: 15px;
}

.social-links a:last-child {
  margin-right: 0;
}

.social-links a img {
  width: 24px; 
  height: 24px; 
  vertical-align: middlle;
}

.footer-bottom p {
  margin: 0;
  font-size: 14px;
  margin-top: 10px;
}
</style>
