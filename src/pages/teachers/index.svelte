<script>
  import { session } from "../../stores/session";
</script>

<h1>Teacher Dashboard</h1>

<form on:click|preventDefault={session.logout}>
  <button>Logout</button>
</form>
