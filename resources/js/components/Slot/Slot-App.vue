<template>
    <slot-vue>
        <template #content>
            <img src="../../../../public/1 - Copy.jpg" alt="">
        </template>
        <template #caption="{source}">
            Source: {{ source }}
        </template>
    </slot-vue>
</template>
<script>
import SlotVue from './Slot-Vue.vue';

export default {
    components: {
        SlotVue,
    },
    // data () {
    //     return {
    //         source: 'Vo Minh Phung 2',
    //     }
    // },
}
</script>
<style>
#app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>