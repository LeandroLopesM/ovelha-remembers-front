import { SERVER_ADDR } from "@/conf";

export default async function statelyFetch<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${SERVER_ADDR}/${endpoint}`);
    const json = (await response.json()) as T;
    return json;
}