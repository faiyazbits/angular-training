
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProjectService } from '../project/project.service';

@Injectable()
export class ResolveService implements Resolve<any> {

  constructor(private projectService: ProjectService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let selectedProjectId: string = route.params['id'];
    return this.projectService.getProjectById(selectedProjectId);
  }
}
