<script setup>

    defineProps({
        title: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        }
    })

</script>

<template>

    <li class="nav-item">
        <RouterLink :to="`${destination}`" class="nav-link" :class="{active}">
            <i class="nav-icon" :class="icon"></i>
            <p>
                {{ title }}
            </p>
        </RouterLink>
    </li>

</template>