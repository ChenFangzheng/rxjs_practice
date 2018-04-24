import Rx from 'rxjs/Rx';
import { Observable, Subscription, Observer } from 'rxjs';

Rx.Observable.prototype.multiplyByTen = function multiplyByTen() {
  var input = this;
  return Rx.Observable.create(function subscribe(observer) {
    input.subscribe({
      next: (v) => observer.next(10 * v),
      error: (err) => observer.error(err),
      complete: () => observer.complete()
    });
  });
}
const observable = Rx.Observable.from([1, 2, 3, 4]).multiplyByTen();

observable.subscribe((x: any) => console.log(x));

// function multiplyByTen(input: Observable<any>) {

//     const output = Rx.Observable.create(function subscribe(observer: Observer<any>) {
//         input.subscribe({
//             next: (v: number) => observer.next(10 * v),
//             error: (error: any) => observer.error(error),
//             complete: () => observer.complete()
//         })
//     });

//     return output;
// }

// const input = Rx.Observable.from([1, 2, 3, 4]);
// const output = multiplyByTen(input);
// output.subscribe((x: number) => console.log(x));