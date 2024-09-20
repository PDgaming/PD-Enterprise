<script lang="ts">
  import Navbar from "./components/navbar.svelte";
  import Footer from "./components/footer.svelte";
</script>

<svelte:head>
  <title>PD Enterprise</title>
</svelte:head>

<div class="main">
  <Navbar />
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div id="home">
        <h8 id="grade-app" class="font-bold text-white">PD Enterprise</h8>
        <p class="pt-2 pb-4" id="homep">
          Empowering Students. Simplifying Learning.
        </p>
        <div class="subheadline">
          <p>
            We create innovative student-focused software tools to help you
            learn smarter, not harder. From AI-powered study companions to
            collaborative note-taking, PD Enterprise equips you for success.
          </p>
        </div>
        <div class="buttons">
          <a
            class="btn btn-primary loginButton"
            href="https://grade-app.pages.dev">Explore Grade App</a
          >
          <a
            class="btn btn-primary registerButton"
            href="https://cnotes.pages.dev">Learn More About Cnotes</a
          >
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div class="about-us" id="about-us">
    <div class="title">
      <p>About Us</p>
      <h7 id="about-us">
        <b>PD Enterprise: Built by Students, For Students</b>
      </h7>
    </div>
    <div class="body">
      <p>
        We understand the challenges students face because we've been there
        ourselves. Founded by a student who experienced the struggles of
        juggling classes, studying effectively, and staying organized, PD
        Enterprise is dedicated to creating innovative tools that empower
        students to reach their full potential.
      </p>
      <div class="cards">
        <div class="card">
          <div class="card-content">
            <h3>Our Mission</h3>
            <p>
              We believe every student deserves access to resources that make
              learning engaging, efficient, and collaborative.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h3>Our Vision</h3>
            <p>
              To be the leading provider of student-focused software,
              transforming the way students learn and achieve academic success.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div class="contact" id="contact-us">
    <div class="title">
      <p>Contact Us</p>
      <h7 id="contact-us"
        >Have questions or feedback? We'd love to hear from you!
      </h7>
    </div>
    <div class="body">
      <div class="contact-info">
        <div class="email-container">
          <span class="email-icon"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
              ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              /></svg
            ></span
          >
          <div class="email-text">
            <p>
              Email Address: <br />
              <a href="mailto:pdenterprise@gmail.com">PDEnterprise@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <Footer />
</div>

<style>
  .email-container {
    display: flex;
    align-items: center;
  }

  .email-icon {
    margin-right: 10px;
  }

  .email-icon svg {
    width: 25px;
    height: 25px;
    fill: currentColor; /* This will make the SVG inherit the text color */
  }

  .email-text {
    font-size: 0.7em;
    margin: 0;
  }
  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .card {
    width: 325px;
    overflow: hidden;
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .card-content h3 {
    font-size: 1em;
    margin-bottom: 8px;
    color: white;
  }
  .card-content p {
    color: #9f9f9f;
    font-size: 18px;
    line-height: 1.3;
    padding-bottom: 20px;
  }
  .title {
    color: white;
  }
  .subheadline p {
    width: 60%;
  }
  .title p {
    font-size: 0.8em;
    margin-left: 10px;
  }
  .buttons {
    height: 60px;
    margin-top: 40px;
    margin-bottom: 50px;
  }
  .buttons .loginButton {
    margin-right: 90px;
    margin-bottom: 10px;
  }
  h7 {
    display: block;
    margin-left: 10px;
  }
  .title {
    width: 60%;
  }
  .body {
    margin-left: 10px;
    width: 60%;
  }
  .body svg {
    width: 25px;
    height: 25px;
  }
  .body p {
    font-size: 0.7em;
  }
  .about-us,
  .contact {
    padding-bottom: 45px;
  }
  #homep {
    font-size: 1.7em;
    font-weight: 600;
  }
  #about-us,
  #contact-us {
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .hero p {
    font-size: 1.4em;
  }
  #about-us,
  #contact-us {
    font-size: 1.7em;
  }
  h8 {
    font-size: 5em;
  }
</style>
