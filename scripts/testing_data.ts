import { DailyList, OvelhaList } from "@/app/util/types"

export const TESTING_OLIST: OvelhaList = { items:[
    {
        id: 1,
        name: 'Dalva',
        birthday: new Date(0),
        lastTosa: new Date(0),
        race: 'waa',
        sexo: 'F',
        vacinas: [],
        weight: 380
    },
    {
        id: 2,
        name: 'Delver',
        birthday: new Date(1),
        lastTosa: new Date(1),
        race: 'waaer',
        sexo: 'M',
        vacinas: [],
        weight: 380
    },
]
}

export const TESTING_DLIST: DailyList = { items: [
    'coner',
    'viver',
    'morer'
]
} 