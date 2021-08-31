type Awaited<T> = T extends Promise<infer U> ? U : never;

const a: Awaited<Promise<Person>> = {
    name: 'Example',
    age: 27,
    dob: '30/02/3000'
}