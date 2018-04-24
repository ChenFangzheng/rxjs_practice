import Rx from 'rxjs/Rx';
import { Observable, Observer } from 'rx';

/**Creating Observables */
const observerable = Rx.Observable.create((observer: any) => {
    const id = setInterval(() => {
        observer.next('hi');
    }, 1000);
    return function unsubscribe() {
        clearInterval(id);
    }
})

/**Subscribing to obserables */
const subscription = observerable.subscribe((x: any) => console.log(x));

const subscription3 = observerable.subscribe((x: any) => console.log(`Second subscript ${x}`));

setTimeout(function () {
    subscription.unsubscribe();
}, 3000);

/**Excuting Observerables */
const anotherObserverable = Rx.Observable.create(function subscribe(observer: any) {
    try {
        observer.next(1);
        observer.next(2);
        observer.complete();
    } catch (err) {
        observer.error(err);
    }
})

/**Dispsing Obsevable */
const observerable2 = Rx.Observable.from([10, 20, 30]);
const subscription2 = observerable2.subscribe((x: number) => console.log(x));
subscription2.unsubscribe();



// const observable = Rx.Observable.create(function (observer: any) {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     setTimeout(() => {
//         observer.next(4);
//         observer.complete();
//     }, 1000);
// });

// console.log('just before subscribe');

// observable.subscribe({
//     next: (x: number) => console.log(`Got value:${x}`),
//     error: (error: any) => console.error('some error ocuured:' + error),
//     complete: () => console.log('done')
// })

// const button = document.querySelector('button');
// Rx.Observable.fromEvent(button, 'click')
//     .scan((count: number) => count + 1, 0)
//     .subscribe(count => console.log(`Clicked ${count} times`));

// Rx.Observable.fromEvent(button, 'click')
//     .throttleTime(1000)
//     .scan((count: number) => count + 1, 0)
//     .subscribe(count => console.log(`Clicked ${count} times`));

// Rx.Observable.fromEvent(button, 'click')
//     .throttleTime(1000)
//     .map((event: any) => event.clientX)
//     .scan((count: number, clientX) => count + clientX, 0)
//     .subscribe(count => console.log(`${count}`));