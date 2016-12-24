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
        <h1>God Jul Lovisa!</h1>
        <div class="row">
            <div class="center-block rim" [ngClass]="{'show': display['cash']}" (click)="toggleGift('cash')">
                Vart du än hamnar i världen<br />
                Får du stadga och trygghet på färden <br />
                Kanske blir detta en del av din plan <br />
                Eller bara en Lapidus-roman
            </div>
        </div>
        
        <div class="row row-centered marginTop" *ngIf="display['cash']">
            <div class="col-lg-6 col-xs-12 center-block">
                <div class="row row-centered">
                    <div class="center-block lead">
                        <p>500:- till...</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-xs-12">
                        <img class="gift center-block" src="http://www.funnythings.se/shop/image.php?object_type=product&image_id=6559" />
                    </div>
                    <div class="col-lg-2 col-xs-12 gift-text">
                        <p>eller </p>
                    </div>
                    <div class="col-lg-4 col-xs-12">
                        <img class="gift center-block" src="https://shop.textalk.se/shop/ws88/48688/files/STAND_TALL/Responsiv/Artikelgrupper/Varum%C3%A4rken/Flow-bindings-brand-image.jpg" />
                    </div>
                </div>
                <div class="row marginTop">
                    <div class="center-block">
                        <p class="small">(... eller något helt annat)</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row center-block marginTop">
            <div class="center-block">
               <p>- - - - - - - - - - - - - - - - </p>
            </div>
        </div>
        <div class="row marginTop">
            <div class="center-block rim" [ngClass]="{'show': display['photo']}" (click)="toggleGift('photo')">
                Utsmyckning eller bara lite kul? <br />
                Vi prövar något annat denna jul <br />
                Oavsett utkomst blir presenten ej förspilld <br />
                Ty vi skapar en gemensam bild.
            </div>
        </div>
        
        <div class="row row-centered marginTop" *ngIf="display['photo']">
            <div class="col-lg-6 center-block">
                <p class="photo small">
                Ok, så detta är ett försök från min sida att hitta på något utanför de vanliga julklappsramarna, och kanske är det en present lika mycket till mig själv som till er.
                </p>
                <p class="photo">
                    Ni får i uppdrag att välja ut en idé, ett koncept eller ett motiv som jag sedan ska försöka realisera i form av ett eller flera foton som ni får i valfritt format.
                </p>
            </div>
        </div>
        
        
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
    private endDate = "2016/12/24 14:00:00+0100";
    private countDownDone = new Date(new Date().getTime() + 1000) >= new Date(this.endDate);
    private displayCash = false;
    private display = {
        cash: false,
        photo: false,
    };


    private _interval: NodeJS.Timer;

    constructor(){
        this._interval = setInterval(() => {
            if(new Date(new Date().getTime() + 1000) >= new Date(this.endDate)){
                this.countDownDone = true;
                clearInterval(this._interval);
            }
        }, 1000);

    }

    public toggleGift = (gift : string) => {
        this.display[gift] = !this.display[gift];
    }


}
