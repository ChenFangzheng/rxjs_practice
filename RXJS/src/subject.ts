import Rx from 'rxjs/Rx';
import { Observable, Subscription } from 'rxjs';

/** AsyncSubject*/
var subject = new Rx.AsyncSubject();

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

subject.next(5);
subject.complete();

/**ReplaySubject */
// var subject = new Rx.ReplaySubject(100, 500 /* windowTime */);

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });

// var i = 1;
// setInterval(() => subject.next(i++), 200);

// setTimeout(() => {
//   subject.subscribe({
//     next: (v) => console.log('observerB: ' + v)
//   });
// }, 1000);


// const subject = new Rx.ReplaySubject(3);

// subject.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//     next: (v) => console.log('observerB: ' + v)
// });

// subject.next(5);



/**BehaviorSubject */
// const subject = new Rx.BehaviorSubject(0);

// subject.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// });

// subject.next(1);
// subject.next(2);

// subject.subscribe({
//     next: (v) => console.log('obseverB: ' + v)
// });

// subject.next(3);


/**Reference counting */
// const source = Rx.Observable.interval(500);
// const subject = new Rx.Subject();
// const refCounted = source.multicast(subject).refCount();
// let subscription1: Subscription,
//     subscription2: Subscription;

// console.log('observer A subscribed');
// subscription1 = refCounted.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// });


// setTimeout(() => {
//     console.log('observer B subscribed');
//     subscription2 = refCounted.subscribe({
//         next: (v) => console.log('observerB: ' + v)
//     })
// }, 600);

// setTimeout(() => {
//     console.log('observerA unsubscribed');
//     subscription1.unsubscribe();
// }, 1200);

// setTimeout(() => {
//     console.log('observerB unsubscribed');
//     subscription2.unsubscribe();
// }, 2000);


/**Multicasted Observables */

// const source = Rx.Observable.from([1, 2, 3, 4]);
// const subject = new Rx.Subject();
// const multicasted = source.multicast(subject);

// multicasted.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// });

// multicasted.subscribe({
//     next: (v) => console.log('observerB: ' + v)
// });

// multicasted.connect();


/**Subject as a observer */

// const subject1 = new Rx.Subject();

// subject1.subscribe({
//     next: (v: number) => console.log('observerA: ' + v)
// });

// subject1.subscribe({
//     next: (v: number) => console.log('observerB: ' + v)
// });

// const observerable = Rx.Observable.from([1, 2, 3]);

// observerable.subscribe(subject1);




/**Subject as a observerable */

// const subject = new Rx.Subject();

// subject.subscribe({
//     next: (v: number) => console.log('observerA: ' + v)
// });

// subject.subscribe({
//     next: (v: number) => console.log('observerB: ' + v)
// });

// subject.next(1);
// subject.next(2);