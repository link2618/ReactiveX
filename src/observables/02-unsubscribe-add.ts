import { Observable, Observer, Subscription } from 'rxjs';

const observer: Observer<any> = {
    next : value => console.log('Next:', value ),
    error: error => console.warn('Error:', error ),
    complete: () => console.info('Completado')
};

const intervalo$ = new Observable<number>( subscriber => {
    let count = 0;

    const interval = setInterval( () => {
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500 );

    // Se ejecuta al llamar el unsubscribe
    return () => {
        clearInterval(interval);
        console.log('Intérvalo destruido');
    }
});

const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

subs1.add(subs2);
subs2.add(subs3);

// const subscriptions: Subscription[] = [];

// subscriptions.push(
//     intervalo$.subscribe( observer ),
//     intervalo$.subscribe( observer ),
//     intervalo$.subscribe( observer )
// );

setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();

    // subscriptions.forEach( sub => sub.unsubscribe());

    console.log('Completado timeout');
}, 6000);
