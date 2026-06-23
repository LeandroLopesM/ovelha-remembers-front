import { Ovelha } from "@/scripts/types";
import { newData } from "../components/ovelha/list";

const LOCAL_STORAGE = new Map<string, string>()

function randomDate() {
    const start: Date = new Date(1000, 1, 1);
    const end: Date = new Date(5000, 12, 31);

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function remove<T>(key: string, who: T) {
    let db = JSON.parse(LOCAL_STORAGE.get(key)!) as T[];

    var i = db.indexOf(who) || -1;
    if (i < 0) throw Error(`DB[${key}] Attempt to delete nonexistant value ${JSON.stringify(who)}`);

    db.splice(i, 1);
    LOCAL_STORAGE.set(key, JSON.stringify(db))
}

export function newOvelha() {
    fetch('https://random-word-api.herokuapp.com/word')
        .then(resp => resp.json())
        .then(text => {
            let json = {
                id: 0,
                name: text,
                birthday: randomDate(),
                vacinas: [],
                sexo: text[0],
                peso: Math.random() * 100,
                race: 'ciborgue',
                lastTosa: randomDate()
            } as Ovelha;

            store('ovelhas', JSON.stringify(json));

            console.log(`Criado falso ídolo com sucesso nomeado ${text}`);
            newData(json);
        })
}

export function store(key: string, data: string) {
    console.log(`Added ${key}:${data}`)
    LOCAL_STORAGE.set(key, data)
}

export function load(key: string): string {
    if (LOCAL_STORAGE.get(key) === undefined) {
        console.error(LOCAL_STORAGE)
        throw Error("No such item " + key);
    }

    console.log(`Got ${key}:${LOCAL_STORAGE.get(key) || 'nothing'}`)
    return LOCAL_STORAGE.get(key)!
}