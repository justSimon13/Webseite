import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from './components/projects/projects.component';
import { ServiceOverviewComponent } from './components/service-overview/service-overview.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SHARED_COMPONENTS } from '../../shared/components/shared-components';

export const HOME_IMPORTS = [
  ServiceOverviewComponent,
  SkillsComponent,
  ProjectsComponent,
  CommonModule,
  RouterModule,
  SHARED_COMPONENTS,
];
