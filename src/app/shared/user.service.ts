import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private url = "http://localhost:3000/register" // url del api
    private url2 = "http://localhost:3000/login"
    private url3 =  "http://localhost:3000/usuarios"

    public logueado: boolean;
    public user: User;
    public userHeader;

    constructor(private http: HttpClient) {

        this.logueado = false;
        this.user = null;

    }

    public postRegister(user: User) {
        console.log(user);


        return this.http.post(this.url, user)
    }

    public postLogin(user: User) {
        console.log(user);

        return this.http.post(this.url2, user)
    }

    public edit(user:User){
        console.log(user);
        
        return this.http.put(this.url3, user)
    }
}