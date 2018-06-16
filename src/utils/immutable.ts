export const cloneObject = (object: object) => Object.assign({}, object);
export const freeze = (object: any) => Object.freeze(object);
export const immutable = (object: object) => freeze(cloneObject(object));
export const immutableArray = (a: object[]) => freeze(a.map( (i: object) => cloneObject(i)));
