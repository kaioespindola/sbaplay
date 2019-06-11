import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AssistirService{
	http:any;
	baseUrl: String;

	constructor(http:Http) {

		this.http = http;
		this.baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.sba1.com';
	}

    getCanais(){
        return this.http.get(this.baseUrl+'/canais')
            .map(res => res.json());
    }
}