<template lang="">
    <div>
        <!-- Normal input components without child components -->
        <!-- <input type="text" v-model="value"> -->
        <!-- Use child component to input data -->
        <!-- <custom-text-input v-model="value"></custom-text-input> -->
        <!-- Use child component to input data and modifiers -->
        <custom-text-input v-model.no-whitespace="value" v-model:lastName="lastName"/>
        <p>Value: {{ value }}</p>
        <p>Last Name: {{ lastName }}</p>
    </div>
</template>
<script>
import CustomTextInput from './CustomTextInput.vue'

export default {
    data() {
        return {
            value: '',
            lastName: ''
        }
    },

    components: {
        CustomTextInput
    }
}
</script>
<style lang="">
    
</style>