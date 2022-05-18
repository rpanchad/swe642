import { Component, OnInit } from '@angular/core';
import { Rating } from '../rating';
import { FormsModule } from '@angular/forms';
import { RatingService } from '../rating.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survay',
  templateUrl: './survay.component.html',
  styleUrls: ['./survay.component.css'],
})
export class SurvayComponent implements OnInit {
  rating:Rating =new Rating();
  constructor(private ratingService:RatingService, private router : Router) {


   }

  ngOnInit(): void {
  }
  onSubmit()
  {
      console.log(this.rating.intrested);
      this.ratingService.createRating(this.rating).subscribe(data=>
        {
          console.log(data);
          alert("form submitted!!")
          this.router.navigate(['/ratings']);
        },
        error => console.log(error));
  }

}
