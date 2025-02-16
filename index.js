import{a as f,S as m,i}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const d="48862987-6323d91c4dec4b8453f0076b5",g="https://pixabay.com/api/";async function p(o){try{return(await f.get(g,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(e){throw console.error("Error fetching images:",e),e}}const u=document.querySelector(".gallery");let c;function y(o){u.innerHTML=o.map(e=>`
        <a href="${e.largeImageURL}" class="gallery-item">
            <img src="${e.webformatURL}" alt="${e.tags}" />
            <div class="image-info">
                <p><strong>Likes:</strong> ${e.likes}</p>
                <p><strong>Views:</strong> ${e.views}</p>
                <p><strong>Comments:</strong> ${e.comments}</p>
                <p><strong>Downloads:</strong> ${e.downloads}</p>
            </div>
        </a>
    `).join(""),c?c.refresh():c=new m(".gallery a")}function h(){u.innerHTML=""}const w=document.querySelector("#search-form"),l=document.querySelector(".loader");w.addEventListener("submit",async o=>{o.preventDefault();const e=o.target.elements.searchQuery,n=e.value.trim();if(!n){i.error({title:"Error",message:"Please enter a search term!"});return}h(),l.style.display="block";try{const s=await p(n);s.length===0?i.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):y(s)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}l.style.display="none",e.value=""});
//# sourceMappingURL=index.js.map
