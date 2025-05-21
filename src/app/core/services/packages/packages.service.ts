import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { packagesConfig } from '../../config/packages.config';
import { ServicePackage } from '../../models/package.model';

/**
 * Service für die Verwaltung der Service-Pakete
 *
 * Dieser Service stellt die Paket-Konfiguration bereit und bietet Methoden
 * zum Filtern und Abrufen von Paketen basierend auf verschiedenen Kriterien.
 */
@Injectable({
  providedIn: 'root',
})
export class PackagesService {
  private packages = new BehaviorSubject<ServicePackage[]>(packagesConfig);

  constructor() {}

  /**
   * Gibt alle verfügbaren Pakete als Observable zurück
   * @returns Observable mit allen Paketen
   */
  get packages$(): Observable<ServicePackage[]> {
    return this.packages.asObservable();
  }

  /**
   * Gibt alle verfügbaren Pakete zurück
   * @returns Array mit allen Paketen
   */
  getPackages(): ServicePackage[] {
    return this.packages.value;
  }

  /**
   * Gibt alle verfügbaren Pakete einer bestimmten Kategorie zurück
   * @param category Die Kategorie der Pakete ('web', 'gastro' oder 'delivery')
   * @returns Array mit den Paketen der angegebenen Kategorie
   */
  getPackagesByCategory(category: 'web' | 'gastro' | 'delivery'): ServicePackage[] {
    return this.packages.value.filter((pkg) => pkg.category === category);
  }
}
