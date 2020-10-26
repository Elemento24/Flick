export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const convertDate = (date) => {
    const rel = date.split('-').map(el => parseInt(el, 10));
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[rel[1]-1];
    return {
        date: rel[2],
        month,
        year: rel[0]
    };
};