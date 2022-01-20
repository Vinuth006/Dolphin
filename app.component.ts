import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./Custom.css']
})
export class AppComponent {
  public actual:number=0;
  public result:number=0;
  public power(base:number, exp:number):number {
    var pow = 1;
    for (var i = exp; i > 0; i--) {
        pow = pow * base;
    }
    return pow;
}
public amstrong(n:number):number {
    var countnum = n;
    var amstr = n;
    /*Find the number of digits in the number*/
    console.log(countnum);
    var count:number = 0;
    while (countnum != 0) {
        countnum = Math.floor(countnum / 10);
        count++;
    }
    var sum:number = 0;
    while (amstr != 0) {
        var digit = amstr % 10;
        sum = sum + this.power(digit, count);
        amstr = Math.floor(amstr / 10);
    }
    return sum;
}
    public checkArmstrong():void{
      this.result = this.amstrong(this.actual);
      if(this.result==this.actual){
        alert("The given number " + this.actual + " is an amstrong number");
      }
      else{
        alert("The given number " + this.actual + " is not an amstrong number");
      }
    }
    public isPrime(n:number) {
    var count = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return true;
    }
    else {
        return false;
    }
}
    public express():void{
      var num = this.actual;
      var k = 2;
      while (k <= num) {
        if (this.isPrime(k)) {
          if (this.isPrime(num - k)) {
              alert(num + " = " + k + " + " + (num - k));
          }
      }
      k++;
    }
}
}