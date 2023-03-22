import { Component, Input } from '@angular/core';
import { ICar } from 'src/app/interfaces/car';
import { CarApiService } from 'src/app/service/car-api.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

@Input() carData:ICar | any;
carImageWidth:number = 300;

constructor(private _carAPIService:CarApiService){

}



  deleteCar(carId:string) { 
    this._carAPIService.delCarDetails(carId).subscribe(result =>
      { 
        console.log(result);
      });
  }

}
