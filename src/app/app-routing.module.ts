import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ChannelComponent } from './channel/channel.component';

const routes: Routes = [
  {path: 'customer', component: CustomerComponent},
  {path: 'channel', component: ChannelComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
