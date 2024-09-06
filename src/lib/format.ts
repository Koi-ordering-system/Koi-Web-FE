export enum FormatType {
  DATE = "date",
  TIME = "time",
  DATETIME = "datetime",
}

const FormatUtils = {
  formatISOString(isoString: string | Date, formatType: FormatType): string {
    const date = new Date(isoString);
    let formattedDateTime = "";

    const dateOptions: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      year: "numeric",
      month: "2-digit",
    };

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    switch (formatType) {
      case FormatType.DATE:
        formattedDateTime = date.toLocaleDateString("vi-VN", dateOptions);
        break;
      case FormatType.TIME:
        formattedDateTime = date.toLocaleTimeString("vi-VN", timeOptions);
        break;
      case FormatType.DATETIME:
        formattedDateTime = date.toLocaleString("vi-VN", {
          ...dateOptions,
          ...timeOptions,
        });
        break;
      default:
        throw new Error("Invalid format type");
    }

    return formattedDateTime;
  },

  convertDateToYYYYMMDD(dateString: string): string {
    const parts = dateString.split("/");
    const month = parts[0];
    const day = parts[1];
    const year = parts[2];

    const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
      2,
      "0"
    )}`;

    return formattedDate;
  },

  formatCurrency(amount: number): string {
    const formattedAmount = amount.toFixed(2);

    const [integerPart, decimalPart] = formattedAmount.split(".");

    const integerWithDots = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return `${integerWithDots},${decimalPart}`;
  },
};

export default FormatUtils;
