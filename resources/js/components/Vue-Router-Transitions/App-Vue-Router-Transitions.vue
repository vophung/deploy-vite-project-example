<template lang="">
    <div class="content">
        <router-link to="/vue-router-transitions-vue">Home</router-link>
        <router-link to="/vue-router-transitions-vue/guide">Guide</router-link>
        <router-view v-slot="{ Component, route }">
            <!-- transition works with conditional
            rendering v-if
            displaying v-show
            dynamic component
            component root nodes -->
            <!-- <transition name="fade" mode="out-in">  --> 
            <!--  -->
            <!-- use link animated css -->
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutLeft" > 
            <!-- <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass"> -->
                <component :is="Component"></component>
            </transition> 
        </router-view>
    </div>
</template>
<script setup>

</script>
<style>
    .content {
        width: 40%;
        min-width: 500px;
        margin: 0 auto;
        position: relative;
    }

    .page {
        position: absolute;
        top: 30px;
    }

    a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        margin-right: 1em;
    }

    a:hover,
    a.router-link-active {
        border-bottom: 2px solid #3498db;
    }

    .fade-enter-form,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease-out;
    }
</style>