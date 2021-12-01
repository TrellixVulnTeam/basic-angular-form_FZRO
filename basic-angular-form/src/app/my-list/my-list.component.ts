import { Component, OnInit } from '@angular/core';
import { AddFriendService } from '../add-friend.service';
import { DelFriendService } from '../del-friend.service';

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

	constructor(private addFriendService: AddFriendService, private delFriendService: DelFriendService) {}

  public async showFriends(url:string):Promise<any>{
		await fetch (url, { headers: { 'Content-Type': 'application/json' }})
			.then(response => response.json())
			.then(data => {
				this.allFriends = data.reverse();
      })  
  }

  delete(email: string){
    const delMail = {
      email: email
    }
    this.delFriendService.delFriend(delMail).subscribe();
    this.showFriends(this.delFriendService.getUrl);
  }
  

  ngOnInit() {
    this.showFriends(this.addFriendService.getUrl);
  }

}
