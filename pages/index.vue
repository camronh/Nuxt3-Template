<template>
    <v-card>
        <v-card-title>
            Home
        </v-card-title>
        <v-card-text>
            {{ result }}
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>

const result = await getPokemon(33)
</script>