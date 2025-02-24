import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit{

  constructor(private route : Router) {}

  ngOnInit(): void {
    this.startCountdown();
  }

  @Input() init:any=null;

  //COUNTER TO HANDLE COUNTDOWN WHICH WILL CHANGE WITH EVERY TICK
  public counter:number = 0;

  //METHOD TO CREATE A COUNTDOWN
  startCountdown()
  {
    if(this.init && Number(this.init)>0)
    {
      this.counter = Number(this.init);
      //CALL METHOD THAT DOES THE COUNTDOWN
      this.doCountDown();
    }
  }

  doCountDown()
  {
    //SETTIMEOUT ALLOWS US TO CALL WITH SOME DELAY
    setTimeout(()=>{
      this.counter = this.counter-1;
      this.checkCountdown(); //METHOD TO CHECK WE HAVE ARRIVED TO THE END
    },1000);
    //THIS IS GOING TO HAPPEN EVERY SECOND
  }

  checkCountdown()
  {
    //EMIT AN EVENT WITH THE CURRENT COUNT
    //console.log(this.counter);
    if(this.counter == 0)
    {
      //EMIT AN EVENT WHEN COUNTER ENDS
      //console.log('DONE');
      this.route.navigate(['/app-home']);
    }
    else
    {
      this.doCountDown();
    }
  }


}
