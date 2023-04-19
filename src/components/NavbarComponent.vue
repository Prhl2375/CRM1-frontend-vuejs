



<script>
export default {
    props: {
        data: Array,
    },
};
</script>


<script setup>
import axios from "axios";


function logout(){
    axios.post('/logout').then(() => {
        window.location.href = '/';
    });
}


</script>


<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"></a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div v-if="typeof data == 'object'" class="navbar-nav">
                <router-link :to="data[0].path" class="nav-item nav-link active sr-only">{{data[0].name}}</router-link>
                <router-link v-for="url in data[1]" :key="url.path" :to="url.path" class="nav-item nav-link">{{url.name}}</router-link>
            </div>
            <div class="navbar-nav logout">
                <button @click="logout()" type="button" class="btn btn-dark">Logout</button>
            </div>
        </div>
    </nav>
</template>
<style scoped>
#navbarNavAltMarkup {
    justify-content: space-between;
}
.logout {
    margin-right: 2%;
}
.logout button {
    text-transform: uppercase;
    outline: 0;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    cursor: pointer;
}
.logout button:hover,.form button:active,.form button:focus {
    background: #DC4C64;
}
</style>