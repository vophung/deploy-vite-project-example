<template lang="">
    <div v-if="errMsg">{{ errMsg }}</div>
    <Suspense>
        <template #default>
            <article-info/>
        </template>
        <template #fallback>
            Loading Article...
        </template>
    </Suspense>
</template>
<script>
import ArticleInfo from './ArticleInfo.vue'
import { onErrorCaptured, ref } from 'vue'

export default {
    components: {
        ArticleInfo
    },
    setup () {
        const errMsg = ref(null)

        onErrorCaptured(() => {
            errMsg.value = 'Something went wrong'
        })

        return {
            errMsg
        }
    }
}
</script>
<style lang="">
    
</style>