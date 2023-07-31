import {Component} from "@angular/core"
import { Router } from "@angular/router"
@Component({
selector: 'information',
templateUrl: './information-component.html',
styleUrls:['./information-component.css']
})
export class InformationComponent {
    constructor(private readonly _router: Router){

    }
    isActive(path:string)
    {
        return this._router.url.includes(path);
    }
}