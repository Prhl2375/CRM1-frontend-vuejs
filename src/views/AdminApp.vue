<script setup>
import {RouterView} from "vue-router";
import NavbarComponent from "@/components/NavbarComponent.vue";
// import Cookies from "js-cookie";


const NavData = [
    {
        path: '/admin',
        name: 'Home'
    },
    [
        {
            path: '/admin/projects',
            name: 'Projects'
        },
        {
            path: '/admin/users',
            name: 'Users'
        }
    ]
];
</script>

<template>
  <NavbarComponent :data="NavData"/>
  <RouterView/>
</template>