<script setup>
import {ref} from "vue";
import axios from "axios";
import {useUserStore} from "@/store/auth";
import UserComponent from "@/components/UserComponent.vue";
const user = useUserStore();

const userData = ref(0);

axios.get('/api/user').then((response) => {
  userData.value = response.data;
})

</script>



<template>
    <h3 v-if="userData === 0" class="loading">Loading...</h3>
  <UserComponent v-else :data="userData" :role="user.role"/>
</template>

<style scoped>
.loading {
    text-align: center;
    margin-top: 25%;
}
</style>