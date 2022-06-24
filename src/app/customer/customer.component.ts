import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  users: any;
  constructor(private  usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers(); 
  } 

}
