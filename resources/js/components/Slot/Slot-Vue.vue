<template lang="">
    <div>
        <slot name="content">
            <img src="https://i.stack.imgur.com/y9DqT.jpg" alt="">
        </slot>
        <p>
            <slot name="caption" v-bind:source="source">Caption</slot>
        </p>
    </div>
</template>
<script>
export default {
    data () {
        return {
            source: 'Toi Dep Trai',
        }
    },
}
</script>
<style lang="">
    
</style>