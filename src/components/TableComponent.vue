

<script>

export default {
    props:{
        data: Array,
        columns: Array,
        params: {
            type: Array,
            default: null,
            required: false
        }
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
            <td v-if="params.includes('crud')">
                <button @click="$emit('delete', element.id)" class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash">delete</i></button>
            </td>
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
    background: #332D2D;
}
table {
    background: #332D2D;
    border-radius: 0.25em;
    border-collapse: collapse;
    margin: auto;
    width: 75%;
    margin-top: 35px;
    margin-bottom: 35px;
}
th {
    border-bottom: 1px solid #364043;
    color: gray;
    font-size: 0.85em;
    font-weight: 600;
    padding: 0.5em 1em;
    text-align: center;
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
    background: #54B4D3;
}
</style>
<script setup>
</script>