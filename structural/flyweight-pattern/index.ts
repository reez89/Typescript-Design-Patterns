import axios from 'axios';

const API = 'https://pokeapi.co/api/v2/pokemon'

// declare the interface you will need later on your obj.
interface Pokemon {
    species: {
        name: string;
        url: string;
    }
}

interface PokemonList {
    count: number;
    next: string;
    previous?: any;
    results: {
        name: string;
        url: string;
    }[];
}
////////////

// let's build our FlyeWeight function
const makeURLFlyWeights = <T>(urls: Record<string, string>) => {
    //declare the obj u want to use typed as you need.
    const myObj: Record<string, Promise<T>> = {} ;
    //now let's return a new Proxy, this allow us to clone our obj and return it with the new paramters we need
    return new Proxy(myObj, {
        // here goes the logic you want to implement
        get:(target, name:string) => {
            console.log(`Fetching ${name} ${urls[name]}`)
            if(!target[name]){
                target[name] = axios.get(urls[name]).then(res => res.data)
            }
            return target[name]
        }
    })
}
////////////

// i've used axios because node-fetch gave me troubles during the compile, so this is a simple axios get func.
(async () => {
    let pokemonObj: PokemonList
    let urls: any
    await axios
        .get(API)
        .then((response) => {
            pokemonObj = response.data
            urls = pokemonObj.results?.reduce(
                (acc: any, {name, url}) => ({
                ...acc,
                [name]: url
            }), {})
        })as PokemonList

        // now that we have stored our data, we can use the FlyWeight func.
        const checkIt = makeURLFlyWeights<Pokemon>(urls)
        const data =  await checkIt.bulbasaur;
        console.log(data.species)
        const data2 =  await checkIt.venusaur;
        console.log(data2.species)
        
})()

///////////
