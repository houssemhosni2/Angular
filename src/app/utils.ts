export class Utils {
  static getIdRole(key: PropertyKey) {
    if (key == 'Responsable_Vente') return 1;
    if (key == 'Responsable_Achat') return 2;
    if (key == 'Finance_Comptabilite') return 3;
    return 0;
  }
}
