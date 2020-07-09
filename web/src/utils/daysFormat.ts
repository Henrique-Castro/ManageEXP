export const parseDays = (value?: string) => {
    const parsedValue = value?.split(".");

    if (parsedValue) {
        const days = parseInt(parsedValue[0]);

        const monthDays = 30;

        const remainingMonths = Math.floor(days / monthDays);
        const remainingDays = days % monthDays;

        const concatValue = `${
        remainingMonths > 0
            ? `${remainingMonths} ${remainingMonths === 1 ? "mês" : "meses"}`
            : ""
        } ${remainingMonths && remainingDays ? "e" : ""} ${
        remainingDays > 0
            ? `${remainingDays} ${remainingDays === 1 ? "dia" : "dias"}`
            : ""
        } `;

        return (concatValue);
    };

    return "Incorret number format";
};

export const handleDays = (value?: string) => {
    const parsedValue = value?.split('.');

    if (parsedValue) {
        const days = parseInt(parsedValue[0]);

        return (days);
    }

    return "Incorret number format";
};
