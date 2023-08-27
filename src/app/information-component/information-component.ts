import {Component, OnInit} from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { SharedService } from "../services/shared-service";
@Component({
selector: 'information',
templateUrl: './information-component.html',
styleUrls:['./information-component.css']
})
export class InformationComponent implements OnInit {
    patient :any
    constructor(private readonly _router: Router,
        private readonly _route: ActivatedRoute,
        public _sharedService: SharedService){

    }
    ngOnInit(): void {
        if(this._sharedService.selectedPatient)
        this.patient = this._sharedService.selectedPatient;
    else
    {
        let uid: any; 
        this._route.params.subscribe(param =>{
           uid = param["id"];
        })
    this.patient = this._sharedService.selectedPatient = this._sharedService.patients.find(X => X.uid === uid);
    }
    }
    isActive(path:string)
    {
        return this._router.url.includes(path);
    }
    selectPatient(p: any)
    {
        this.patient=p;
        this._sharedService.selectedPatient = p;
        this._router.navigate(['/information', p.uid, 'component1']);
    }
}