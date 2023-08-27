import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared-service';

@Component({
    selector: 'fifth-component',
    templateUrl: './fifth-component.html',
    styleUrls: ['./fifth-component.css']
})

export class FifthComponent implements OnInit {
    constructor(private _sharedService: SharedService,
        private _route: ActivatedRoute,
        private _router: Router) { }
    patient:any | undefined
    ngOnInit() {
        this.patient = this._sharedService.selectedPatient;
     }
}