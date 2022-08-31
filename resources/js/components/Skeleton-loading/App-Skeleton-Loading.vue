<template lang="">
    <Suspense>
        <template #default>
            <ProfileCard/>
        </template>
        <template #fallback>
            <ProfileCardSkeleton/>
        </template>
    </Suspense>
</template>
<script setup>
import ProfileCard from './ProfileCard.vue'
import ProfileCardSkeleton from './ProfileCardSkeleton.vue'
</script>
<style>
html, body {
    background-color: #eee;
}
#app {
    color: #2c3e50;
}  
</style>