<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="user">The IP is {data.ip}</div>

{#each data.users as user}
  <div class="user">
    <div><b>Name:</b> {user.name}</div>
    <div><b>Email:</b> {user.email}</div>
  </div>
  Posts:
  {#each user.posts as post}
    <div class="post">
      <div><b>Title:</b> {post.title}</div>
      <div><b>Published:</b> {post.published}</div>
    </div>
  {/each}
  <hr />
{/each}

<style>
  .user,
  .post {
    margin-bottom: 5px;
  }
  .post {
    margin-left: 10px;
  }
  hr {
    width: 100px;
    margin-left: 0;
  }
</style>
