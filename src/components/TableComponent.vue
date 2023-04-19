

<script>

export default {
    props:{
        data: Array,
        columns: Array
    }
}
</script>




<template>
    <table>
        <thead>
        <tr>
            <th v-for="column in columns" :key="column">{{column}}</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="element in data" :key="element.id">
            <td v-for="field in element" :key="field">{{field}}</td>
        </tr>
        </tbody>
    </table>
</template>

<style scoped>
*, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #105469;
}
table {
    background: #012B39;
    border-radius: 0.25em;
    border-collapse: collapse;
    margin: 1em;
}
th {
    border-bottom: 1px solid #364043;
    color: #E2B842;
    font-size: 0.85em;
    font-weight: 600;
    padding: 0.5em 1em;
    text-align: left;
}
td {
    color: #fff;
    font-weight: 400;
    padding: 0.65em 1em;
}
.disabled td {
    color: #4F5F64;
}
tbody tr {
    transition: background 0.25s ease;
}
tbody tr:hover {
    background: #014055;
}
</style>
<script setup>
</script>