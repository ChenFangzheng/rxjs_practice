import Rx from 'rxjs/Rx';

const source = Rx.Observable.timer(1000);
const exmaple = source.do(() => console.log('side effect'))
    .mapTo('result');

const subscribe = exmaple.subscribe(val => console.log(val));
const subscribeTwo = exmaple.subscribe(val => console.log(val));

const sharedExample = exmaple.share();
const subscribeThree = sharedExample.subscribe(val => console.log(val));
const subscribeFour = sharedExample.subscribe(val => console.log(val));


/**
 * zip
 */

// const age$ = Rx.Observable.of<number>(27, 25, 29);
// const name$ = Rx.Observable.of<string>('Foo', 'Bar', 'Beer');
// const isDev$ = Rx.Observable.of<boolean>(true, true, false);
// const interval$ = Rx.Observable.interval(1000).take(3);

// Rx.Observable.zip(age$, name$, isDev$, interval$, (age: number, name: string, isDev: boolean, interval: number) => ({ age, name, isDev, interval }))
//     .subscribe(x => console.log(x));

/**
 * Switch
 * Converts a higher-order Observable into a first-order Observable 
 * by subscribing to only the most recently emitted of those inner Observables.
 */
// const clicks = Rx.Observable.fromEvent(document, 'click');
// const higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
// const switched = higherOrder.switch();

// switched.subscribe(x => console.log(x));