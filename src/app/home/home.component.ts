import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  countDown:any= "00:00:00";
  constructor(){

  }

  seconds :number= 0;
   minutes:number = 0;
    hours:number = 0;
    t:any;
    disable_button:boolean=false;

    add(){
      this.seconds++;
      if(this.seconds>=60){
          this.seconds=0;
          this.minutes++;
          if(this.minutes>=60){
            this.minutes=0;
            this.hours++;
          }
      }
     this.countDown= (this.hours ? (this.hours > 9 ? this.hours : "0" + this.hours) : "00") + ":" + (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds);
        
     
    }

    timer(){
      this.t= setInterval((interval)=>{
              this.add();
              
      },1000)
      
    }
   start(){
     this.disable_button=true;
     this.timer();
   }

   pause(){
     this.disable_button=false;
    clearTimeout(this.t);
   }

   clear(){
    this.seconds = 0;
     this.minutes = 0; 
    this.hours = 0;
    this.countDown="00:00:00"
   }

}
