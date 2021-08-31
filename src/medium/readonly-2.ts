type ReadOnlyType<T, K extends keyof T = keyof T> = { readonly [Property in K]: T[Property] } & { [Property in keyof T]: T[Property] }

type Person = {
    name: string,
    age: number,
    dob: string
}

const person: ReadOnlyType<Person, 'name' | 'age'> = {
    name: 'Ben',
    age: 27,
    dob: '30/06/1994'
}

person.name = 'Alfie'
person.age = 29
person.dob = 'Can change this'

const allReadOnly: ReadOnlyType<Person> = {
    name: 'Ben',
    age: 27,
    dob: '30/06/1994'
}

person.name = 'Alfie'
person.age = 29
allReadOnly.dob = 'Can\'t change this'

export {}