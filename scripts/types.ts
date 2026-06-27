
export type Vacina = {
    name: string,
    date: Date,
    due: Date
}

export type Ovelha = {
    id: number,
    name: string,
    birthday: Date,
    vacinas: Array<Vacina>,
    sexo: string,
    peso: number,
    race: string,
    lastTosa: Date,
    photo?: string
}

export const defaultOvelha: Ovelha = {
    id: 0,
    name: '',
    birthday: new Date(),
    vacinas: [],
    sexo: '',
    peso: 0,
    race: '',
    lastTosa: new Date(),
}