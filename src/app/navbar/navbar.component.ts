import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public appservice:AppService,public router:Router) { }

  
  public logout: any = () => {

    this.appservice.logout()
      .subscribe((apiResponse) => {
        console.log(apiResponse)
        if (apiResponse.status === 200) {
          Cookie.deleteAll('authToken');
          localStorage.clear();
          this.router.navigate(['/']);//navigating to login page
        }
        else {
          alert(apiResponse.message);
        }
      }, (err) => {
        alert('some error occured');
      });//end subscribe
  }//end logout

  gotoDashboard(){
    this.router.navigate(['/dashboard'])
  }

}
