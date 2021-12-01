import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { AddFriendService } from '../add-friend.service';


@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  private allFriends: any;

  get getAllFriends(): any {
		return this.allFriends;
	}



	constructor(private addFriendService: AddFriendService) {}

  public async showFriends(url:string):Promise<any>{
		await fetch (url)
			.then(response => response.json())
			.then(data => {
				this.allFriends = data.reverse();
      
				console.log(this.allFriends)
				
      })  
  }

  ngOnInit() {
    this.showFriends(this.addFriendService.getUrl);
  }

}
