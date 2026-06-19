import { store } from "./storage";

export const TESTING_URI = "https://i.pinimg.com/1200x/43/0e/4b/430e4b54758a1aab08cb1d571f46c307.jpg"

export const TESTING_OLIST = [
    {
        id: 1,
        name: 'Dalva',
        birthday: new Date(0),
        lastTosa: new Date(0),
        race: 'waa',
        sexo: 'F',
        vacinas: [],
        weight: 380,
        photo: TESTING_URI
    },
    {
        id: 2,
        name: 'Delver',
        birthday: new Date(1),
        lastTosa: new Date(1),
        race: 'waaer',
        sexo: 'M',
        vacinas: [],
        weight: 380,
        photo: TESTING_URI
    },
]

export const TESTING_DLIST: Array<string> = [
    'Alimentar',
    'Trocar água',
    'Levar ao pasto',
    'Recolher'
] 

store('ovelhas', JSON.stringify(TESTING_OLIST));
store('tasks', JSON.stringify(TESTING_DLIST));