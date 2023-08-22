import {Component, OnInit} from "@angular/core"
import { Router } from "@angular/router"
import { SharedService } from "../services/shared-service";
@Component({
selector: 'information',
templateUrl: './information-component.html',
styleUrls:['./information-component.css']
})
export class InformationComponent implements OnInit {
    patient ={
        "id": 1,
        "uid": 123456,
        "firstName": "Alice",
        "lastName": "Johnson",
        "city": "New York",
        "age": 28,
        "email": "alice@example.com"
      }
    constructor(private readonly _router: Router,
        public _sharedService: SharedService){

    }
    ngOnInit(): void {
        if(this._sharedService.selectedPatient)
        this.patient = this._sharedService.selectedPatient;
    }
    isActive(path:string)
    {
        return this._router.url.includes(path);
    }
}