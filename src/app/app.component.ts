import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public TVon: boolean = false;
    public volume: number = 0;
    public channel: number = 1;
    public ok: boolean = false;

    public onTv(event: boolean): void {
        this.TVon = event;
    }

    public onMenu(event: boolean): void {
        this.ok = event;
    }

    public incrementVolume(vol: number): void {

        if (this.volume < 15) {
            this.volume += vol;
        }
    }

    public decrementVolume(vol: number): void {

        if (this.volume > 0) {
            this.volume -= vol;
        }
    }

    public changeChannelUp(cn: number): void {
        if (this.channel < 7) {
            this.channel += cn;
        }
    }

    public changeChannelDown(cn: number): void {
        if (this.channel > 1) {
            this.channel -= cn;
        }
    }
}
