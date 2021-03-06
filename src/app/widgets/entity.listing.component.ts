import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { slideInDownAnimation } from '../animations';

import { EntityType } from '../meta/entity.type';
import { EntityTypeComponent } from '../meta/entitytype.component';
import { DomainService } from '../domain/domain.service';

@Component({
  selector: 'div [mgEntityListing]',
  templateUrl: './entity.listing.component.html',
  animations: [ slideInDownAnimation ]
})
export class EntityListingComponent extends EntityTypeComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private domain: DomainService
  ) {
    super();
  }

  ngOnInit() {
    this.route.params
      .switchMap(
        (params: Params) =>
          this.domain.findEntityType(params['entitytypename']))
      .subscribe(
        (entity: any) => {
          this.entitytype = entity;
        });
  }

}
