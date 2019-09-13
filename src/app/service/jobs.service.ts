import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { JobsModel } from '../model/jobsModel';
import { JobsdataService } from './jobsdata.service';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private url = 'https://jobsqared.herokuapp.com/jobs'

  constructor(private http:HttpClient,private jobsDataService:JobsdataService) { }


  fetchData():Observable<JobsModel>{
    return this.http.get<JobsModel>(this.url)
    .pipe(
      tap(jobs=>{
        this.jobsDataService.setAllJobs(jobs)
      })
    )
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {  
      console.error(error);   
      console.log(`${operation} failed: ${error.message}`);  
      return of(result as T);
    };
  }

}
