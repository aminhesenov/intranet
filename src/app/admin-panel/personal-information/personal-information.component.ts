import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  personalInformation: any[] = [
    {region: 'ADRA Aparat', degree: 'Təcrübəçi', section: 'Proqram təminatının dəstəyi və inkişafı sektoru', department: 'İnformasiya texnologiyaları şöbəsi', email: 'a.a.hasanov@adra.gov.az', phone: '077-556-24-21'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
