import Rx from 'rxjs/Rx';

/**bufferWhen 
 * Collects values from the past as an array. 
 * When it starts collecting values, it calls a function that returns an Observable that tells when to close the buffer and restart collecting.
*/
const clicks = Rx.Observable.fromEvent(document, 'click');
const buffered = clicks.bufferWhen(() =>
  Rx.Observable.interval(1000 + Math.random() * 4000)
);
buffered.subscribe(x => console.log(x));

/**bufferToggle 
 * Collects values from the past as an array. Starts collecting only when opening emits, 
 * and calls the closingSelector function to get an Observable that tells when to close the buffer.
*/
// //emit value every second
// const sourceInterval = Rx.Observable.interval(1000);
// //start first buffer after 5s, and every 5s after
// const startInterval = Rx.Observable.interval(5000);
// //emit value after 3s, closing corresponding buffer
// const closingInterval = (val: number) => {
//     console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
//     return Rx.Observable.interval(3000);
// };
// //every 5s a new buffer will start, collecting emitted values for 3s then emitting buffered values
// const bufferToggleInterval = sourceInterval
//     .bufferToggle(
//         startInterval,
//         closingInterval
//     );
// //log to console
// //ex. emitted buffers [4,5,6]...[9,10,11]
// const subscribe = bufferToggleInterval.subscribe(val =>
//     console.log('Emitted Buffer:', val)
// );


/**bufferTime
 * Collects values from the past as an array, and emits those arrays periodically in time.
 */
// const interval = Rx.Observable.interval(1000);
// const buffered_time = interval.bufferTime(4000);
// buffered_time.subscribe((x: number[]) => console.log(x));

/**bufferCount
 * Collects values from the past as an array, and emits that array only when its size reaches bufferSize.
 */
// const clicks = Rx.Observable.fromEvent(document, 'click');
// const buffered_count = clicks.bufferCount(2, 1);
// buffered_count.subscribe((x: MouseEvent[]) => console.log(x));

/**    buffer 
 * Collects values from the past as an array, and emits that array only when another Observable emits.
*/

// const clicks = Rx.Observable.fromEvent(document, 'click');
// const interval = Rx.Observable.interval(1000);
// const buffered = interval.buffer(clicks);
// buffered.subscribe((x: number[]) => console.log(x));
