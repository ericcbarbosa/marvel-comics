import { Injectable } from '@angular/core';

import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class ApiUrlConstructor {

    // Marvel's API:
    private baseUrl: string = 'https://gateway.marvel.com:443/v1/public/';
    private _key: string = 'aa8d0e0af79fcd503131c9c40884c32a79d9b974';
    private key: string = '5e4d7c2657e38bd16e10f2a11af02cde';

    // Query Defaults
    private format: string = 'comic';
    private formatType: string = 'comic';
    private orderBy: string = '-onsaleDate';
    private limitQuery: number = 3;
    private offset: number = 0;

    // Iron Man
    private heroId: number = 1009368;


    getComicsUrl(offset: number = this.offset, limit: number = this.limitQuery): any {
        let timestamp = Number(new Date());
        let hash      = Md5.hashStr(timestamp + this._key + this.key);

        let url: string = `${this.baseUrl}comics?format=${this.format}&formatType=${this.formatType}&orderBy=${this.orderBy}&limit=${limit}&offset=${offset*limit}&ts=${timestamp}&apikey=${this.key}&hash=${hash}`;

        return url;
    }

    getComicsByIdUrl(comicId: number, offset: number = this.offset, limit: number = this.limitQuery): any {
        let timestamp = Number(new Date());
        let hash      = Md5.hashStr(timestamp + this._key + this.key);

        let url: string = `${this.baseUrl}comics/${comicId}?ts=${timestamp}&apikey=${this.key}&hash=${hash}`;

        return url;
    }

    getComicsByHeroIdUrl(
        heroId: number = this.heroId,
        offset: number = this.offset,
        limit: number = this.limitQuery
    ): any {

        let timestamp = Number(new Date());
        let hash      = Md5.hashStr(timestamp + this._key + this.key);

        let url: string = `${this.baseUrl}comics?format=${this.format}&formatType=${this.formatType}&characters=${heroId}&orderBy=${this.orderBy}&limit=${limit}&offset=${offset*limit}&ts=${timestamp}&apikey=${this.key}&hash=${hash}`;

        return url;
    }
}