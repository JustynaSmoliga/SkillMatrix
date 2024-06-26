<template>
    <teleport to="body">
        <div @click="$emit('close')" class="modal-window__backdrop"></div>
        <dialog open class="modal-window">
            <section class="modal-window__content">
                <slot></slot>
            </section>
            <menu class="modal-window__buttons">
                <slot name="actions">
                    <BaseButton @click="$emit('close')">Close</BaseButton>
                </slot>
            </menu>
        </dialog>
    </teleport>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
defineEmits(['close']);

</script>

<style scoped lang="scss">
@import '../../assets/scss/variables';

.modal-window {
    position: fixed;
    top: 20vh;
    left: 25%;
    width: 50%;
    z-index: 100;
    border-radius: 12px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: $font-color-dark;

    &__backdrop {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0 1rem 0;
        line-height: 1.5rem;
    }

    &__buttons {
        padding: 1rem;
        display: flex;
        justify-content: center;
        margin: 0;
    }

    // @media (min-width: 768px) {
    //     dialog {
    //         left: calc(50% - 20rem);
    //         width: 40rem;
    //     }
    // }

}
</style>
