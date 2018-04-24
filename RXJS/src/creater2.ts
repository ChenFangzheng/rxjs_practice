import Rx from 'rxjs/Rx';
import { Observable, Observer } from 'rxjs';

/**fromPromise */

// var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
// result.subscribe(x => console.log(x), e => console.error(e));


/** fromEventPattern */
// function addClickHandler(handler: any) {
//     document.addEventListener('click', handler);
// }

// function removeClickHandler(handler: any) {
//     document.removeEventListener('click', handler);
// }

// const clicks = Rx.Observable.fromEventPattern(
//     addClickHandler,
//     removeClickHandler
// );
// clicks.subscribe(x => console.log(x));


/**fromEvent */
// const clicks = Rx.Observable.fromEvent(document, 'click');
// clicks.subscribe((x:any)=>console.log(x));


/**add more param to addEventLisener */
// const clicksInDocument = Rx.Observable.fromEvent(document, 'click', true);
// const div = document.querySelector('#test');
// const clicksInDiv = Rx.Observable.fromEvent(div, 'click');

// clicksInDocument.subscribe(() => console.log('document'));
// clicksInDiv.subscribe(() => console.log('div'));

/**Of */
// const array = [10, 20, 30];
// const result = Rx.Observable.from(array);
// result.subscribe(x => console.log(x));