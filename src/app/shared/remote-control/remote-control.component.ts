import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-remote-control',
    templateUrl: './remote-control.component.html',
    styleUrls: ['./remote-control.component.css']
})
export class RemoteControlComponent implements OnInit {

    @Output()
    public power: EventEmitter<boolean> = new EventEmitter();
    public TVisON: boolean = false;
    @Output()
    public increment: EventEmitter<number> = new EventEmitter();
    @Output()
    public decrement: EventEmitter<number> = new EventEmitter();
    @Output()
    public okEvent: EventEmitter<boolean> = new EventEmitter();
    public menu: boolean = false;
    @Output()
    public channelUp: EventEmitter<number> = new EventEmitter();
    @Output()
    public channelDown: EventEmitter<number> = new EventEmitter();

    public onPower(): void {
        this.TVisON = !this.TVisON;
        this.power.emit(this.TVisON);

    }

    public incrementVolume(): void {
        if (this.TVisON === true) {
            this.increment.emit(1);
        }
    }

    public decrementVolume(): void {
        if (this.TVisON === true) {
            this.decrement.emit(1);
        }
    }

    public onMenyu() {
        if (this.TVisON === true) {
            this.menu = !this.menu;
            this.okEvent.emit(this.menu);
        }
    }

    public changeCannelUp() {
        if (this.TVisON === true) {
            this.channelUp.emit(1);
        }
    }

    public changeChannelDown() {
        if (this.TVisON === true) {
            this.channelDown.emit(1);
        }
    }

    constructor() {
    }

    ngOnInit() {
    }

}
