<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { pushState } from "$app/navigation";
  import type { Post } from "../types";

  // Variables
  let error = "";
  let posts: Post[] = [];

  async function getAllPostsFromDb() {
    const response = await fetch("../api/blog-posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.status === 200) {
      posts = result.data.sort(
        //@ts-ignore
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
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
    getAllPostsFromDb();
  });
</script>

<div class="posts">
  {#if posts.length > 0}
    {#each posts as post}
      <div class="post">
        <a href="/blog/{post.slug}">
          <h1>
            {post.title}<br />
          </h1>
        </a>
        {#if post.author_id}
          <b>{post.author_id}</b><br />
        {:else}
          <b>No Author</b><br />
        {/if}
        {formatDate(post.created_at)}<br />
      </div>
    {/each}
  {:else}
    <div class="post">
      {#if error}
        <div class="error">
          <h1>
            {error}
          </h1>
        </div>
      {:else}
        <h1>Loading Posts...</h1>
      {/if}
    </div>
  {/if}
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
  a:hover {
    text-decoration: underline;
  }
</style>
