
// export default async function statelyFetch<T>(endpoint: string): Promise<T> {
//     const response = await fetch(`${SERVER_ADDR}/${endpoint}`);
//     const json = (await response.json()) as T;
//     return json;
// }

import { load } from "@/scripts/storage";


export default async function statelyFetch<T>(endpoint: string): Promise<T> {
    // const response = await fetch(`${SERVER_ADDR}/${endpoint}`);
    // const json = (await response.json()) as T;

    return JSON.parse(load(endpoint)) as T;
}