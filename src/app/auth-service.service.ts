import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  sLoginKey: string;
  sUserName: string;
  loginKeySub: Subject<string> = new Subject<string>();
  constructor() { }
}
