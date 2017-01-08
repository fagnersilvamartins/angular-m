import { Injectable } from '@angular/core';
import { forwardRef } from '@angular/core';

import { EntityType } from '../meta/entity.type';
import { AbstractService } from '../meta/abstract.service';

import { ClientService } from './client.service';
import { ProductService } from './product.service';
import { AlunoService } from './aluno.service';

export const DOMAIN_SERVICES = [
  forwardRef(() => ClientService),
  forwardRef(() => ProductService),
  forwardRef(() => AlunoService)
];

@Injectable()
export class DomainService {

    private entityTypes: { [name: string]: EntityType; } = {};
    private services: { [entitytype: string]: AbstractService<any>; } = {};

    constructor(
        private productService: ProductService,
        private clientService: ClientService,
        private alunoService: AlunoService
    ) {
        this.addService(productService);
        this.addService(clientService);
        this.addService(alunoService);
    }

    findEntityType(name: string): Promise<EntityType> {
        let entityType = this.entityTypes[name];
        if (entityType) {
            return Promise.resolve(entityType);
        }
        throw `EntityType not found for name ${name}`;
    }

    listEntityTypes(): EntityType[] {
        return Object.keys(this.entityTypes).map(key => this.entityTypes[key]);
    }

    addService(service: AbstractService<any>) {
        let entityType = service.describeEntityType();
        this.addEntityType(entityType);
        this.services[entityType.name] = service;
    }

    listServices(): AbstractService<any>[] {
        return Object.keys(this.services).map(key => this.services[key]);
    }

    addEntityType(entityType: EntityType) {
        this.entityTypes[entityType.name] = entityType;
    }

    getService(entitytype: string): AbstractService<any> {
        return this.services[entitytype];
    }
}
