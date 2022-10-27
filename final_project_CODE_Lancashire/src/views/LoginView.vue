<script setup>
// import HeaderComponent from "../components/HeaderComponent.vue";
</script>

<template>
    <div class="login">
        <form action="/">
            <fieldset class="form login-form">
                <div>
                    <label for="email">Email:</label>
                    <input name="email" type="email" />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input name="password" type="password" />
                </div>
                <button>Login</button>
            </fieldset>
        </form>
    </div>
</template>

<style>
fieldset div {
    width: 150px;
}
fieldset button {
    width: 80px;
    height: 30px;
}
.login {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form {
    width: 250px;
    height: 250px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 7px 6px 20px gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
</style>
