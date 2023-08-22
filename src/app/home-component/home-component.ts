import { Component, OnInit } from "@angular/core";
import { SharedService } from "../services/shared-service";

@Component({
    selector:'home',
    templateUrl:'./home-component.html',
    styleUrls:['./home-component.css']
})
export class HomeComponent implements OnInit{
    patients: Array<any> | undefined;
    constructor(private _sharedService: SharedService) {
    }
    ngOnInit(): void {
        this.patients = this._sharedService.patients;
    }
    setSelectedPatient(patient: any)
    {
        this._sharedService.selectedPatient = patient
    }
}