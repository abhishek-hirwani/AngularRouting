import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router  } from '@angular/router';

@Component({
  selector: 'app-courserdetails',
  templateUrl: './courserdetails.component.html',
  styleUrls: ['./courserdetails.component.css']
})
export class CourserdetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute, private route:Router) { }


  cid: number | any;

  ngOnInit(): void {
    // this.cid=(this.router.snapshot.paramMap.get('cid'))

    this.router.paramMap.subscribe((params:ParamMap)=>
    {
      this.cid=(params.get('cid'));
    })
  }

  // geeting the id from the table
  goPrevious(){
    let id = this.cid-1;
    this.route.navigate(["courserdetails",id])
  }

  goNext(){
    let id = this.cid+1;
    this.route.navigate(["courserdetails",id])
   }



}
