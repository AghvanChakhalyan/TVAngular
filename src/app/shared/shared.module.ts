import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RemoteControlComponent} from './remote-control/remote-control.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RemoteControlComponent],
  declarations: [RemoteControlComponent]
})
export class SharedModule {
}
