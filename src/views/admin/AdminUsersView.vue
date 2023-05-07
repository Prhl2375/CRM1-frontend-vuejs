<script setup>
import {ref} from "vue";
import axios from "axios";
import TableComponent from "@/components/TableComponent.vue";
const users = ref(0);

function dataUpdate(){
    axios.get('/api/users').then((response) => {
        users.value = response.data;
    });
}
dataUpdate();

function deleteUser(value){
    axios.delete('/api/users/' + value).then(() => {
        dataUpdate();
    });
}
</script>


<template>
    <div class="tables">
      <div v-if="users !== 0">
          <TableComponent v-on:delete="deleteUser" :data="users.data" :columns="users.columns" :params="users.params"/>
      </div>
      <h3 v-else class="waiting-for-data">
          Loading...
      </h3>
    </div>
</template>



<style scoped>

.tables{
    text-align: center;
}

.waiting-for-data {
    text-align: center;
    margin-top: 13%;
}
</style>