
const pipe = (...fns ) => x => fns.reduce((v,f) => f(v),x);

const f1 = (arg) => arg * 2;
const f2 = (arg) => arg * 3;

const pipedFunction = pipe(f1,f2);

export default pipedFunction;
