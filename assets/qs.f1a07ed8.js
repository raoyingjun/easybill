const e=e=>{if("string"==typeof e)return e.split("&").reduce(((e,n)=>{const[t,o]=n.split("=");return e[t]=decodeURIComponent(o),e}),{});let n=[];for(const t in e)n.push(`${t}=${e[encodeURIComponent(t)]}`);return n.join("&")};export{e as q};
