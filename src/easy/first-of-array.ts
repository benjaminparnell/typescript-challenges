type First<T extends any[]> = T[0]

type arr1 = ['a', 'b', 'c']

type Head = First<arr1>

const head: Head = "a"
