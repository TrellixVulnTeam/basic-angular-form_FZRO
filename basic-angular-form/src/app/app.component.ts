import { Component } from '@angular/core';
import{ Friend }from './friend';
import { AddFriendService } from './add-friend.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {

	private languages = ['html','css', 'js', 'php', 'angular', 'ruby', 'python', 'c++', 'c#']
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
		// this.showFriends(this.addFriendService.getUrl);
	}

	ngOnInit(): any {
		this.showFriends(this.addFriendService.getUrl);
	}
}