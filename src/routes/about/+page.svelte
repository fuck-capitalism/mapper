<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

The IP is {data.ip}

{#each data.users as user}
  <div>Email: {user.email}</div>
  <div>Name: {user.name}</div>
	Posts:
  {#each user.posts as post}
    <div>Title: {post.title}</div>
  {/each}
{/each}
