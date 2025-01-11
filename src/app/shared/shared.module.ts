import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SideNavComponent } from './components/side-nav/side-nav/side-nav.component';
import { HeaderComponent } from './components/main-header/header.component';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [HeaderComponent, SideNavComponent],
})
export class SharedModule {}
