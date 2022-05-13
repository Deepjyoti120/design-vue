<template>
  <div>
    <aside class="section">
      <h3>Sign in Anonymously</h3>
      <button class="button" @click="auth.signInAnonymously()">Sign In</button>
    </aside>
    <User>
      <template v-slot:user="{ user }">
        <div v-if="user">
          <H4> {{ user.uid }} dfdf </H4>
          <h4>Class new</h4>
        </div>
      </template>
    </User>
  </div>
</template>

<script>
import User from "./User.vue";
import { auth } from "../../firebase";
export default {
  name: "DashboardCard01",
  data() {
    return {
      User,
      auth,
    };
  },
};
</script>