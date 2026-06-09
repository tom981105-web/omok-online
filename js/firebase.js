import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import { getDatabase, ref, get, update, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyDTsFoSmI1oOS5XLXhhgqyeDmwr8RxEegE",
  authDomain: "ohmok-cd7bd.firebaseapp.com",
  databaseURL: "https://ohmok-cd7bd-default-rtdb.firebaseio.com",
  projectId: "ohmok-cd7bd",
  storageBucket: "ohmok-cd7bd.firebasestorage.app",
  messagingSenderId: "640930093452",
  appId: "1:640930093452:web:0c67d9bb5c8dc3cdb35ea9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export { onAuthStateChanged, ref, get, update, serverTimestamp };

export function getFirebaseErrorMessage(e){
  const code=e?.code||e?.name||'unknown';
  const msg=e?.message||String(e||'알 수 없는 오류');
  if(code==='PERMISSION_DENIED'||code==='permission-denied')return `권한 거부(${code}) · Database 규칙에서 읽기/쓰기가 막혔습니다.`;
  if(code==='NETWORK_ERROR'||msg.toLowerCase().includes('network'))return `네트워크 오류(${code}) · 인터넷 연결 또는 브라우저 차단을 확인해주세요.`;
  if(msg.includes('Firebase App named')||msg.includes('already exists'))return `Firebase 초기화 오류(${code}) · 앱 초기화가 중복되었을 수 있습니다.`;
  return `${code} · ${msg}`;
}

export function renderFirebaseErrorBox(title,e,path){
  return `<div class="status">${title}</div><div class="small">실패 경로: <b>${path||'-'}</b><br>상세 오류: ${getFirebaseErrorMessage(e)}<br>DB 주소: ${firebaseConfig.databaseURL}</div>`;
}

export async function dbGet(path){
  try{
    const snap=await get(ref(db,path));
    return snap.exists()?snap.val():null;
  }catch(e){
    e.dbPath=path;
    throw e;
  }
}

export async function dbPatch(obj){
  try{
    return await update(ref(db),obj);
  }catch(e){
    e.dbPath=Object.keys(obj||{}).slice(0,3).join(', ');
    throw e;
  }
}
