import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private url = "http://localhost:3000/register" // url del api
    private url2 = "http://localhost:3000/login"

    public logueado: boolean;
    public user: User;
    public userHeader;

    constructor(private http: HttpClient) {

        this.logueado = false;
        this.user = null;

    }

    public postRegister(user: User) {

        return this.http.post(this.url, user)
    }

    public postLogin(user: User) {

        return this.http.post(this.url2, user)
    }

}