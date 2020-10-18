import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { Block } from 'src/app/shared/model/block.model';
import { Card } from 'src/app/shared/model/card.model';
import { ResponseModel } from 'src/app/shared/model/response.model';
import { Image } from 'src/app/shared/model/image.model';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiURL;
  }

  getMembers(): Observable<Block> {
    return this.http.get(this.url).pipe(
      pluck('data'),
      map((data: ResponseModel) => {
        const attributes = data[0].attributes;
        const title = attributes.title;
        const members = Object.values(attributes.memberCards).map(
          (card: any) => {
            return new Card(
              new Image(card.imageUrl),
              card.block.title,
              card.block.description,
              card.block.link,
              card.block.text
            );
          }
        );
        return new Block(title, members);
      })
    );
  }
}
