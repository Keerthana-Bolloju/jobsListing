import { Injectable } from '@angular/core';
import { JobsModel } from '../model/jobsModel';

@Injectable({
  providedIn: 'root'
})
export class JobsdataService {

  public jobsData:JobsModel

  constructor() { }


  setAllJobs(jobs:JobsModel){
    this.jobsData = jobs
  }

  getAllJobs(){
    return this.jobsData
  }

}
