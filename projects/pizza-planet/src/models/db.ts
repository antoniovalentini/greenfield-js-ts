// export const pizze = {
//   1: {
//     name: 'margherita',
//   },
//   2: {
//     name: 'americana',
//   },
// };

import Pizza from '../interfaces/pizza';

const pizze: {[id: string]: Pizza} = {};
pizze['1'] = {name: 'margherita'};
pizze['2'] = {name: 'americana'};

export default {
  pizze,
};
