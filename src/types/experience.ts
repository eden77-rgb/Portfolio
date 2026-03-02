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

export type Type =
    | "professionel"
    | "education"
    | "certification"

export type DateValue = string | number

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

export type Stack =
    | ""
    | ""
    | ""

export type Experience = {
    id: number,
    type: Type,
    title: string,
    company: string,
    date: DateRange,
    location: Location,
    tasks?: Task[],
    stacks: Stack[],
    link?: string,
    download?: { path: string }
}