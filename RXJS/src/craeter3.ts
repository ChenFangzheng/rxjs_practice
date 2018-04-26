import Rx from 'rxjs/Rx';
import { timer } from 'rxjs/observable/timer';
import { map, tap, retryWhen, delayWhen } from 'rxjs/operators';

/**throw */
const interval = Rx.Observable.interval(1000);
const result = interval.mergeMap((x: number) =>
    x === 3 ?
        Rx.Observable.throw('three is bad') :
        Rx.Observable.of('a', 'b', 'c')
);
result.subscribe(x => console.log(x), e => console.error(e));

/**range */
// const numbers = Rx.Observable.range(1, 10);
// numbers.subscribe(x => console.log(x));

/**repeat */
// const soruce = Rx.Observable.of([1, 2, 3]);

// soruce.repeat(3)
//     .mergeMap(val => val)
//     .subscribe((val: number) => console.log(val));

/**Retry When */
//emit value every 1s
// const source = interval(1000);
// const example = source.pipe(
//     map(val => {
//         if (val > 5) {
//             //error will be picked up by retryWhen
//             throw val;
//         }
//         return val;
//     }),
//     retryWhen(errors =>
//         errors.pipe(
//             //log error message
//             tap(val => console.log(`Value ${val} was too high!`)),
//             //restart in 5 seconds
//             delayWhen(val => timer(val * 1000))
//         )
//     )
// );

// const message = interval(1000);
// const delayForFiveSeconds = () => timer(5000);
// const delayWhenExample = message.pipe(delayWhen(delayForFiveSeconds));

// const subscribe = delayWhenExample.subscribe(val => console.log(val));

// const subscribe = example.subscribe(val => console.log(val));

/**interval */
// const numbers = Rx.Observable.of(10, 20, 30);
// const letters = Rx.Observable.of('a', 'b', 'c');
// const interval = Rx.Observable.interval(1000);

// const result = numbers.concat(letters).concat(interval);
// result.subscribe(x => console.log(x));