import { ref } from 'vue';

export const useFetch = async (url: string) => {
    const data = ref<Persons | null>(null);
    const error = ref<string | null>(null);

    try {
        const res = await fetch(url);
        const resData = await res.json();
    } catch (err: any) {
        error.value = err.message;
    }

    return { data, error };
};
