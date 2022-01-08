export const ssnValidator = (str) => {
    const re = /^\d{3}-?\d{2}-?\d{4}$/;
    return re.test(str);
}