type Length<T extends any[]> = T['length']

type Tesla = ['tesla', 'model 3', 'model X', 'model Y']

const lengthOfTesla: Length<Tesla> = 4;