import { Component } from '@angular/core';
import{ Friend }from './friend';
import { AddFriendService } from './add-friend.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	private addFriendService: AddFriendService;

	constructor(addFriendService: AddFriendService) {
		this.addFriendService = addFriendService;
	}

	languages = ['html','css', 'js', 'php', 'angular', 'ruby', 'python', 'c++', 'c#']
	friendModel = new Friend(null, null, null, null, null);

	onSubmit(friend: Friend) {
		console.log(friend);
		this.addFriendService.addFriend(friend).subscribe(data => 'it worked', error => 'it didn\'t work');
	}
}