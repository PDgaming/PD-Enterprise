<script lang="ts">
  import { onMount } from "svelte";
  import type { Post } from "../../types";

  let slug: string = "";
  let post: Post[] = [];
  let error: string = "";

  async function getPostFromDb(slug: string) {
    console.log(slug);

    const response = await fetch("../../api/blog-posts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.status === 200) {
      for (let i = 0; i < result.data.length; i++) {
        if (result.data[i].slug === slug) {
          post = result.data[i];
        }
      }
    } else {
      error = "Error getting posts from datatbase";
    }
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "UTC", // Adjust based on your desired time zone
    };
    //@ts-ignore
    return date.toLocaleDateString("en-US", options);
  }

  onMount(() => {
    slug = window.location.href.slice(27);

    getPostFromDb(slug);
  });
</script>

<div class="post">
  <div class="post">
    {#if post}
      {#if post.title && post.content}
        <h1>
          {post.title}<br />
        </h1>
        {#if post.author_id}
          <b>{post.author_id}</b><br />
        {:else}
          <b>No Author</b><br />
        {/if}
        {formatDate(post.created_at)}<br />
        <br />
        <p>
          {@html post.content}
        </p>
      {:else}
        <h1>Post Not Found.</h1>
      {/if}
    {:else if error}
      <div class="error">
        <h1>
          {error}
        </h1>
      </div>
    {:else}
      <h1>Loading Post...</h1>
    {/if}
  </div>
</div>

<style>
  h1 {
    font-size: 1.5em;
  }
  .post {
    background-color: #272d33;
    margin: 15px;
    padding: 10px;
    min-width: 300px;
    cursor: pointer;
  }
</style>
