import { asyncScheduler } from 'rxjs';

// setTimeout (() => {}, 3000);
const saludar  = () => console.log('Hola Mundo');
const saludar2 = name => console.log(`Hola ${ name }`);

// asyncScheduler.schedule( saludar, 2000 );
// asyncScheduler.schedule( saludar2, 2000, 'Nombre' );

// setInterval(() => {}, 3000);
const subs = asyncScheduler.schedule( function(state) {
    console.log('state', state);
    this.schedule( state + 1, 1000 );
}, 3000, 0 );

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 );
