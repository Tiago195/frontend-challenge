const date = new Date();
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export const day = date.getDate(); 

export const weekDay = week[date.getDay()];

export const month = date.toLocaleDateString("en-US", {month: "long"}).slice(0, 3);

export const year = date.getFullYear();
