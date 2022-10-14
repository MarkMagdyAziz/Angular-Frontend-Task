export class TextDirectionController {
  public textDirection: string = 'rtl';
  constructor() {}
  public CheckDirection(): void {
    const lang = localStorage.getItem('lang');
    lang == 'ar' ? (this.textDirection = 'rtl') : (this.textDirection = 'ltr');
  }
}
