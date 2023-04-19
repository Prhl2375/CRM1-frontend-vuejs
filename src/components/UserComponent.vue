

<script>
export default {
    props: {
        data: Object,
        role: String
    }
}
</script>


<template>
    <div class="container">
        <div class="profile">
            <div class="profile-head">
                <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png">
                <h2 class="profile-name">{{data.name}}</h2>
            </div>
            <h3>your email: {{data.email}}</h3>
            <h3>your role: {{role}}</h3>
            <h3>your id: {{data.id}}</h3>
        </div>
    </div>
</template>


<style scoped>
.profile {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    flex-direction: column;
}

.profile-head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 5%;
}

.profile-head img {
    width: 10%;
}

.profile p{
    margin-top: 5%;
}
</style>