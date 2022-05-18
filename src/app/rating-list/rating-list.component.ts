import { Component, OnInit } from '@angular/core';
import { Rating } from '../rating';
import { RatingService } from '../rating.service';
@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent implements OnInit {
  ratings : Rating[] | undefined
  constructor(private ratingService:RatingService) { }

  ngOnInit(): void {
    this.getRatings();

  }
  private getRatings()
  {
    this.ratingService.getRatingList().subscribe(data =>{
      this.ratings=data;
    })
  }
  public getLikes(rating : Rating)
  {
      let res: string=""
      if(rating.like_atmosphere=="true")
      {
        res=res+"atmosphere ";
      }
      if(rating.like_campus=="true")
      {
        res=res+"campus ";
      }
      if(rating.like_dormrooms=="true")
      {
        res=res+"dormrooms ";
      }
      if(rating.like_location=="true")
      {
        res=res+"location ";
      }
      if(rating.like_sports=="true")
      {
        res=res+"sports ";
      }
      if(rating.like_student=="true")
      {
        res=res+"students ";
      }
      return res;
  }
  


}
