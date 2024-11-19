<script>
  import "../app.css";
  import Navbar from "./components/navbar.svelte";
  import Footer from "./components/footer.svelte";
</script>

<div class="app">
  <main>
    <Navbar />
    <slot />
    <Footer />
  </main>
</div>
