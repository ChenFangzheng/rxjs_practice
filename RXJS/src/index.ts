import Rx from 'rxjs/Rx';
import { Observable, Observer } from 'rx';

const observable = Rx.Observable.create(function (observer: any) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
        observer.complete();
    }, 1000);
});

console.log('just before subscribe');

observable.subscribe({
    next: (x: number) => console.log(`Got value:${x}`),
    error: (error: any) => console.error('some error ocuured:' + error),
    complete: () => console.log('done')
})

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