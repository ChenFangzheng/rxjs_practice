import { timer } from 'rxjs/observable/timer';
import { interval } from 'rxjs/observable/interval';
import { map, tap, retryWhen, delayWhen } from 'rxjs/operators';

// const message = interval(1000);
// const delayForFiveSeconds = () => timer(5000);
// const delayWhenExample = message.pipe(delayWhen(delayForFiveSeconds));

// const subscribe = delayWhenExample.subscribe(val => console.log(val));


//emit value every 1s
const source = interval(1000);
const example = source.pipe(
    map(val => {
        if (val > 5) {
            //error will be picked up by retryWhen
            throw val;
        }
        return val;
    }),
    retryWhen(errors =>
        errors.pipe(
            //log error message
            tap(val => console.log(`Value ${val} was too high!`)),
            //restart in 5 seconds
            delayWhen(val => timer(val * 1000))
        )
    )
);

// const subscribe = example.subscribe(val => console.log(val));

/**interval */
// const numbers = Rx.Observable.of(10, 20, 30);
// const letters = Rx.Observable.of('a', 'b', 'c');
// const interval = Rx.Observable.interval(1000);

// const result = numbers.concat(letters).concat(interval);
// result.subscribe(x => console.log(x));