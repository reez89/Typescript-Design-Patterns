// let's declare an interface for our object
interface Car {
   model: string,
   cost: number,
   year: number,
   description: string,
}
//////////// define the functions that will return the obj with the right specific you need
const modelS = (): Car => {
    const modelSCar: Car = {
        model : "S",
        cost: 77000,
        year: 2021,
        description: "very expansive model S car from Tesla"
    }
    return modelSCar; 
}

const modelX = (): Car => {
    const modelX: Car = {
        model : "X",
        cost: 80000,
        year: 2021,
        description: "very very very very expansive model X car from Tesla"
    }
    return modelX;
}
/////////////

// now let's create a switch case, that switch beetwen our defined functions, in this case using the car type as parameter.
// you can rename this function as you prefer and need, this name has been choosen to make it simplier.

const createFactory = (type: string): Car | undefined | string=> {
    switch(type){
        case "S":
            return modelS();
        case "X":
            return modelX();
        default:
            return `NO CAR MATCHES YOUR MODEL TYPE >>> ${type}`
    }
}

// we can now use this function everywhere by using the import, but for this example i will use it in the same code file.
const modelSCar = createFactory("S");
console.log(modelSCar);
const mdoelXcar = createFactory("X");
console.log(mdoelXcar);
const modelUndefined = createFactory("G");
console.log(modelUndefined);



