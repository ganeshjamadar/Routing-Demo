import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface canComponentDeactivate{
    canDeactivate: () => boolean;
}

export class canDeactivateGuard implements CanDeactivate<canComponentDeactivate>{

    canDeactivate(component: canComponentDeactivate ,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState: RouterStateSnapshot): boolean{
        return component.canDeactivate();
    }
}