import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Block } from 'src/app/shared/model/block.model';
import { MemberCard } from 'src/app/shared/model/member-card.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) {}

  private subscriptions: Subscription[] = [];
  title: string;
  memberCards: MemberCard[];

  ngOnInit(): void {
    const members = this.route.data.subscribe((res: { data: Block }) => {
      this.title = res.data.title;
      this.memberCards = res.data.members;
    });
    this.subscriptions.push(members);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
