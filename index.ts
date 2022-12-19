import './style.css';
import {
  of,
  map,
  Observable,
  filter,
  from,
  fromEvent,
  timer,
  interval,
  takeUntil,
  switchMap,
  reduce,
  count,
  max,
  min,
  findIndex,
  find,
  take,
  takeLast,
  skip,
  skipLast,
  skipWhile,
  skipUntil,
  every,
  defaultIfEmpty,
  toArray,
  timeout,
  throwError,
  delay,
  timeoutWith,
  concatMap,
  tap,
  mergeMap,
  retry,
  expand,
  timeInterval,
  exhaustMap,
  takeWhile,
  share,
  groupBy,
  pluck,
} from 'rxjs';

// of('World')
//   .pipe(map((name) => `Hello, ${name}!`))
//   .subscribe(console.log);

// var sub = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

// var subs = sub.pipe
// (
//   map((s) => s+1),
//   filter(s => s > 7)
// );
// subs.subscribe(console.log);

//var ev1 = interval(1000);
//ev1.subscribe(console.log);
// const currentDate = new Date();
// const startOfNextMinute = new Date(
//   currentDate.getFullYear(),
//   currentDate.getMonth(),
//   currentDate.getDate(),
//   currentDate.getHours(),
//   currentDate.getMinutes() + 1
// );

// This could be any observable stream
// console.log(startOfNextMinute);

// const source = interval(1000);

//const result = source.pipe(takeUntil(timer(7000)));

//result.subscribe(console.log);

// Open the console in the bottom right to see results.

//timer(0, 10).subscribe(n => console.log('timer', n));
///timer(0,5000).subscribe(n => console.log('timer', n));
//interval(7000).subscribe(n => console.log('interval', n));

// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(switchMap(() => interval(1000)));
// result.subscribe(x => console.log(x));

// const clicksInFiveSeconds = fromEvent(document, 'click').pipe(
//   takeUntil(timer(10000)),
//   map(() => 1) ,
//   reduce((acc, val) => acc + val, 0)
// );
// clicksInFiveSeconds.subscribe((a) => console.log(a));

// const seconds = interval(1000)
//                 .pipe
//                 (
//                 takeUntil(fromEvent(document, 'click')),
//                 reduce((acc,val) => acc + val)
//                 )
// seconds.subscribe((s) => console.log(s));

/*
 */
// of(
//   { age: 7, name: 'Foo' },
//   { age: 5, name: 'Bar' },
//   { age: 9, name: 'Beer' })
//   .pipe
//   //max((a, b) => a.age < b.age ? 1 : -1),
//   // min((a, b) => (a.age > b.age ? -1 : 1))
//   ()
//   .subscribe((x) => console.log(x.name));

// of(5, 4, 7, 2, 8)
//   .pipe(min())
//   .subscribe(x => console.log(x));

// interval(10)
// .pipe(
//   take(10),
//   toArray()
//   ).
// subscribe((x) => console.log(x));

//.subscribe((x) => console.log(x));
// fromEvent(document,'click').pipe(
// takeUntil(interval(5000)),
// map(() => 1),
// defaultIfEmpty('No Values Given')
// )
// .subscribe(x => console.log(x))

// of(
//   { age: 7, name: 'Foo' },
//   { age: 5, name: 'Bar' },
//   { age: 9, name: 'Beer' },
//   { age: 1, name: 'Koo' },
//   { age: 2, name: 'Hoo' },
//   { age: 3, name: 'Zoo' }
// )
//   .pipe(
//map((x) => {x.age + 1}),
//filter(x => x.age > 2),
//find(x => x.age > 5),
//findIndex(x => x.age == 7)
//take(5),
//takeLast(2),
//skip(1),
//skipLast(1)
//skipWhile(x => x.age !=  1),
//takeWhile(x => x.age !=  2)
//skipUntil(x => x < 6)
//every(x => x.age > 0)
//);

// interval(Math.round(Math.random() * 10_000))
//   .pipe(
//     delay(7000),
//     timeoutWith(
//       5000,
//       throwError(() => new CustomTimeoutError())
//     )
//   )
//   .subscribe({
//     next: console.log,
//     error: console.error,
//   });

// class CustomTimeoutError extends Error {
//   constructor() {
//     super('It was too slow');
//     this.name = 'CustomTimeoutError';
//   }
// }

// of('A', 'B', 'C').pipe(
//   concatMap((n) => interval(1000).pipe(
//       take(3),
//       tap({ complete: () => console.log(`Done with ${ n }`) })
//       //map((x) => x),
//       //toArray()
//     )
//   )
// )
//.subscribe((x) => console.log(x));

//of(1);//.subscribe(console.log)
//from('S').subscribe(console.log)

// Merger Map
of('A', 'B').pipe(
  mergeMap((x) =>
    interval(1000).pipe(
      map((y) => x + ' ' + y),
      take(2),
      toArray()
    )
  )
);
//.subscribe(console.log);

of(1, 2, 3, 4, 5, 6).pipe(
  mergeMap((x) => (x < 6 ? of(x) : throwError(() => 'Error'))),
  retry(2)
);
//.subscribe(console.log);

// Concat Map
of('A', 'B').pipe(
  concatMap((x) =>
    interval(1000).pipe(
      map((y) => x + ' ' + y),
      take(5),
      toArray()
    )
  )
);
//.subscribe(console.log);

//interval(2000)
// of(1,2,3,4,5,6,7,8,9)
// .pipe(
// skipWhile(x => x < 5),
// //map(() => 1),
// expand((x) => of(2*x).pipe(delay(1000))),
// take(12),
// tap(x => console.log('--'))
// ).subscribe(console.log)

/*
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  exhaustMap(() => interval(1000).pipe(take(5)))
);
result.subscribe(x => console.log(x));
*/
// fromEvent(document, 'click').pipe(
//   exhaustMap(() => interval(1000).pipe(take(5))),
//   tap((x) => console.log('-------'))
// ).subscribe(x => console.log(x))

// const source = interval(1000).pipe(
//   tap(x => console.log('Processing: ', x)),
//   map(x => x * x),
//   take(2),
//  // share()
// );

// source.subscribe(x => console.log('subscription 1: ', x));
// source.subscribe(x => console.log('subscription 2: ', x));

// of(
//   { id: 1, name: 'JavaScript' },
//   { id: 2, name: 'Parcel' },
//   { id: 2, name: 'webpack' },
//   { id: 1, name: 'TypeScript' },
//   { id: 3, name: 'TSLint' }
// ).pipe(
//   groupBy(p => p.id),
//   mergeMap(group$ => group$.pipe(reduce((acc, cur) => [...acc, cur], []))),
//   tap(() => console.log('--------'))
// )
// .subscribe(p => console.log(p));

// of(
//   { id: 1, name: 'JavaScript' },
//   { id: 2, name: 'Parcel' },
//   { id: 2, name: 'webpack' },
//   { id: 1, name: 'TypeScript' },
//   { id: 3, name: 'TSLint' }
// ).pipe(
//   groupBy(p => p.id,{element : p => p.name}),
//   tap(x => console.log(x)),
//   mergeMap(x => x.pipe(reduce((acc,val) => [...acc,val],[`${x.key}`]))),
//   map(  arr =>  ( {did: parseInt(arr[0],10), values: arr.slice(1)} )   )
// ).subscribe(x => console.log(x));

// fromEvent(document, 'click').pipe(
//   map(() => interval(1000).pipe(take(4))),
//   // mergeMap((x) => x.pipe(reduce((acc, val) => [...acc, val], []))),
//   mergeMap((x) => x),
//   reduce((acc, val) => [...acc, val], []),
//   tap((x) => console.log(x))
// ); //.subscribe();

// const source= from([
// {Title: 'main',BookName : 'Tom'},
// {Title: 'main2',BookName : 'Tom4'},
// ]);

const source = from([
  { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
  //will return undefined when no job is found
  { name: 'Sarah', age: 35 },
]);

source.pipe(pluck('job', 'title'));
//.subscribe(x => console.log(x))

//
//var num = Math.random();
// Cold Observable
var obs = Observable.create((subs) => subs.next(Math.random()));

//obs.subscribe(x => console.log(x));
//obs.subscribe(x => console.log(x));

// Hot Observable
// var num = Math.random();
// var obs = Observable.create((subs) => subs.next(num));

// obs.subscribe(x => console.log(x));
// obs.subscribe(x => console.log(x));

const observable = fromEvent(document, 'click');

// subscription 1
// observable.subscribe((x) => {
//   console.log(x.target); // x position of click
// });

// // // subscription 2
// observable.subscribe((x) => {
//   console.log(x.target); // y position of click
// });

//var cold = obs.pipe(share());
