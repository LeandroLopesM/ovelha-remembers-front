const LOCAL_STORAGE = new Map<string, string>()

export function store(data: string, key: string) {
    LOCAL_STORAGE.set(key, data)
}

export function load(key: string): string | undefined {
    return LOCAL_STORAGE.get(key)
}