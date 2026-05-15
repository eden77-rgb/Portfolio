/*
* Expérience structure
*
* type : professionel | education | certification 
* titre : string
* entreprise : string
* date : [Date, Date | string] 
* lieu : [Vile, Pays]
* responsabilité / tache : Task[]
* stack : Stack[]
* 
*/

import type { Stack } from "./stacks"

export type Type =
    | "Expérience Professionnelle"
    | "Formation"
    | "Certification"

export type DateValue = Lang<string | number>

export type DateRange = {
    start: DateValue,
    end?: DateValue | 'Present'
}

export type Location = {
    city: string,
    country: string
}

export type Task = {
    content: string
}

export type Lang<T> = {
    fr: T,
    en: T
}

export type Experience = {
    id: number,
    type: Type,
    title: Lang<string>,
    company: string,
    date: DateRange,
    location: Location,
    tasks?: Lang<Task>[],
    stacks?: Stack[],
    link?: string,
    download?: { path: string }
}