const now = new Date();

export const year = now.getFullYear();
export const month = (now.getMonth() + 1).toString().padStart(2, "0");
export const day = now.getDate().toString().padStart(2, "0");
