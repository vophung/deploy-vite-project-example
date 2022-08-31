<template lang="">
    <label for="">First Name: </label>
    <!-- Pass props to parent components -->
    <!-- <input type="text" placeholder="input" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"> -->
    <!-- Modifi white space -->
    <input type="text" placeholder="input" :value="modelValue"
    @input="emitValue('modelValue', $event)">
    <hr>
    <!-- Pass props to parent components -->
    <label for="">Last Name: </label>
    <input type="text" placeholder="input" :value="lastName"
    @input="$emit('update:lastName', $event.target.value)">
</template>
<script>
export default {
    props: {
        lastName: String,
        modelValue: String,
        modelModifiers: Object
    },

    methods: {
        emitValue(propName, evt) {
            let val = evt.target.value

            if(this.modelModifiers['no-whitespace']) {
                val = val.replace(/\s/, '')
            }

            this.$emit(`update:${propName}`, val)
        }
    }
}
</script>
<style lang="">
    
</style>