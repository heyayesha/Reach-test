import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {


  users: any;
  constructor(private  usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers(); 
  } 

  
  }
