<template>
    <ul v-for="person in peoples" :key="person.name">
        <li>
            <h2>{{ person.name }}</h2>
        </li>
    </ul>
</template>

<script lang="ts">
const url = 'https://swapi.dev/api/people/';
export default {
    data(): Persons {
        return {
            peoples: [],
        };
    },
    async mounted() {
        try {
            const response = await fetch(url);
            this.peoples = await response.json();
        } catch (e: any) {
            console.warn(e.message);
        }
    },
};

interface Persons {
    peoples: Person[];
}

type Person = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
};
</script>
