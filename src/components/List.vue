<template>
    <div v-if="!loading">
        <ul v-for="person in peoples" :key="person.name">
            <li>
                <h2>{{ person.name }}</h2>
            </li>
        </ul>
    </div>
    <div v-else><p>...Loading</p></div>
    <div v-if="error">
        <p>Oops! An error occurred</p>
    </div>
    <div></div>
</template>

<script lang="ts">
const url = `https://swapi.dev/api/people`;

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
            this.loading = true;

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
        increment() {},
    },
};

type dataProps = {
    peoples: Person[];
    loading: boolean;
    error: boolean;
    next: string | null;
    previous: string | null;
};

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
