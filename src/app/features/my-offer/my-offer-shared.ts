import { ClientsComponent } from '../../shared/components/clients/clients.component';
import { ProcessStepsVerticalComponent } from '../../shared/components/process-steps-vertical/process-steps-vertical.component';
import { ServicePackagesComponent } from '../../shared/components/service-packages/service-packages.component';
import { SHARED_COMPONENTS } from '../../shared/components/shared-components';
import { ClientDividerComponent } from '../landing/components/client-divider/client-divider.component';

export const MY_OFFER_IMPORTS = [
  ProcessStepsVerticalComponent,
  ServicePackagesComponent,
  ClientsComponent,
  ClientDividerComponent,
  SHARED_COMPONENTS,
];
