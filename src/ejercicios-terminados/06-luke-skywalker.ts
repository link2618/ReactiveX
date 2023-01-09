import { zip, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, map } from 'rxjs/operators';

(() =>{
    const SW_API = 'http://swapi.py4e.com';                     
    const getRequest = ( url: string ) => ajax.getJSON<any>(url);

    getRequest(`${SW_API}/api/people/1`).pipe(
        // Respuesta 1
        // switchMap( resp => getRequest( resp.species[0] ) )
        switchMap( resp => zip(of(resp), getRequest( resp.species[0] )) ),
        map( el => ({
            especie: el[1],
            personaje: el[0]
        }))
    ).subscribe( console.log )
})();
