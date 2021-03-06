import React from 'React'
import faker  from 'faker'

export class User {
    name : string;
    location : {
        lat : number;
        lng : number;
    }

    constructor() {
        this.name = faker.name.firstName()
        this.location = {
            lta: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }
}
