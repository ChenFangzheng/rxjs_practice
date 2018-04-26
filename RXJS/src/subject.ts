import Rx from 'rxjs/Rx';
import { Observable, Subscription } from 'rxjs';

/** AsyncSubject
 * The AsyncSubject is a variant where only the last value of the Observable execution is sent to its observers, 
 * and only when the execution completes.
*/
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

/**ReplaySubject 
 * A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers
*/
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



/**BehaviorSubject 
 * BehaviorSubjects are useful for representing "values over time". 
 * For instance, an event stream of birthdays is a Subject, but the stream of a person's age would be a BehaviorSubject.
 * observerA: 0
 * observerA: 1
 * observerA: 2
 * observerB: 2
 * observerA: 3
 * observerB: 3
*/
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




/**Reference counting 
 * automatically connect when the first Observer arrives, 
 * and automatically cancel the shared execution when the last Observer unsubscribes
*/
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


/**Multicasted Observables 
 * A multicasted Observable uses a Subject under the hood to make multiple Observers see the same Observable execution.
*/

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


/**Subject as a observer 
 * Since a Subject is an Observer, 
 * this also means you may provide a Subject as the argument to the subscribe of any Observable, 
 * like the example below shows:
*/

// const subject1 = new Rx.Subject();

// subject1.subscribe({
//     next: (v: number) => console.log('observerA: ' + v)
// });

// subject1.subscribe({
//     next: (v: number) => console.log('observerB: ' + v)
// });

// const observerable = Rx.Observable.from([1, 2, 3]);

// observerable.subscribe(subject1);




/**Subject as a observerable 
 * A Subject is like an Observable, but can multicast to many Observers. 
 * Subjects are like EventEmitters: they maintain a registry of many listeners.
*/

// const subject = new Rx.Subject();

// subject.subscribe({
//     next: (v: number) => console.log('observerA: ' + v)
// });

// subject.subscribe({
//     next: (v: number) => console.log('observerB: ' + v)
// });

// subject.next(1);
// subject.next(2);