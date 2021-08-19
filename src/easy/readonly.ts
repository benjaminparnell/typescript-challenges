type ReadOnlyType<T> = { readonly [Property in keyof T]: T[Property] }

type Person = {
    name: string,
    age: number,
    dob: string
}

const person: ReadOnlyType<Person> = {
    name: 'Ben',
    age: 27,
    dob: '30/06/1994'
}

person.name = 'Alfie'