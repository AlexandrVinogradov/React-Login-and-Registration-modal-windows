export const required = value => {
    if (value) return undefined;

    return "Введите Email";
}

export const maxLenghtCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `max length is ${maxLength} symbols`;
    return undefined;
} 