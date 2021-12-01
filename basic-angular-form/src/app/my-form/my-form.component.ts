import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { AddFriendService } from '../add-friend.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  private languages = ['html','css', 'js', 'php', 'ruby', 'python', 'c++', 'c#']
	private friendModel = new Friend(null, null, null, null, null);
	private allFriends: any;

	get getLanguages(): string[]{
		return this.languages;
	}

	get getFriendModel(): Friend{
		return this.friendModel;
	}

	get getAllFriends(): any {
		return this.allFriends;
	}

	constructor(private addFriendService: AddFriendService) {}

  	public async showFriends(url:string):Promise<any>{
		await fetch (url)
			.then(response => response.json())
			.then(data => {
				this.allFriends = data;
				console.log(this.allFriends)
				
			})
	}

  onSubmit() {
		this.addFriendService.addFriend(this.friendModel).subscribe(data => 'it worked', error => 'it didn\'t work');
		this.showFriends(this.addFriendService.getUrl);
		window.location.reload();
	}

  ngOnInit(): void {
  }

}
