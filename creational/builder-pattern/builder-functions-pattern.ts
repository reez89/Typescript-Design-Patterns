// let's create an interface to make our obj more clear and understandable.

type IAirlineTripFareClassFc = 'economy' | 'premium_economy' | 'first'

interface IAirlineTripOptions{
    fromDate: Date;
    toDate: Date;
    from: string;
    to: string;
    class: IAirlineTripFareClassFc
}

// let's create our actual builder using a function now.
const  airlineTrip = (options: IAirlineTripOptions) => {
    
    const bookedTrip: IAirlineTripOptions  = {
        fromDate: options.fromDate,
        toDate: options.toDate,
        from: options.from,
        to: options.to,
        class: options.class
    }
   // remember to return the the obj you want to visualize.
    return bookedTrip;
}


// now we can use our builder and pass the data we want to.
const bookedTrip = airlineTrip(
    {
        from: 'LAX', 
        to: 'MIA', 
        fromDate: new Date('10/22/2021'), 
        toDate: new Date('07/23/2022'), 
        class: 'economy'
    }
)

console.log({bookedTrip})

// now we access to out obj, and we can change it's properties, feel free to use a function to change it dinamically for example inside a form or a login template etc...
bookedTrip.from = 'VCE'
bookedTrip.to = 'MTB'
bookedTrip.fromDate = new Date('2022-03-30')
bookedTrip.toDate = new Date('2022-07-30')
bookedTrip.class = 'premium_economy'

console.log({bookedTrip})