<template lang="">
    <h1>Vue 3 Modal</h1>
    <button @click="isModalOpen = true">Open Modal</button>
    <teleport to='#modal'>
        <!-- animate modal -->
        <transition name="modal">
            <div class="modal-bg" v-if="isModalOpen">
                <div class="modal" ref="modal">
                    <button @click="isModalOpen = false" class="close-btn">x</button>
                    Click outside this modal to close it
                </div>
            </div>
        </transition>
    </teleport>
</template>
<script setup>
import { ref } from 'vue'
// npm i @vueuse/core to use onClickOutside
import { onClickOutside } from '@vueuse/core'

const isModalOpen = ref(false)
const modal = ref(null)

onClickOutside(modal, () => (isModalOpen.value = false))
</script>
<style>
    .modal-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        background-color: rgba(0,0,0,0.5);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        position: relative;
        background: white;
        padding: 50px 100px;
        border-radius: 5px;
        box-shadow: 0px 10px 5px 2px rgba(0,0,0,0.1);
    }

    .modal .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        cursor: pointer;
    }

    .modal-enter-active,
    .modal-leave-active {
        transition: all 0.25s ease;
    }

    .modal-enter-from,
    .modal-leave-to {
        opacity: 0;
        transform: scale(1.1);
    }
</style>