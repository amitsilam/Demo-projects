import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiserviceService } from './apiservice.service';
import { EmpData } from './emp-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcrudApp';
  listEmployees!: EmpData[];
  constructor(private _apiservice:ApiserviceService){  }

  ngOnInit(){
    this.fetchEmp();
  }
  dataSource: any;
  fetchEmp(){
    this._apiservice.getData().subscribe(data=>{
     this.listEmployees =data.data;
     console.log("abc", this.listEmployees)
     this.dataSource =new MatTableDataSource(this.listEmployees);
     console.log("list", this.dataSource)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age'];

}
