import { Observable } from 'rxjs';

export interface Hello {
  name: string;
}

export interface HelloResult {
  result: string;
}

export interface HelloService {
  greet(data: Hello): Observable<HelloResult>;
  create(data: Hello): Observable<HelloResult>;
}
