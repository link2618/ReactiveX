import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbinxx.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';
const manejaError = ( resp: AjaxError ) => {
    console.warn('error:', resp.message );
    return of({
        ok: false,
        usuarios: []
    });
}

const obs$  = ajax.getJSON( url );

obs$.pipe(
    catchError( manejaError )
)
.subscribe({
    next: val => console.log('next:', val),
    error: err => console.warn('error en subs:', err ),
    complete: () => console.log('complete'),
});
