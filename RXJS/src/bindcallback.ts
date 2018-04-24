import Rx from 'rxjs/Rx';

/**BINDCALLBACK */
function add1(x: number, y: number, callback: Function): number {
    callback(x, y);
    return x + y;
}

const boundSomeFunction1 = Rx.Observable.bindCallback(add);
boundSomeFunction1(3, 5).subscribe((values: Array<number>) => console.log(values));


/**with selector */
function add(x: number, y: number, callback: Function): number {
    callback(x, y);
    return x + y;
}

const boundSomeFunction = Rx.Observable.bindCallback(add, (a: number, b: number) => a + b);
boundSomeFunction(3, 5).subscribe((value: number) => console.log(value));


function iCallMyCallbackSynchronously(cb: Function) {
    cb();
}

const boundSyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');