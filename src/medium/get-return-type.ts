type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

const f = (a: string) => {
 return {
   a,
   thing: '123' as const
 }
}

const t: MyReturnType<typeof f> = {
  a: 't',
  thing: '123'
}