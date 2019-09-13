import { Component, OnInit } from '@angular/core';
import { JobsModel } from '../model/jobsModel';
import { JobsService } from '../service/jobs.service';
import { LocationModel } from '../model/locationModel';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  public jobsData:JobsModel
  public inputText:string = ''
  public pageNo:number = 1
  public filtered:number
 
  constructor(private jobService:JobsService) { }

  ngOnInit() {
    this.getJobList()
  }


  getJobList(){
    this.jobService.fetchData().subscribe(
      data =>{
        console.log(data)
        this.jobsData = data
      }
    )
  }

  search(){
    if(this.inputText != ''){
      this.jobsData.data = this.jobsData.data.filter(res=>{
        return (res.companyname.toLocaleLowerCase().match(this.inputText.toLocaleLowerCase()) 
        ||res.experience.toLocaleLowerCase().match(this.inputText.toLocaleLowerCase())
        ||res.skills.toLocaleLowerCase().match(this.inputText.toLocaleLowerCase())
        ||res.location.toLocaleLowerCase().match(this.inputText.toLocaleLowerCase()))
      })
    }else if(this.inputText == ''){
      this.ngOnInit()
    }
  }

}
