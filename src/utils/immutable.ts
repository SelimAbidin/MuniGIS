export const cloneObject = (object) => Object.assign({},object)
export const freeze = (object) => Object.freeze(object)
export const immutable= (object) => freeze(cloneObject(object))
export const immutableArray = (array) => freeze(array.map( i => cloneObject(i)))