import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(){
    const users = [
      {userId: 101, userName: 'Elon Musk'},
      {userId: 102, userName: 'Bill Gates'},
      {userId: 103, userName: 'Warren Buffett'}

    ];

    return users;
  }
}
