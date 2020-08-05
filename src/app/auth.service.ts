import { resolve } from 'url';
import { Observable } from 'rxjs';

export class AuthService{
    loggedIn = false;

    constructor(){
    }

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) =>{
                setTimeout(() => {
                    resolve(this.loggedIn)
                }, 800);
            }
        );
        return promise;
    }
    // isAuthenticated(): boolean{
    //     //const token = localStorage.getItem('token');
    //         // Check whether the token is expired and return
    //         // true or false
    //         if(Math.random() > 0.1)
    //         {
    //             return true;
    //         }
    //         else
    //         {
    //             return false;
    //         }
    // }

    logIn(){
        this.loggedIn = true;
    }
    logOut(){
        this.loggedIn = false;
    }
}