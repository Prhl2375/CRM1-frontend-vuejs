<script setup>
import {ref} from "vue";
import axios from "axios";
import TableComponent from "@/components/TableComponent.vue";
const users = ref(0);

axios.get('/api/users').then((response) => {
  users.value = response.data;
});
</script>


<template>
  <p v-if="users !== 0">
      <TableComponent :data="users.data" :columns="users.columns"/>
  </p>
  <h3 v-else class="waiting-for-data">
      Loading...
  </h3>

</template>



<style scoped>
.waiting-for-data {
    text-align: center;
    margin-top: 13%;
}
</style>