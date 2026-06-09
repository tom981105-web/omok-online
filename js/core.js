// js/core.js
// fishing.html 3단계 분리 파일
// 공통 유틸 함수만 분리했습니다.
// 기능 로직(낚시/보스/경매장/우편함)은 아직 fishing.html 안에 남겨둡니다.

function $(id){return document.getElementById(id);}
window.$=$;

function formatNumber(n){
  n=Number(n||0);
  if(n>=1_0000_0000_0000) return (n/1_0000_0000_0000).toFixed(1).replace(/\.0$/,'')+'조';
  if(n>=1_0000_0000) return (n/1_0000_0000).toFixed(1).replace(/\.0$/,'')+'억';
  if(n>=10000) return (n/10000).toFixed(1).replace(/\.0$/,'')+'만';
  return String(n);
}
window.formatNumber=formatNumber;

function getRarityRank(rarity){
  return {common:1,uncommon:2,rare:3,epic:4,legend:5}[rarity]||0;
}
window.getRarityRank=getRarityRank;

function getRarityName(rarity){
  return ({common:'일반',uncommon:'고급',rare:'희귀',epic:'영웅',legend:'전설'}[rarity]) || rarity || '일반';
}
window.getRarityName=getRarityName;

function getInventoryKey(fishKey,sizeKey){return `${fishKey}_${sizeKey}`;}
window.getInventoryKey=getInventoryKey;

function parseInventoryKey(invKey){
  const parts=invKey.split("_");
  const sizeKey=parts.pop();
  const fishKey=parts.join("_");
  if(FISHES[fishKey]&&FISH_SIZES[sizeKey]) return {fishKey,sizeKey};
  return {fishKey:invKey,sizeKey:"normal"};
}
window.parseInventoryKey=parseInventoryKey;

function shop20Toast(title,sub=''){const el=document.createElement('div');el.className='shop20-toast';el.innerHTML=`${title}${sub?`<small>${sub}</small>`:''}`;document.body.appendChild(el);setTimeout(()=>{el.style.opacity='0';el.style.transform='translateX(20px)'},2200);setTimeout(()=>el.remove(),2700)}
window.shop20Toast=shop20Toast;

