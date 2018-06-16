export const cloneObject = (object:Object) => Object.assign({},object)
export const freeze = (object:any) => Object.freeze(object)
export const immutable= (object:Object) => freeze(cloneObject(object))
export const immutableArray = (a:Array<Object>) => freeze(a.map( (i:object) => cloneObject(i)))