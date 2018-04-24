import Rx from 'rxjs/Rx';

const observable1 = Rx.Observable.interval(400);
const observable2 = Rx.Observable.interval(300);

const subscription = observable1.subscribe((x: number) => console.log('first: ' + x));
const childSubscription = observable2.subscribe(x => console.log('second: ' + x));

subscription.add(childSubscription);
// subscription.remove(childSubscription);

setTimeout(() => {
    subscription.unsubscribe();
}, 2000);

// const observable = Rx.Observable.interval(1000);
// const subscription = observable.subscribe((x: number) => console.log(x));
// subscription.unsubscribe();