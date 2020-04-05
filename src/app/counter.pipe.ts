import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  transform(value : any ): number {
    let today : Date = new Date();
    let todayNotime : any =new Date (today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(todayNotime - value);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && todayNotime > value){
      return dateCounter;
    }else{
      return 0;
    }
  }
  

}