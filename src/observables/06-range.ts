import { range, scheduled, observeOn, asyncScheduler } from 'rxjs';

// const src$ = range(1,5, asyncScheduler);
const src1$ = range(-5,10).pipe(observeOn(asyncScheduler));

console.log('inicio');
src1$.subscribe( console.log );
// scheduled(range(1, 5), asyncScheduler).subscribe(console.log);
console.log('fin');
