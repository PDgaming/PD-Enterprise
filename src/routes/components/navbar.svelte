<script lang="ts">
  import logo from "../images/logo.png"; //imports logo image from images
</script>

<div class="navbar bg-base-200">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
      >
        <li><a href="#home">Home</a></li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#contact-us">Contact</a>
        </li>
      </ul>
    </div>
    <img src={logo} alt="logo" id="navbar-logo" />
    <a href="/" class="btn btn-ghost text-3xl">PD Enterprise</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal text-xl text-white">
      <li><a href="#home">Home</a></li>
      <li>
        <a href="#about-us">About Us</a>
      </li>
      <li>
        <div>
          Products<span
            ><svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25 10.875L14.5 18.125L21.75 10.875"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg></span
          >
        </div>
      </li>
      <li>
        <a href="#contact-us">Contact Us</a>
      </li>
    </ul>
  </div>
</div>

<style>
  :root {
    --image-size: 70px;
  }
  #navbar-logo {
    width: var(--image-size);
    border-radius: 100px;
    cursor: pointer;
    margin-bottom: 10px;
    filter: brightness(0) invert(1);
  }
</style>
