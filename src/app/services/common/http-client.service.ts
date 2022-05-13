import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private clientServices: HttpClient, @Inject("baseUrl") private baseUrl: string) { }
  private url(RequestParamater: RequestParamater):string {
    return `${RequestParamater.baseUrl?RequestParamater.baseUrl:this.baseUrl}/${RequestParamater.controller}${RequestParamater.action? `/${RequestParamater.action}`:""}`;
  }
  get<T>(RequestParamater: RequestParamater,id?:string):Observable<T> {
    let url: string = "";
    if(RequestParamater.fullEndPoint)
      url=RequestParamater.fullEndPoint;
    else
      url = `${this.url(RequestParamater)}${id?`/${id}`:""}${RequestParamater.querystring?`?${RequestParamater.querystring}`:""}`;
   return this.clientServices.get<T>(url,{headers:RequestParamater.headers});
  }

  post<T>(RequestParamater:RequestParamater,body:Partial<T>):Observable<T>{
    let url:string="";
    if(RequestParamater.fullEndPoint)
      url=RequestParamater.fullEndPoint;
    else
      url=`${this.url(RequestParamater)}`;
    return this.clientServices.post<T>(url,body,{headers:RequestParamater.headers});
  }
  put<T>(RequestParamater:RequestParamater,body:Partial<T>):Observable<T>{
    let url:string="";
    if(RequestParamater.fullEndPoint)
      url=RequestParamater.fullEndPoint;
    else
      url=`${this.url(RequestParamater)}`;
    return this.clientServices.put<T>(url,body,{headers:RequestParamater.headers});
  }
  delete<T>(RequestParamater:RequestParamater,id:string):Observable<T>{
    let url:string="";
    if(RequestParamater.fullEndPoint)
      url=RequestParamater.fullEndPoint;
    else
      url=`${this.url(RequestParamater)}${id?`/${id}`:""}`;
    return this.clientServices.delete<T>(url,{headers:RequestParamater.headers});
  }
}

export class RequestParamater {
  controller?: string;
  action?: string;
  querystring?:string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;

}
