import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/shared/model/image.model';
import { MemberCard } from 'src/app/shared/model/member-card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  member: MemberCard;
  imgSrcSet: string;

  srcSetImages: string;
  constructor() {}

  ngOnInit(): void {
    this.srcSetImages = this.generateSrcSet(this.member.images);
  }

  generateSrcSet(images: Image) {
    let string = '';
    Object.entries(images).map((image) => {
      const size = image[0].substring(1) + 'w';
      const url = image[1];
      string += `${url} ${size} ,`;
    });

    return string;
  }
}
