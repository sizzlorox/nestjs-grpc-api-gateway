import { Observable } from 'rxjs';

export interface HelloByName {
  name: string;
}

export interface HelloResult {
  result: string;
}

export interface HelloService {
  greet(data: HelloByName): Observable<HelloResult>;
}
