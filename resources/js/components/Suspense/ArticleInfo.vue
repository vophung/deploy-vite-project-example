<template lang="">
    <!-- fetch data -->
    {{ article }}
</template>
<script>
const getArticleInfo = async () => {
    // wait 3 seconds to mimic API call
    await new Promise(resolve => setTimeout(resolve, 3000));

    const article = {
        title: 'My Vue 3 Article',
        author: 'Vo Minh Phung'
    }

    return article
}

export default {
    async setup() {
        const article = await getArticleInfo()

        return {
            article
        }
    }
}
</script>
<style lang="">
    
</style>