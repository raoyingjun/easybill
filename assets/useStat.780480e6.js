import{L as e}from"./index-de2112c1.js";const n=n=>{let o=0,s=0;for(const{amount:e,type:t}of n)"income"===t?o+=Number(e):"spending"===t&&(s+=Number(e));return e({expense:o-s,income:o,spending:s})},o=n=>{let o=0,s=0;for(const{amount:e,type:t}of n)"income"===t?o++:"spending"===t&&s++;return e({expense:o+s,income:o,spending:s})};export{o as a,n as u};
