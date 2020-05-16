import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class AppService{
    public test;
    //private modals: any[] = [];

    constructor(private http:HttpClient){
        this.test = "";
}

}