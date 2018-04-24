import Rx from 'rxjs/Rx';
import { Observable, Observer } from 'rxjs';

/**Empty: do nothing except emit a complete */

// const result = Rx.Observable.empty().startWith(7);
// result.subscribe((x: number) => console.log(x), null, () => console.log('complete'));
const interval = Rx.Observable.interval(1000);
const result = interval.mergeMap((x: number) => {
    console.log(x);
    return x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
});
result.subscribe(x => console.log(x));
/**defer */
// const clicksOrInterval = Rx.Observable.defer(function () {
//     if (Math.random() > 0.5) {
//         console.log('create a event Observable')
//         return Rx.Observable.fromEvent(document, 'click');
//     } else {
//         console.log('create a interval Obserable');
//         return Rx.Observable.interval(1000);
//     }
// })

// clicksOrInterval.subscribe((x: any) => console.log(x));

/** Create  */

// const observable = Rx.Observable.create(function (observer: Observer<any>) {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);

//     observer.complete();
// });

// observable.subscribe(
//     (value: any) => console.log(value),
//     (err: any) => { },
//     () => console.log('this is then end')
// );


/**Return unsubscribe function */
// const observable1 = Rx.Observable.create((observer: Observer<any>) => {
//     const id = setTimeout(() => observer.next('......'), 5000);

//     return () => { clearTimeout(id); console.log('cleared!') };
// });

// const subscribe1 = observable1.subscribe((value: any) => console.log(value));

// subscribe1.unsubscribe();

