<script setup>
import {RouterView} from "vue-router";
import NavbarComponent from "@/components/NavbarComponent.vue";
// import Cookies from "js-cookie";

const NavData = [
    {
        path: '/',
        name: 'Home'
    },
    [
        {
            path: '/projects',
            name: 'Projects'
        },
    ]
]

</script>

<template>
  <NavbarComponent :data="NavData"/>
  <RouterView/>
</template>