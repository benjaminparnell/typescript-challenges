type DeepReadOnly<T> = { readonly [Property in keyof T]: T extends object ? DeepReadOnly<T[Property]> : T[Property] }

type X = {
    x: {
        a: 1
        b: 'hi'
        z: () => any,
        q: {
            u: 'ip'
        }
    }
    y: 'hey',
}

const deep: DeepReadOnly<X> = {
    x: {
        a: 1,
        b: 'hi',
        z: () => true,
        q: {
            u: 'ip'
        }
    },
    y: 'hey',
}

deep.x.a = 5
deep.x.z = () => false
deep.x.q.u = 'ip'
deep.y = 'hey'

export { }