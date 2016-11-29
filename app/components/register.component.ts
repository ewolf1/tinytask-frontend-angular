import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  
<img src="components/images/test.png" id="logo" class="img-thumbnail" >

<div id="loginform">
    <h2>Registrieren</h2>
    <form action="#/">
        Username: <input name="Username" type="text" ng-model="username">
        email: <input name="email" type="email" ng-model="email">
        <br>

        Kennwort: <input name="Kennwort" type="text" ng-model="password">
        Kennwort bestätigen: <input name="Kennwort" type="text" ng-model="password">
        <input name="Jetzt registrieren" type="submit" >
    </form>

</div>
  
  `,
})
export class RegisterComponent  { 
}
