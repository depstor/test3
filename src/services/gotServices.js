export default class SwapiService {

    
    constructor(){
        this._apiBase = 'https://swapi.co/api';
    }

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);


        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResourse('/people/');
        return res.results.map(this._transformCharacter);
        // console.log(res.results[1].name)
    }
    async getCharacter(name){
        const character = await this.getResourse(`/people/${name}`);
        return this._transformCharacter(character);
    }
    async getHeight(height){
        const charHeight = await this.getResourse(`/people/${height}`);
        return this._transformCharacter(charHeight);
    }
    async getMass(mass){
       const charMass = await this.getResourse(`/people/${mass}`);
       return this._transformCharacter(charMass);
    }

    _transformCharacter(char) {
        return {
            name : char.name, 
            gender: char.gender,
            height: char.height, 
            mass: char.mass,
        }
    }

    _transoformFilms(films) {
        return {
            name: films.title,
            characters: films.characters,
            date: films.release_date,

        }
    }

    _transofrmPlanets(planets) {
        return {
            name: planets.name,
            climate: planets.climate,
            terrain: planets.terrain,
            population: planets.population,
        }

    }
}

