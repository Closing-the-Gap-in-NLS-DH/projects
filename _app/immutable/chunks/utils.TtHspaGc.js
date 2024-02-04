import"./index.xBBBUXo2.js";import{w as c}from"./index.xcB1-h1H.js";const l=c(""),h=c("search"),n=c(new Set),L=c([]),p=["african_studies","arabic_studies","archaeology","art_studies","cultural_studies","dialectology","egyptology","geography","history_studies","iranian_studies","islamic_studies","jewish_studies","lexicography","linguistics","literary_studies","media_studies","medicine_history","music_studies","philosophy","religion_studies","science_history","semitic_studies","translation_studies","turkology"],w=["biographical_data","classical_text","computational_text_analysis","digital_preservation","digital_publishing","e_learning","hadith","isnad","language_documentation","religious_text","research_data_management","research_infrastructure","text_reuse"],g=["audio","catalog","collaboration_platform","corpus_output","digital_edition","encyclopedia","htr","lexicon","ocr","translation","video","visualization","vre"],f=["corpus_resource","geodata","image","inscription","manuscript","other"],y=["annotation","nlp","network_analysis","machine_learning","stylometry","tei"],_={discipline:p,topic:w,output:g,resources:f,methods:y};function S(a){const e=Object.keys(a),t=_;for(const[i,o]of Object.entries(t)){t[i]=o.sort();for(const s of o)e.includes(s)||(t[i]=t[i].filter(u=>u!==s))}return t}function C(a){return a.filter(e=>e.place_name.text)}function v(a){const e={};for(const[t,i]of a){const o=i.project.keywords;for(const s of o)e[s]?e[s].push(t):e[s]=[t]}return e}function A(a){const e={};for(const[t,i]of a){const o=i.project.research_data.lang;for(const s of o)e[s]?e[s].push(t):e[s]=[t]}return e}function H(){if(window.location.hash)if(window.location.hash.startsWith("#keywords=")){h.set("keywords");const e=window.location.hash.split("keywords=")[1].split(",");n.set(new Set(e))}else if(window.location.hash.startsWith("#languages=")){h.set("languages");const e=window.location.hash.split("languages=")[1].split(",");n.set(new Set(e))}else l.set(""),n.set(new Set);else l.set(""),n.set(new Set)}function K(){l.set(""),n.set(new Set),window.location.hash=""}function T(a,e){const t=e.toLowerCase(),i=[];for(const[o,s]of a){if(s.project.title.toLowerCase().includes(t)){i.push([o,s]);continue}if(s.project.abbr.toLowerCase().includes(t)){i.push([o,s]);continue}if(s.project.project_desc.toLowerCase().includes(t)){i.push([o,s]);continue}if(s.project.keywords.join(" ").includes(t)){i.push([o,s]);continue}let r="";for(const d of s.project.places)d.place_name.text&&(r+=d.place_name.text.toLowerCase(),r+=" ");if(r=r.trim(),r.includes(t)){i.push([o,s]);continue}}return i}function E(a,e){n.update(o=>(o.has(e)?o.delete(e):o.add(e),o));let t=[];if(n.subscribe(o=>{t=Array.from(o)}),t.length===0){window.location.hash="";return}const i=t.join(",");window.location.hash=`#${a}=${i}`}export{h as a,n as b,T as c,L as d,S as e,C as f,v as g,A as h,H as i,K as r,l as s,E as u};
