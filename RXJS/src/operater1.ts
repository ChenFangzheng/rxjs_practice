import Rx from 'rxjs/Rx';


/**switchMap */
// const one = Rx.Observable.of(1);
// const three = Rx.Observable.of(3).delay(2000);
// const five = Rx.Observable.of(5).delay(3000);

// const all = Rx.Observable.merge(one, three, five);

// const merged = all.switchMap((val: number) => Rx.Observable.interval(500).take(5));
// merged.subscribe(val => console.log(val));

/**pluck 
 * Like map, but meant only for picking one of the nested properties of every emitted object.
*/
// const clicks = Rx.Observable.fromEvent(document, 'click');
// const tagNames = clicks.pluck('target', 'tagName');
// tagNames.subscribe(x => console.log(x));


/**partition 
 * It's like filter, but returns two Observables: one like the output of filter, and the other with values that did not pass the condition.
*/
// const clicks = Rx.Observable.fromEvent(document, 'click');
// const parts = clicks.partition((ev: any) => ev.target.tagName === 'DIV');
// const clicksOnDivs = parts[0];
// const clicksElsewhere = parts[1];
// clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
// clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));


/**pairwise
 * Puts the current value and previous value together as an array, and emits that.
 */
// const clicks$ = Rx.Observable.fromEvent(document, 'click');
// const pairs$ = clicks$.pairwise();
// const distance$ = pairs$.map((pair: any) => {
//     const x0 = pair[0].clientX;
//     const y0 = pair[0].clientY;
//     const x1 = pair[1].clientX;
//     const y1 = pair[1].clientY;

//     return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
// })

// distance$.subscribe(x => console.log(x));

/**mergeScan
 * 
 */
// const click$ = Rx.Observable.fromEvent(document, 'click');
// const one$ = click$.mapTo(1);
// const seed = 0;
// const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
// count$.subscribe(x => console.log(x));

/**
 * Scan
 * It's like reduce, but emits the current accumulation whenever the source emits a value.
 */
// const clicks = Rx.Observable.fromEvent(document, 'click');
// const ones = clicks.mapTo(3);
// const seed = 0;
// const count = ones.scan((acc, one) => {
//     console.log(`acc: ${acc}  one: ${one}`);
//     return acc + one;
// }, seed);

// count.subscribe((x: number) => console.log(x));

/**
 * MergeMap
 * Maps each value to an Observable, then flattens all of these inner Observables using mergeAll.
 */
// const one = Rx.Observable.of(1);
// const three = Rx.Observable.of(3).delay(2000);
// const five = Rx.Observable.of(5).delay(3000);

// const all = Rx.Observable.merge(one, three, five);

// const merged = all.mergeMap((val: number) => Rx.Observable.interval(500).take(5));
// merged.subscribe(val => console.log(val));

/**groupBy
 * 
 */

// Rx.Observable.of<Object>({ id: 1, name: 'aze1' },
//     { id: 2, name: 'sf2' },
//     { id: 2, name: 'dg2' },
//     { id: 1, name: 'erg1' },
//     { id: 1, name: 'df1' },
//     { id: 2, name: 'sfqfb2' },
//     { id: 3, name: 'qfs3' },
//     { id: 2, name: 'qsgqsfg2' }
// )
//     .groupBy((p: any) => p.id)
//     .flatMap((group$) => group$.reduce((acc, cur) => [...acc, cur], []))
//     .subscribe(p => console.log(p));

/**
 * expand
 */
// const clicks = Rx.Observable.fromEvent(document, 'click');
// const powersOfTwo = clicks.mapTo(1)
//     .expand(x => x === 8 ? Rx.Observable.empty() : Rx.Observable.of(2 * x).delay(1000));

// powersOfTwo.subscribe((x: number) => console.log(x));

/**exhaustMap 
 * Maps each value to an Observable, then flattens all of these inner Observables using exhaust.
*/
// const sourceInterval = Rx.Observable.interval(1000);
// const delayedInterval = sourceInterval.delay(10).take(4);

// const exhaustSub = Rx.Observable.merge(delayedInterval, Rx.Observable.of(true))
//     .exhaustMap(() => sourceInterval.take(5))
//     .subscribe(val => console.log(val));


/**contactMapTo 
 * It's like concatMap, but maps each value always to the same inner Observable.
*/
// const clicks = Rx.Observable.fromEvent(document, 'click');
// const result = clicks.concatMapTo(Rx.Observable.from([10, 1, 2]), (ev: any, input: any, outIndex: number, inIndex: number) => input);

// result.subscribe((x: any) => console.log(x));

/**contactMap
 * Maps each value to an Observable, then flattens all of these inner Observables using concatAll.
 */
// const clicks = Rx.Observable.from([1, 3, 5]);
// const result = clicks.concatMap(ev => Rx.Observable.of(10, 10, 10).map(i => i * ev));

// result.subscribe((x: number) => console.log(x));