type MyExclude<T, U> = T extends U ? never : T;

const t: MyExclude<'a' | 'b' | 'c', 'c'> = 'b'