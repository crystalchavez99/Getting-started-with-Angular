//ng g s name generates service definition
// the service reads data from local, static data
import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

/*
Injectable decorator tells Angular we can use this
class in the dependency injection.
other parts of app can request an instance of this service

*/
@Injectable({
  // tells angular where service can be injected
  // roots says throughout app
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/locations"
  constructor() { }

  // wherever we unject this service we can request the list
  // no repeat data
  async getAllHousingLocations(): Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined>{
      const data = await fetch(`${this.url}/${id}`)
      return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName,lastName,email)
  }
}
