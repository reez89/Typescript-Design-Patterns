type IAirlineTripFareClass = 'economy' | 'premium_economy' | 'first'

interface IAirlineTripOptions{
    fromDate: Date;
    toDate: Date;
    from: string;
    to: string;
    class: IAirlineTripFareClass
}

// let's create our actual builder.
class AirlineTrip {
    private airlineOptions: IAirlineTripOptions;
    // define an options parameter, in order to avoid writing all the properties.
    constructor(options: IAirlineTripOptions) {
       this.airlineOptions = options;    
    }
    // create all the methods you need to change the properties declared in your interface.
    changeFromDate(newDate: IAirlineTripOptions['fromDate']){
        this.airlineOptions.fromDate = newDate;
        //we return the same object back, to be able to concat all these methods.
        return this
    }
    changeToDate(newDate: IAirlineTripOptions['toDate']){
        this.airlineOptions.toDate = newDate;

        return this
    }
    changeTo(newTo: IAirlineTripOptions['to']){
        this.airlineOptions.to = newTo;
        return this
    }
    changeFrom(newFrom: IAirlineTripOptions['from']){
        this.airlineOptions.from = newFrom;
        return this
    }
    changeClass(newClass: IAirlineTripOptions['class']){
        this.airlineOptions.class = newClass;
        return this
    }
}

const summerTrip = new AirlineTrip(
    {
        from: 'LAX', 
        to: 'MIA', 
        fromDate: new Date(), 
        toDate: new Date('07/23/2022'), 
        class: 'economy'
    }
)
// console.log({summerTrip})

summerTrip
    .changeClass('premium_economy')
    .changeFrom('MOB').changeTo('VCE')
    .changeFromDate(new Date('07/23/2022') )
    .changeToDate(new Date('10/23/2022'))


// console.log({summerTrip})