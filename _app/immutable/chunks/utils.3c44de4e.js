import"./index.e37a1605.js";import{w as c}from"./index.72eee438.js";const m=c([]),b=c({}),L=c({}),C=c({}),u=c(""),p=c("search"),r=c(""),T=c([]),w="https://raw.githubusercontent.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/master";async function D(a){const e=Object.keys(a),s=await(await fetch("https://raw.githubusercontent.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/master/KEYWORDS/KEYWORDS.json")).json();for(const[o,t]of Object.entries(s)){s[o]=t.sort();for(const i of t)e.includes(i)||(s[o]=s[o].filter(f=>f!==i))}return s}async function E(a){const e=Object.entries(a),n=[];for(const[o,t]of e)n.push(`${w}${t.path}${o}.json`);let s=await Promise.all(n.map(async o=>{const i=await(await fetch(o)).json();return[o,i]}));return s=s.sort((o,t)=>d(o[1],t[1])),s}async function O(){const e=await(await fetch(`${w}/PROJECTS.json`)).json();return[Object.keys(e).length,e]}function M(a){return a.filter(e=>e.place_name.text)}function $(a){const e={};for(const[n,s]of a){const o=s.project.keywords;for(const t of o)e[t]?e[t].push(n):e[t]=[n]}return e}function x(a){const e={};for(const[n,s]of a){const o=s.project.research_data.lang;for(const t of o)e[t]?e[t].push(n):e[t]=[n]}return e}function H(){window.location.hash?window.location.hash.startsWith("#keyword=")?(p.set("keywords"),r.set(window.location.hash.split("keyword=")[1])):window.location.hash.startsWith("#language=")?(p.set("languages"),r.set(window.location.hash.split("language=")[1])):(u.set(""),r.set("")):(u.set(""),r.set(""))}function K(){u.set(""),r.set(""),window.location.hash=""}function R(a,e){const n=e.toLowerCase(),s=[];for(const[o,t]of a){if(t.project.title.toLowerCase().includes(n)){s.push([o,t]);continue}if(t.project.abbr.toLowerCase().includes(n)){s.push([o,t]);continue}if(t.project.project_desc.toLowerCase().includes(n)){s.push([o,t]);continue}if(t.project.keywords.join(" ").includes(n)){s.push([o,t]);continue}let l="";for(const h of t.project.places)h.place_name.text&&(l+=h.place_name.text.toLowerCase(),l+=" ");if(l=l.trim(),l.includes(n)){s.push([o,t]);continue}}return s}function S(a,e){r.set(e),window.location.hash=`#${a}=${e}`}function d(a,e){const n=a.project.title.toLowerCase(),s=e.project.title.toLowerCase();return n>s?1:n<s?-1:0}export{p as a,r as b,R as c,T as d,m as e,S as f,L as g,H as h,O as i,E as j,b as k,C as l,$ as m,D as n,x as o,M as p,K as r,u as s};
