<script>
  import { session } from "../stores/session";
  import { redirect } from "@sveltech/routify";

  $: if ($session.user) {
    if ($session.user.role === "ADMIN") {
      $redirect("../admins");
    }

    if ($session.user.role === "TEACHER") {
      $redirect("../teachers");
    }

    if ($session.user.role === "STUDENT") {
      $redirect("../students");
    }
  }
</script>

<form on:click|preventDefault={session.login}>
  <button>Login</button>
</form>
