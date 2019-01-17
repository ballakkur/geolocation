import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Router } from "@angular/router";
// import { ToastrService } from 'ngx-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private fb: FormBuilder,
    private appservice: AppService,
    // private toastr:ToastrService
    public router: Router
  ) { }

  ngOnInit() {
  }
  authForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onSubmit = () => {
    console.warn(this.authForm.value);
    this.appservice.signin(this.authForm.value)
      .subscribe((apiResponse) => {
        if (apiResponse.status === 200) {
          // this.toastr.success('you have successfully loggedin', 'welcome');
          console.log(apiResponse);
          Cookie.set('authToken', apiResponse.data.authToken);
          // Cookie.set('receiverId', apiResponse.data.userDetails.userId);
          // Cookie.set('receiverName', `${apiResponse.data.userDetails.firstName} ${apiResponse.data.userDetails.lastName}`);
          this.appservice.setUserInfoInLocalStorage(apiResponse.data.userDetails);
          if (apiResponse.data.userDetails.isadmin == true) {
            setTimeout(() => {
              // this.goToSignIn();
              this.router.navigate(['/admin']);
            }, 2000);//redirect to admins view
          } else {
            setTimeout(() => {
              // this.goToSignIn();
              this.router.navigate(['/geo']);
            }, 2000);//redirecting to geo(regular employee's view)
          }
        }
        else {
          alert(`${apiResponse.message}`)
          // this.toastr.error(`${apiResponse.message}`,`${apiResponse.status}`)
        }
      },

        (error) => {
          console.log(error.error)
          if (error.error.status === 404) {
            // this.toastr.error('user not found',"invalid email");
          }
          else if (error.error.status === 401) {
            // this.toastr.error("wrong Password");
          }
          else {

            // this.toastr.error(`${error.error.message}`, "Error!");
          }
        })
  }
}
