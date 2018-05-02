import Rx from 'rxjs/Rx';

/**
 * windowWhen
 * 
 * Close window at provided time frame emitting observable of collected values from source.
 */
const source = Rx.Observable.timer(0, 1000);
const example = source.windowWhen(() => Rx.Observable.interval(5000)).do(() => console.log('New Window'));

const subscribeTwo = example.mergeAll().subscribe(val => console.log(val));

/**
 * windowToggle
 * Collect and emit observable of values from source between opening and closing emission.
 */
// const source = Rx.Observable.timer(0, 1000);
// const toggle = Rx.Observable.interval(5000);
// const example = source.windowToggle(toggle, val => Rx.Observable.interval(1000 * val))
//     .do(_ => console.log('NEW WINDOW'));

// const subscribeTwo = example.mergeAll().subscribe(val => console.log(val));


/**
 * windowCount
 * It's like bufferCount, but emits a nested Observable instead of an array.
 */
// const source = Rx.Observable.interval(1000);
// const example = source.windowCount(4).do(_ => console.log('NEW WINDOW'));

// const subscribeTwo = example.mergeAll().subscribe(val => console.log(val));

/**window 
 * It's like buffer, but emits a nested Observable instead of an array.
*/
// const source = Rx.Observable.timer(0, 1000);
// const example = source.window(Rx.Observable.interval(3000));
// const count = example.scan((acc, curr) => acc + 1, 0);

// const subscribe = count.subscribe(val => console.log(`window ${val}:`));
// const subscribeTwo = example.mergeAll()
//     .subscribe(val => console.log(val));