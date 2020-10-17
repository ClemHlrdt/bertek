import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { Block } from 'src/app/shared/model/block.model';
import { MemberCard } from 'src/app/shared/model/member-card.model';
import { ResponseModel } from 'src/app/shared/model/response.model';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http
      .get(
        'https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json'
      )
      .pipe(
        pluck('data'),
        map((data: ResponseModel) => {
          const attributes = data[0].attributes;
          const title = attributes.title;
          const members = Object.values(attributes.memberCards).map(
            (card: any) => {
              return new MemberCard(card.imageUrl, card.block);
            }
          );
          return new Block(title, members);
        })
      );
  }
}
