import { ajax, AjaxError } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err.message );
    return of([]);
}

ajax( url ).pipe(
    map( ev => ev?.response ),
    catchError( atrapaError )
)
.subscribe( users => console.log('usuarios:', users) );
