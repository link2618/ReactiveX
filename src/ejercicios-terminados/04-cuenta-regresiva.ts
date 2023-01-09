import { interval } from 'rxjs';
import { map, take } from "rxjs/operators";

(() =>{

    const inicio = 7;
    const countdown$ = interval(700).pipe(
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
        map( i => inicio - i),
        take( inicio + 1 )
    );

    countdown$.subscribe( console.log );
})();
