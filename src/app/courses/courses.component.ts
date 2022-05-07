import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private router:Router) { }
  courses=[
    {cid:1,cname:"Java",trainer:"Ketan"},
    {cid:2,cname:"ReactJS",trainer:"Piyush"},
    {cid:3,cname:"Angular",trainer:"Prateek"},
    {cid:4,cname:"Python",trainer:"Santosh"},
    {cid:5,cname:"Php",trainer:"Ashish"},

  ]


  onSelect(course:any){
    let cid=course.cid;
    this.router.navigate(["coursedetails",cid])
  }

  ngOnInit(): void {
  }

}
