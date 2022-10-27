<script setup>
import { reactive } from "vue";
// import axios from "axios";

const errors = reactive({
    email: "",
    password: "",
});

const form = reactive({
    email: "",
    password: "",
});

function register() {
    if (form.email == "") errors.email = "Please enter your email";
    else errors.email = "";

    if (form.password == "") errors.password = "Please enter your password";
    else errors.password = "";

    if (form.password != "" && form.email != "") {
        errors.email = "";
        errors.password = "";
    }
}
</script>

<template>
    <div class="login">
        <form @submit.prevent="register">
            <fieldset class="form login-form">
                <div>
                    <label for="email">Email:</label>
                    <input name="email" type="email" />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input name="password" type="password" />
                </div>
                <div>
                    <label for="re_password">Confirm password:</label>
                    <input name="re_password" type="password" />
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
