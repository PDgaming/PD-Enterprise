<script lang="ts">
  import logo from "../images/logo.png"; //imports logo image from images

  let isDropdownOpen: boolean = false;
</script>

<button class="navbar bg-base-200">
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
        <button
          class="flex items-center"
          on:click={() => (isDropdownOpen = !isDropdownOpen)}
          on:mouseenter={() => (isDropdownOpen = true)}
        >
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
        </button>
        {#if isDropdownOpen}
          <div
            class="dropdown-container"
            style="display: {isDropdownOpen ? 'block' : 'none'}"
            on:mouseleave={() => (isDropdownOpen = false)}
          >
            <div class="bg-base-100 rounded-box z-[1] mt-3 shadow">
              <li><a href="https://grade-ai.pages.dev">Grade-AI</a></li>
              <li><a href="https://cnotes.pages.dev">Cnotes</a></li>
            </div>
          </div>
        {/if}
      </li>
      <li>
        <a href="#contact-us">Contact Us</a>
      </li>
    </ul>
  </div>
</button>

<style>
  :root {
    --image-size: 70px;
  }
  .navbar {
    cursor: default;
  }
  #navbar-logo {
    width: var(--image-size);
    border-radius: 100px;
    cursor: pointer;
    margin-bottom: 10px;
    filter: brightness(0) invert(1);
  }
  .dropdown-container {
    position: absolute;
    top: 50%; /* Position below the Products button */
  }
  /* Style for the dropdown content */
  .dropdown-content {
    background-color: white;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  /* Show the dropdown content when isDropdownOpen is true */
  .dropdown-content[aria-expanded="true"] {
    display: block;
  }
</style>
