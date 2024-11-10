export const getDate = (date: Date) => {
    const prefix = (date: number) => (date < 10 ? "0" : "");

    const day = date.getDate();
    const month = date.getMonth() + 1;

    return `${prefix(day)}${day}.${prefix(
        month
    )}${month}.${date.getFullYear()}`;
};
