import Rx from 'rxjs/Rx';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';
import { fromPromise } from 'rxjs/observable/fromPromise';


// const myBadPromise = () => new Promise((resolve: any, reject: any) => { reject('Rejected!') });
// const source = Rx.Observable.timer(1000);

// const example = source.mergeMap(() => Rx.Observable.fromPromise(myBadPromise())
//     .catch(error => Rx.Observable.of(`bad promise: ${error}`)
//     ));

// const subscribe = example.subscribe(val => console.log(val));

// Rx.Observable.of(1, 2, 3, 4, 5)
//     .map(n => {
//         if (n == 4) {
//             throw 'four';
//         }
//         return n;
//     })
//     .catch(err => Rx.Observable.of('I', 'II', 'III', 'IV', 'V'))
//     .subscribe(x => console.log(x));

// Rx.Observable.of(1, 2, 3, 4, 5)
//     .map(n => {
//         if (n === 4) {
//             throw 'four';
//         }
//         return n;
//     })
//     .catch((err, caught) => caught)
//     .take(10)
//     .subscribe(x => console.log(x));

// Rx.Observable.of(1, 2, 3, 4, 5)
//     .map(n => {
//         if (n == 4) {
//             throw 'four';
//         }
//         return n;
//     })
//     .catch(err => {
//         throw 'error in source. details: ' + err;
//     })
//     .subscribe(
//         x => console.log(x),
//         err => console.log(err)
//     )

// Rx.Observable.of(1, 2, 3, 4, 5)
//     .map(n => {
//         if (n === 4) {
//             throw 'four';
//         }
//         return n;
//     })
//     .retry(2)
//     // .catch((err, caught) => caught)
//     // .take(10)
//     .subscribe(x => console.log(x), err => console.error(err));