import { Component, OnInit } from '@angular/core';
import { CommonDemoServiceService } from '../services/common-demo-service.service';
import { HttpClientModule } from '@angular/common/http';
import { concatMap, debounceTime, exhaustMap, from, merge, mergeMap, Subject, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers:[CommonDemoServiceService],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.css'
})
export class RxjsOperatorsComponent implements OnInit  {


  constructor(private commonDemoServiceService:CommonDemoServiceService){}
  
  result: string = '';

  ngOnInit(): void {
 
  }

  /**
   * Switches to the latest inner observable. 
   * Previous inner observables are canceled if a new value is emitted.
   */
  testSwitchMap() {
    this.result = 'SwitchMap: Loading...';
    from([1, 2, 3])
      .pipe(
        switchMap((id) => {
          if (id === 1) return this.commonDemoServiceService.apiCall1();
          if (id === 2) return this.commonDemoServiceService.apiCall2();
          return this.commonDemoServiceService.apiCall3();
        })
      )
      .subscribe((res) => {
        this.result = res;
      });
  }
 /**
  * Merges all observables and subscribes to them concurrently.
  * The result will be a combination of all the API calls, 
      but they will appear in the order that they complete, which may not match the order they were triggered.
  * NOTE: mergeMap: Displays the results as they complete, 
      e.g., API Call 2 Result API Call 3 Result API Call 1 Result.
      */
  testMergeMap() {
    this.result = 'MergeMap: Loading...';
    from([1, 2, 3])
      .pipe(
        mergeMap((id) => {
          if (id === 1) return this.commonDemoServiceService.apiCall1();
          if (id === 2) return this.commonDemoServiceService.apiCall2();
          return this.commonDemoServiceService.apiCall3();
        })
      )
      .subscribe((res) => {
        this.result = res;
      });
  }

  /**
   * Waits for each observable to complete before moving on to the next.
   * Displays the results in sequence: API Call 1 Result API Call 2 Result API Call 3 Result.
   * Runs every task, but in sequence.
   * It waits for the current task to finish before starting the next one.
   * No tasks are ignored—they’re just done one after another
   */
  testConcatMap() {
    this.result = 'ConcatMap: Loading...';
    from([1, 2, 3])
      .pipe(
        concatMap((id) => {
          if (id === 1) return this.commonDemoServiceService.apiCall1();
          if (id === 2) return this.commonDemoServiceService.apiCall2();
          return this.commonDemoServiceService.apiCall3();
        })
      )
      .subscribe((res) => {
        this.result = res;
      });
  }
/**Here’s what’s happening:

from([1, 2, 3]) emits 1, then 2, then 3 one after the other.
For each value (starting with 1), 
exhaustMap kicks in and decides which API call to run based on the value.
For 1, it runs apiCall1.
For 2, it runs apiCall2.
For 3, it runs apiCall3.
In exhaustMap, if apiCall1 is still running when 2 or 3 is emitted, 
those emissions will be ignored. 

NOTE:exhaustMap: Only runs the first task, ignores others if a task is already running.
*/
  testExhaustMap() {
    this.result = 'ExhaustMap: Loading...';
    from([1, 2, 3])
      .pipe(
        exhaustMap((id) => {
          if (id === 1) return this.commonDemoServiceService.apiCall1();
          if (id === 2) return this.commonDemoServiceService.apiCall2();
          return this.commonDemoServiceService.apiCall3();
        })
      )
      .subscribe((res) => {
        this.result = res;
      });
  }

  
}
