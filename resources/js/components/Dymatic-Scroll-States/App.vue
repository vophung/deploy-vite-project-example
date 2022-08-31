<template lang="">
    <!-- Dynamic Scroll States with Intersection Observer -->
    <main>
        <article>
            <h1>My Article</h1>
            <section v-for="(header, index) in headers" :key="header">
                <h2 :id="index">{{ header }}</h2>
                <p>The World Wide Fund for Nature (WWF1) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.
                    The World Wide Fund for Nature (WWF2) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.
                    The World Wide Fund for Nature (WWF3) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.
                    The World Wide Fund for Nature (WWF4) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.
                    The World Wide Fund for Nature (WWF5) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.
                    The World Wide Fund for Nature (WWF6) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.
                    The World Wide Fund for Nature (WWF7) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.
                    The World Wide Fund for Nature (WWF8) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.
                    The World Wide Fund for Nature (WWF9) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.
                </p>
            </section>
        </article>
        <aside>
            <div>
                <!-- {{ currentSection }} -->
                <a :href="`#${index}`" v-for="(header, index) in headers" :key="header" :class="{ active: index == currentSection }">{{ header }}</a>
            </div>
        </aside>
    </main>
</template>
<script setup>
import { ref, onMounted } from 'vue'

    const headers = [
        'Section 1',
        'Section 2',
        'How this works',
        'Placeholder',
        'Section 5'
    ]

    const currentSection = ref('')

    onMounted(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.intersectionRatio > 0) {
                    currentSection.value = entry.target.getAttribute('id')
                }
            });
        }, {
            rootMargin: '0px 0px -90% 0px'
        })
        document.querySelectorAll('article h2').forEach((section) => {
            observer.observe(section)
        })
    });
</script>
<style>
    #app {
        margin-top: 60px;
        width: 80%;
        margin: 0 auto;
    }

    main {
        display: flex;
    }

    article {
        width: 75%;
        margin-bottom: 500px;
    }

    aside {
        width: 25%;
    }

    aside > div {
        position: sticky;
        top: 20px;
        padding-left: 2em;
    }

    aside > div > a {
        display: block;
        color: #2c3e50;
        text-decoration: none;
        border-left: 1px solid #ccc;
        padding-left: 2em;
    }

    aside a.active {
        font-weight: bold;
        border-color: black;
    }
</style>