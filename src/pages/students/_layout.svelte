<script>
  import { redirect } from "@sveltech/routify";
  import { session } from "../../stores/session";

  $: if (!$session.user || $session.user.role !== 'STUDENTS') {
    $redirect("/");
  }
</script>

<slot />
