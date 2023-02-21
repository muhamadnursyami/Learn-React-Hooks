import { createContext } from "react";
// Untuk Membuat  createContext menggunakan api createContext dari react
// kemudia kita settings nilai defautlnya, ini sangat penting, jika nilai
// atau Value, dari AppContext.provider tidak mengirim valuenya maka
//  react akan mengirim nilai defaultnya berupa empty : true,
export const AppContext = createContext({
  empty: true,
});
