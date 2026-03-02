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
    | "Expérience Professionnelle"
    | "Formation"
    | "Certification"

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
    | "HTML"
    | "CSS"
    | "JavaScript" 
    | "React.js"
    | "Tailwind CSS"
    | "Node.js" 
    | "PHP"
    | "Python"
    | "Java"
    | "SQL"
    | "NoSQL"
    | "Git / Github"
    | "Docker"
    | "Linux"
    | "Three.js"
    | "Xampp"
    | "Unity"
    | "C#"
    | "Jira"
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
    stacks?: Stack[],
    link?: string,
    download?: { path: string }
}