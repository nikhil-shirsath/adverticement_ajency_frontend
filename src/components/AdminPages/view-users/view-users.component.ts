import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [HttpClientModule],
  providers:[UsersService],
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent implements OnInit{
   user:any={
    userFirstName:"",
    userLastName:"",
    userEmail:"",
    userPassword:"",
    userConfirmPassword:"",
    userMobileNo:"",
    userCity:"",
    userState:"",
    userCountry:""
  }
  UserList: any[] =[];
  constructor(private userService : UsersService){

  }

  ngOnInit(): void {
      this.getAllUsersInformation();
  }

  getAllUsersInformation(){
    this.userService.getAllUsers().subscribe((res:any)=>{
      debugger;
      this.UserList= res;
      console.log(res);
    })
  }

}
