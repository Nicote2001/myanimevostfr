import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnime } from '../objects/anime.model';

@Injectable({providedIn: 'root'})

export class MenuApiCallerService 
{
    topAnimes: IAnime[] = [];
    constructor(private http : HttpClient)
    {

    }

    public getTopAnimes(): Observable<any>
    {
        return this.http.get<any>('https://api.jikan.moe/v4/top/anime');
    }
}