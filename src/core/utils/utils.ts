export class Utils {
  public static formatRuntime(min: number | null): string {
    let hourFormatted;
    let minFormatted;
    if (min) {
      const hour = min / 60;
      const remainder = (hour % 1) * 60;
      hourFormatted = hour < 10 ? `0${~~hour}` : ~~hour;
      minFormatted =
        remainder < 10 ? `0${remainder.toFixed(0)}` : remainder.toFixed(0);
    } else {
      hourFormatted = '00';
      minFormatted = '00';
    }
    return `${hourFormatted}h${minFormatted}min`;
  }

  public static formatDate(date: Date | string) {
    let _date: Date;
    if (date instanceof Date) {
      _date = date;
    } else {
      _date = new Date(date);
    }
    return _date.toLocaleDateString(this.getBrowserLocale());
  }

  public static getBrowserLocale(): string {
    return navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
  }

  public static formatCurrency(value: number): string {
    return new Intl.NumberFormat(this.getBrowserLocale(), {
      currency: `USD`,
      style: 'currency',
    }).format(value);
  }
}
