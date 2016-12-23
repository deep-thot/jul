import {Component} from '@angular/core';
import '../styles.css';

@Component({
    selector: 'my-app',

    template: `
    <div *ngIf="!countDownDone" class="vcenter">
        <h1></h1>
        <br />
         <div class="countdown">
            <count-down units="Hours | Minutes | Seconds" [end]="endDate" [text]="text"></count-down>
        </div>
    </div>
    <div *ngIf="countDownDone">
        <h1>God Jul!</h1>
        
    </div>
`,
})
export class AppComponent {
    name = 'Angular';
    text = {
        Hours: ":",
        Minutes: ":",
        Seconds: "",
        MilliSeconds: ""
    };
    private endDate = "2016-12-22T23:34:00+0100";
    private countDownDone = false;


    private _interval: NodeJS.Timer;

    constructor(){
        this._interval = setInterval(() => {
            if(new Date() >= new Date(this.endDate)){
                this.countDownDone = true;
                clearInterval(this._interval);
            }
        }, 1000);

    }


}
