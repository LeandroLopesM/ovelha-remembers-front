export type DailyList = {
    items: Array<string>
};

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
    weight: number,
    race: string,
    lastTosa: Date
};

export type OvelhaList = {
    items: Array<Ovelha>
}