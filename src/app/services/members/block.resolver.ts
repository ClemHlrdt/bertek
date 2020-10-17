import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MembersService } from 'src/app/services/members/members.service';
import { Block } from '../../shared/model/block.model';

@Injectable({
  providedIn: 'root',
})
export class BlockResolverService implements Resolve<Block> {
  constructor(private memberService: MembersService) {}
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Block> | Promise<Block> | Block {
    return this.memberService.getMembers();
  }
}
