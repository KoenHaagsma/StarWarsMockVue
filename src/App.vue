<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TypographyVue from './components/Typography.vue';
import CharactersVue from './components/Characters.vue';
import CharacterFiltersVue from './components/CharacterFilters.vue';
</script>

<template>
    <main>
        <TypographyVue variant="big" text="Star wars universe." />
        <div v-if="!loading">
            <CharacterFiltersVue />
            <CharactersVue :characters="peoples" />
        </div>
        <div v-else><p>...Loading</p></div>
        <div v-if="error">
            <p>Oops! An error occurred</p>
        </div>

        <button v-if="!loading && next" @click="addNextPage">More Characters</button>
    </main>
</template>

<script lang="ts">
const url = 'https://swapi.dev/api/people';

export default {
    data(): dataProps {
        return {
            peoples: [],
            loading: false,
            error: false,
            next: null,
            previous: null,
        };
    },
    async created() {
        const data = await this.getPeople(url);
        this.peoples = data.results;
        this.next = data.next;
        this.previous = data.previous;
    },
    methods: {
        async getPeople(url: string) {
            this.error = false;
            const next = this.next;
            if (!next) this.loading = true;

            try {
                const res = await fetch(url);
                const results = await res.json();
                return results;
            } catch (err: any) {
                this.error = true;
                console.error(err);
            } finally {
                this.loading = false;
            }
        },
        async addNextPage(event: any) {
            event.preventDefault();
            console.log('clicked');
            if (this.next) {
                const data = await this.getPeople(this.next);
                const newArray = this.peoples.concat(data.results);
                console.log(newArray);
                this.peoples = newArray;
            }
        },
    },
};

type dataProps = {
    peoples: Person[];
    loading: boolean;
    error: boolean;
    next: string | null;
    previous: string | null;
};

export type Person = {
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
