// boss.js - 보스 레이드 2.1 모듈
// 시간 단축, 방해 패턴 강화, 패턴 중첩, 먹물/폭풍/교란 실효성 강화
export function installBossModule(ctx){
  let bossRush=null;
  const $ = ctx.$;
  const formatNumber = ctx.formatNumber;

  const RAID_CONFIG = {
    kraken:{
      name:'크라켄',
      maxCombo:5,
      times:[4.0,3.5,3.0,2.5,2.0],
      maxDamage:10000,
      baseSpeed:1.32,
      speedStep:.22,
      zoneBase:21,
      zoneStep:1.15,
      patternChance:.32,
      patterns:['ink','shake'],
      patternDuration:{ink:2.0,shake:.45}
    },
    leviathan:{
      name:'레비아탄',
      maxCombo:7,
      times:[4.0,3.5,3.0,2.5,2.0,1.8,1.6],
      maxDamage:20000,
      baseSpeed:1.42,
      speedStep:.24,
      zoneBase:20,
      zoneStep:1.2,
      patternChance:.40,
      patterns:['storm','shake','ink'],
      patternDuration:{storm:3.0,shake:.55,ink:2.0}
    },
    phoenix:{
      name:'심해룡',
      maxCombo:10,
      times:[4.0,3.5,3.0,2.5,2.0,1.8,1.6,1.4,1.2,1.0],
      maxDamage:35000,
      baseSpeed:1.52,
      speedStep:.27,
      zoneBase:19,
      zoneStep:1.25,
      patternChance:.48,
      patterns:['reverse','storm','ink','shake'],
      patternDuration:{reverse:3.0,storm:3.0,ink:2.0,shake:.6}
    }
  };

  function getBossId(boss){
    const raw=String(boss?.id||boss?.type||boss?.key||'').toLowerCase();
    if(raw.includes('leviathan'))return 'leviathan';
    if(raw.includes('phoenix')||raw.includes('dragon')||raw.includes('심해'))return 'phoenix';
    if(raw.includes('kraken'))return 'kraken';
    const name=String(boss?.name||'').toLowerCase();
    if(name.includes('레비아탄')||name.includes('leviathan'))return 'leviathan';
    if(name.includes('심해룡')||name.includes('dragon')||name.includes('phoenix'))return 'phoenix';
    return 'kraken';
  }

  function getRaidConfig(boss){
    return RAID_CONFIG[getBossId(boss)]||RAID_CONFIG.kraken;
  }

  function getHpRatio(boss){
    const hp=Number(boss?.hp||0), max=Number(boss?.maxHp||boss?.hp||1)||1;
    return Math.max(0,Math.min(1,hp/max));
  }

  function isFrenzy(){
    return bossRush && getHpRatio(bossRush.boss)<=.3;
  }

  function hasRaidPattern(name){
    return !!(bossRush?.activePatterns||[]).some(p=>p.type===name);
  }

  function cleanupRaidPatterns(){
    if(!bossRush)return;
    const now=performance.now();
    bossRush.activePatterns=(bossRush.activePatterns||[]).filter(p=>!p.until||p.until>now);
    bossRush.pattern=(bossRush.activePatterns||[]).map(p=>p.type).join(' ');
    bossRush.patternLabel=(bossRush.activePatterns||[]).map(p=>p.label).filter(Boolean).join(' + ');
  }

  function ensureBossRushCss(){
    if(document.getElementById('bossRaid20Css'))return;
    const css=document.createElement('style');
    css.id='bossRaid20Css';
    css.textContent=`
      .boss-rush-card.raid20{border-color:rgba(248,113,113,.58);}
      .boss-rush-card.raid20.frenzy{animation:bossRaidFrenzyPulse .9s ease-in-out infinite;}
      .boss-rush-card.raid20.ink::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 38%,transparent 0 14%,rgba(0,0,0,.86) 38%,rgba(0,0,0,.96) 100%);z-index:1;pointer-events:none;animation:bossInkFade .9s ease-out both;}
      .boss-rush-card.raid20.ink .boss-rush-zone,.boss-rush-card.raid20.ink .boss-rush-crit{opacity:.08!important;filter:brightness(0) blur(3px);}
      .boss-rush-card.raid20.shake{animation:bossRaidShake .32s linear both;}
      .boss-rush-card.raid20.storm .boss-rush-pointer{box-shadow:0 0 34px rgba(56,189,248,.95),0 0 18px rgba(245,158,11,.85);background:linear-gradient(180deg,#7dd3fc,#f59e0b);}
      .boss-rush-card.raid20.reverse .boss-rush-meter{border-color:rgba(216,180,254,.7);box-shadow:inset 0 0 22px rgba(0,0,0,.64),0 0 24px rgba(168,85,247,.35);}
      .boss-rush-card.raid20.reverse .boss-rush-zone{background:linear-gradient(180deg,#d8b4fe,#8b5cf6);box-shadow:0 0 20px rgba(168,85,247,.78);}
      .boss-rush-card.raid20.perfect{animation:bossPerfectRaid .55s ease-out both;}
      .boss-rush-timer{width:min(720px,96%);height:12px;border-radius:999px;margin:8px auto 0;background:rgba(148,163,184,.2);border:1px solid rgba(255,255,255,.18);overflow:hidden;}
      .boss-rush-timer-fill{height:100%;width:100%;border-radius:999px;background:linear-gradient(90deg,#22c55e,#facc15,#ef4444);transition:width .08s linear;}
      .boss-rush-phase{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin:8px auto 2px;width:min(720px,96%);}
      .boss-rush-phase span{min-width:24px;height:24px;display:inline-grid;place-items:center;border-radius:999px;background:rgba(15,23,42,.75);border:1px solid rgba(148,163,184,.25);font-size:12px;font-weight:1000;color:#cbd5e1;}
      .boss-rush-phase span.done{background:rgba(34,197,94,.2);border-color:#22c55e;color:#bbf7d0;}
      .boss-rush-phase span.now{background:rgba(250,204,21,.2);border-color:#facc15;color:#fde68a;box-shadow:0 0 14px rgba(250,204,21,.28);}
      .boss-rush-pattern{min-height:24px;font-size:14px;font-weight:1000;color:#fca5a5;text-shadow:0 2px 4px #000;margin-top:4px;}
      .boss-rush-floating{position:absolute;left:50%;top:48%;transform:translate(-50%,-50%);z-index:6;font-size:36px;font-weight:1000;color:#facc15;text-shadow:0 4px 10px #000;pointer-events:none;animation:raidFloatPop .65s ease-out both;white-space:nowrap;}
      @keyframes raidFloatPop{0%{opacity:0;transform:translate(-50%,-38%) scale(.75)}30%{opacity:1;transform:translate(-50%,-50%) scale(1.08)}100%{opacity:0;transform:translate(-50%,-72%) scale(1)}}
      @keyframes bossRaidShake{0%,100%{transform:translate(0,0)}20%{transform:translate(-7px,2px)}40%{transform:translate(6px,-3px)}60%{transform:translate(-4px,-1px)}80%{transform:translate(5px,2px)}}
      @keyframes bossInkFade{0%{opacity:0}25%{opacity:1}100%{opacity:.82}}
      @keyframes bossRaidFrenzyPulse{0%,100%{box-shadow:0 28px 100px rgba(0,0,0,.68),0 0 24px rgba(239,68,68,.22)}50%{box-shadow:0 28px 100px rgba(0,0,0,.68),0 0 48px rgba(239,68,68,.55)}}
      @keyframes bossPerfectRaid{0%,100%{transform:scale(1)}35%{transform:scale(1.035)}70%{transform:scale(.99)}}

      .boss-rush-raid-hud{width:min(720px,96%);display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:8px auto 0;position:relative;z-index:5;}
      .boss-rush-raid-hud .raid-hud-cell{background:rgba(2,6,23,.72);border:1px solid rgba(148,163,184,.26);border-radius:12px;padding:8px 6px;box-shadow:inset 0 1px 0 rgba(255,255,255,.06);}
      .boss-rush-raid-hud .raid-hud-cell b{display:block;font-size:18px;color:#fff;text-shadow:0 2px 4px #000;}
      .boss-rush-raid-hud .raid-hud-cell span{display:block;font-size:11px;color:#cbd5e1;font-weight:900;margin-top:2px;}
      .boss-rush-ink-splats,.boss-rush-storm-waves,.boss-rush-reverse-glitch{position:absolute;inset:0;pointer-events:none;z-index:4;display:none;overflow:hidden;border-radius:inherit;}
      .boss-rush-card.raid20.ink .boss-rush-ink-splats{display:block;background:
        radial-gradient(circle at 18% 22%,rgba(0,0,0,.88) 0 10%,transparent 18%),
        radial-gradient(circle at 78% 28%,rgba(0,0,0,.82) 0 13%,transparent 22%),
        radial-gradient(circle at 42% 58%,rgba(0,0,0,.78) 0 16%,transparent 28%),
        radial-gradient(circle at 68% 78%,rgba(0,0,0,.88) 0 11%,transparent 20%);
        animation:bossInkSplatter .9s ease-out both;}
      .boss-rush-card.raid20.storm .boss-rush-storm-waves{display:block;background:repeating-linear-gradient(135deg,rgba(125,211,252,.0) 0 16px,rgba(125,211,252,.22) 17px 22px,rgba(255,255,255,.08) 23px 26px);animation:bossStormSlide .55s linear infinite;}
      .boss-rush-card.raid20.reverse .boss-rush-reverse-glitch{display:block;background:linear-gradient(90deg,rgba(168,85,247,.16),transparent,rgba(56,189,248,.13));mix-blend-mode:screen;animation:bossReverseGlitch .28s steps(2,end) infinite;}
      .boss-rush-result{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(380px,88%);background:linear-gradient(180deg,rgba(15,23,42,.96),rgba(2,6,23,.96));border:1px solid rgba(250,204,21,.52);border-radius:20px;padding:18px;z-index:20;box-shadow:0 28px 90px rgba(0,0,0,.68),0 0 40px rgba(250,204,21,.18);display:none;text-align:center;}
      .boss-rush-result.show{display:block;animation:bossRaidResultPop .32s ease-out both;}
      .boss-rush-result .result-title{font-size:26px;font-weight:1000;color:#facc15;text-shadow:0 3px 8px #000;margin-bottom:8px;}
      .boss-rush-result .result-sub{font-size:14px;font-weight:900;color:#cbd5e1;margin-bottom:10px;}
      .boss-rush-result .result-damage{font-size:30px;font-weight:1000;color:#f87171;text-shadow:0 3px 8px #000;}
      .boss-rush-result .result-mini{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px;}
      .boss-rush-result .result-mini div{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.09);border-radius:12px;padding:8px;font-size:12px;color:#cbd5e1;font-weight:900;}
      .boss-rush-result .result-mini b{display:block;color:white;font-size:17px;margin-top:2px;}
      @keyframes bossInkSplatter{0%{opacity:0;filter:blur(6px);transform:scale(1.08)}35%{opacity:1;filter:blur(0);transform:scale(1)}100%{opacity:.9}}
      @keyframes bossStormSlide{0%{background-position:0 0}100%{background-position:42px 0}}
      @keyframes bossReverseGlitch{0%{transform:translateX(-3px);opacity:.45}50%{transform:translateX(4px);opacity:.8}100%{transform:translateX(-1px);opacity:.55}}
      @keyframes bossRaidResultPop{0%{opacity:0;transform:translate(-50%,-44%) scale(.82)}100%{opacity:1;transform:translate(-50%,-50%) scale(1)}}

      @media(max-width:900px){.boss-rush-floating{font-size:27px}.boss-rush-phase span{min-width:21px;height:21px;font-size:11px}.boss-rush-timer{height:10px}}
    `;
    document.head.appendChild(css);
  }

  function getBossRushDifficulty(){
    if(!bossRush)return {speed:1.2,zone:20,crit:4};
    const cfg=bossRush.config;
    const comboIndex=Math.max(0,bossRush.comboIndex||0);
    const rod=ctx.getEquippedRod?ctx.getEquippedRod():{id:'rod_wood'};
    const bait=ctx.getEquippedBait?ctx.getEquippedBait():{id:'basic'};
    const baitZone=bait.id==='legend'?4:bait.id==='rare'?2:0;
    const rodSpeedBonus=rod.id==='rod_dragon'?.18:rod.id==='rod_gold'?.1:0;
    const stormResist=ctx.getAccessoryPatternResist?ctx.getAccessoryPatternResist('storm'):0;
    const stormMul=hasRaidPattern('storm')?(2.0-(0.7*stormResist)):1;
    const frenzyMul=isFrenzy()?1.12:1;
    const speed=Math.min(8.2,(cfg.baseSpeed+comboIndex*cfg.speedStep-rodSpeedBonus)*stormMul*frenzyMul);
    const stormZonePenalty=hasRaidPattern('storm')?(0.70+(0.22*stormResist)):1;
    const zone=Math.max(5.5,(cfg.zoneBase-comboIndex*cfg.zoneStep+baitZone)*stormZonePenalty);
    const crit=Math.max(1.8,zone*.22);
    return {speed,zone,crit};
  }

  function showRaidFloat(text){
    const card=$('bossRushCard');
    if(!card)return;
    const old=card.querySelector('.boss-rush-floating');
    if(old)old.remove();
    const el=document.createElement('div');
    el.className='boss-rush-floating';
    el.textContent=text;
    card.appendChild(el);
    setTimeout(()=>el.remove(),700);
  }

  function applyRaidClasses(){
    const card=$('bossRushCard');
    if(!card||!bossRush)return;
    cleanupRaidPatterns();
    card.classList.add('raid20');
    card.classList.toggle('frenzy',isFrenzy());
    for(const c of ['ink','storm','reverse','shake','perfect'])card.classList.remove(c);
    for(const p of bossRush.activePatterns||[])card.classList.add(p.type);
    if(hasRaidPattern('shake')){
      void card.offsetWidth;
      card.classList.add('shake');
    }
  }

  function renderPhaseDots(){
    if(!bossRush)return '';
    let html='';
    for(let i=1;i<=bossRush.maxCombo;i++){
      const cls=i<=bossRush.success?'done':i===bossRush.comboIndex+1?'now':'';
      html+=`<span class="${cls}">${i}</span>`;
    }
    return html;
  }

  function updateBossRushUI(){
    if(!bossRush)return;
    cleanupRaidPatterns();
    const diff=getBossRushDifficulty();
    bossRush.zoneWidth=diff.zone;
    bossRush.critWidth=diff.crit;
    const zone=$('bossRushZone'),crit=$('bossRushCrit'),ptr=$('bossRushPointer');
    if(zone){zone.style.left=bossRush.zoneLeft+'%';zone.style.width=bossRush.zoneWidth+'%'}
    const critLeft=bossRush.zoneLeft+(bossRush.zoneWidth-bossRush.critWidth)/2;
    if(crit){crit.style.left=critLeft+'%';crit.style.width=bossRush.critWidth+'%'}
    if(ptr)ptr.style.left=bossRush.pointer+'%';
    if($('bossRushCombo'))$('bossRushCombo').textContent=`${bossRush.success}/${bossRush.maxCombo}`;
    if($('bossRushCritCount'))$('bossRushCritCount').textContent=bossRush.crits;
    if($('bossRushDamage'))$('bossRushDamage').textContent=formatNumber(calcBossRushTotalDamage(false));
    if($('bossRushLevel'))$('bossRushLevel').textContent=(bossRush.comboIndex+1);
    if($('bossRushHudCombo'))$('bossRushHudCombo').textContent=`${bossRush.success}/${bossRush.maxCombo}`;
    if($('bossRushHudTime'))$('bossRushHudTime').textContent=Math.max(0,bossRush.timeLeft).toFixed(1)+'초';
    if($('bossRushHudMode'))$('bossRushHudMode').textContent=isFrenzy()?'FRENZY':((bossRush.activePatterns||[]).length?bossRush.activePatterns.map(p=>p.type.toUpperCase()).join('+'):'NORMAL');
    if($('bossRushPhase'))$('bossRushPhase').innerHTML=renderPhaseDots();
    if($('bossRushPattern'))$('bossRushPattern').textContent=bossRush.patternLabel||'';
    if($('bossRushTimerFill')){
      const pct=Math.max(0,Math.min(100,(bossRush.timeLeft/bossRush.timeLimit)*100));
      $('bossRushTimerFill').style.width=pct+'%';
    }
    const hitBtn=$('bossRushHitBtn');
    if(hitBtn)hitBtn.textContent=`낚아채기 (${Math.max(0,bossRush.timeLeft).toFixed(1)}초)`;
    applyRaidClasses();
  }

  function loopBossRush(ts){
    if(!bossRush||!bossRush.running)return;
    if(!bossRush.lastTs)bossRush.lastTs=ts||performance.now();
    const now=ts||performance.now();
    const delta=Math.min(.08,(now-bossRush.lastTs)/1000);
    bossRush.lastTs=now;
    bossRush.timeLeft-=delta;
    if(bossRush.timeLeft<=0){
      bossRush.timeLeft=0;
      updateBossRushUI();
      $('bossRushMessage').textContent='시간 초과! 강화 패턴에 밀려 낚싯줄이 끊어졌습니다.';
      showRaidFloat('TIME OVER');
      setTimeout(()=>finishBossRush(true),280);
      return;
    }
    const diff=getBossRushDifficulty();
    bossRush.pointer+=bossRush.dir*diff.speed;
    if(bossRush.pointer>=100){bossRush.pointer=100;bossRush.dir=-1;}
    if(bossRush.pointer<=0){bossRush.pointer=0;bossRush.dir=1;}
    updateBossRushUI();
    bossRush.raf=requestAnimationFrame(loopBossRush);
  }

  function randomizeBossRushZone(){
    if(!bossRush)return;
    const diff=getBossRushDifficulty();
    bossRush.zoneWidth=diff.zone;
    bossRush.zoneLeft=6+Math.random()*(88-bossRush.zoneWidth);
  }

  function calcBossRushTotalDamage(perfect){
    if(!bossRush)return 0;
    const rod=ctx.getEquippedRod?ctx.getEquippedRod():{id:'rod_wood',sellMul:1};
    const bait=ctx.getEquippedBait?ctx.getEquippedBait():{id:'basic'};
    const rodMul=(rod.bossMul||0)||(rod.id==='rod_dragon'?1.5:rod.id==='rod_gold'?1.25:rod.id==='rod_iron'?1.1:1);
    const baitMul=bait.id==='legend'?1.35:bait.id==='rare'?1.15:1;
    const ratio=bossRush.maxCombo?bossRush.success/bossRush.maxCombo:0;
    const critBonus=1+(bossRush.crits*.035);
    const perfectMul=perfect?1.2:1;
    const accMul=ctx.getAccessoryBossDamageMul?ctx.getAccessoryBossDamageMul():1;
    const variance=bossRush.finalVariance||1;
    return Math.round(bossRush.config.maxDamage*ratio*rodMul*baitMul*critBonus*perfectMul*accMul*variance);
  }

  function addRaidPattern(type,duration,label){
    if(!bossRush)return;
    const now=performance.now();
    bossRush.activePatterns=bossRush.activePatterns||[];
    const old=bossRush.activePatterns.find(p=>p.type===type);
    if(old){old.until=now+duration*1000;old.label=label;return;}
    bossRush.activePatterns.push({type,until:now+duration*1000,label});
  }

  function triggerBossPattern(){
    if(!bossRush)return;
    bossRush.activePatterns=[];
    bossRush.pattern='';
    bossRush.patternLabel='';
    const cfg=bossRush.config;
    const frenzy=isFrenzy();
    const chance=Math.min(.88,cfg.patternChance*(frenzy?1.45:1));
    if(Math.random()>chance){applyRaidClasses();return;}

    const labels={
      ink:'🌑 먹물 · 성공 구간 은폐',
      storm:'🌊 폭풍 · 속도 2배 + 구간 축소',
      reverse:'⚡ 교란 · 방향 반전 + 구간 이동',
      shake:'💢 난류 · 화면 흔들림'
    };
    const picked=[];
    const bossId=getBossId(bossRush.boss);

    function pickOne(pool){return pool[Math.floor(Math.random()*pool.length)]}
    picked.push(pickOne(cfg.patterns));

    // 심해룡은 중첩 패턴 가능, 광폭화는 모든 보스가 2중 패턴 가능
    if(bossId==='phoenix' && Math.random()<.55){
      const extra=Math.random()<.55?'reverse':(Math.random()<.5?'ink':'storm');
      if(!picked.includes(extra))picked.push(extra);
    }
    if(frenzy && Math.random()<.72){
      const extra=Math.random()<.5?'storm':'reverse';
      if(!picked.includes(extra))picked.push(extra);
    }

    for(const p of picked){
      const resist=ctx.getAccessoryPatternResist?ctx.getAccessoryPatternResist(p):0;
      const duration=((cfg.patternDuration&&cfg.patternDuration[p])||(p==='ink'?2.0:3.0))*Math.max(.35,1-resist);
      addRaidPattern(p,duration,labels[p]||p);
      if(p==='reverse'){
        bossRush.dir*=-1;
        bossRush.pointer=100-bossRush.pointer;
        // 교란은 성공 구간도 순간이동시켜서 체감 난이도를 올림
        setTimeout(()=>randomizeBossRushZone(),60);
      }
    }
    cleanupRaidPatterns();
    const label=(bossRush.activePatterns||[]).map(p=>p.label.split(' · ')[0]).join(' + ');
    showRaidFloat(label||'WARNING');
    applyRaidClasses();
  }

  function startNextCombo(){
    if(!bossRush||!bossRush.running)return;
    if(bossRush.success>=bossRush.maxCombo){
      finishBossRush(false);
      return;
    }
    bossRush.comboIndex=bossRush.success;
    bossRush.timeLimit=bossRush.config.times[bossRush.comboIndex]||2;
    bossRush.timeLeft=bossRush.timeLimit;
    bossRush.lastTs=0;
    bossRush.pointer=Math.random()*100;
    bossRush.dir=Math.random()>.5?1:-1;
    randomizeBossRushZone();
    triggerBossPattern();
    const nowCombo=bossRush.comboIndex+1;
    const frenzyText=isFrenzy()?' · 💀 광폭화':'';
    $('bossRushMessage').textContent=`${nowCombo}/${bossRush.maxCombo} 콤보 · 제한시간 ${bossRush.timeLimit.toFixed(1)}초${frenzyText}`;
    showRaidFloat(`${nowCombo} COMBO`);
    updateBossRushUI();
    if(bossRush.raf)cancelAnimationFrame(bossRush.raf);
    bossRush.raf=requestAnimationFrame(loopBossRush);
  }

  function ensureBossRushModal(){
    ensureBossRushCss();
    let modal=$('bossRushModal');
    if(modal)return modal;
    modal=document.createElement('div');
    modal.id='bossRushModal';
    modal.className='boss-rush-backdrop';
    modal.innerHTML=`<div id="bossRushCard" class="boss-rush-card"><div class="boss-rush-ink-splats"></div><div class="boss-rush-storm-waves"></div><div class="boss-rush-reverse-glitch"></div><div id="bossRushResult" class="boss-rush-result"></div><div class="boss-rush-inner">
      <div class="boss-rush-title" id="bossRushTitle">보스 레이드</div>
      <div class="boss-rush-sub" id="bossRushSub">제한시간 안에 콤보를 성공시키세요.</div>
      <div class="boss-rush-preview"><img id="bossRushImg" src="" alt="보스"></div>
      <div id="bossRushMessage" class="boss-rush-message">준비 완료</div>
      <div id="bossRushPattern" class="boss-rush-pattern"></div>
      <div class="boss-rush-raid-hud"><div class="raid-hud-cell"><b id="bossRushHudCombo">0/0</b><span>레이드 콤보</span></div><div class="raid-hud-cell"><b id="bossRushHudTime">0.0초</b><span>남은 시간</span></div><div class="raid-hud-cell"><b id="bossRushHudMode">NORMAL</b><span>상태</span></div></div>
      <div class="boss-rush-timer"><div id="bossRushTimerFill" class="boss-rush-timer-fill"></div></div>
      <div class="boss-rush-meter"><div id="bossRushZone" class="boss-rush-zone"></div><div id="bossRushCrit" class="boss-rush-crit"></div><div id="bossRushPointer" class="boss-rush-pointer"></div></div>
      <div id="bossRushPhase" class="boss-rush-phase"></div>
      <div class="boss-rush-stats"><div class="boss-rush-stat"><b id="bossRushCombo">0/0</b><span>성공 콤보</span></div><div class="boss-rush-stat"><b id="bossRushCritCount">0</b><span>정밀타</span></div><div class="boss-rush-stat"><b id="bossRushDamage">0</b><span>예상 피해</span></div><div class="boss-rush-stat"><b id="bossRushLevel">1</b><span>현재 단계</span></div></div>
      <div class="boss-rush-btns"><button id="bossRushHitBtn" class="boss-rush-hit">낚아채기</button><button id="bossRushEndBtn" class="boss-rush-end">포기</button></div>
    </div></div>`;
    document.body.appendChild(modal);
    $('bossRushHitBtn').addEventListener('pointerdown',e=>{e.preventDefault();bossRushHit();});
    $('bossRushEndBtn').onclick=()=>finishBossRush(false);
    return modal;
  }

  function bossRushHit(){
    if(!bossRush||!bossRush.running)return;
    const p=bossRush.pointer;
    const zL=bossRush.zoneLeft, zR=zL+bossRush.zoneWidth;
    const cL=zL+(bossRush.zoneWidth-bossRush.critWidth)/2, cR=cL+bossRush.critWidth;
    if(p<zL||p>zR){
      $('bossRushMessage').textContent=`${bossRush.success}/${bossRush.maxCombo} 콤보에서 실패! 보스가 저항했습니다.`;
      showRaidFloat('MISS');
      finishBossRush(true);
      return;
    }
    const isCrit=p>=cL&&p<=cR;
    bossRush.success+=1;
    if(isCrit)bossRush.crits+=1;
    const card=$('bossRushCard');
    if(card){card.classList.remove('critical');void card.offsetWidth;card.classList.add('critical')}
    const important=bossRush.success===bossRush.maxCombo||bossRush.success===Math.ceil(bossRush.maxCombo*.7);
    $('bossRushMessage').textContent=isCrit?`정밀 낚아채기! ${bossRush.success}/${bossRush.maxCombo} 콤보`:`성공! ${bossRush.success}/${bossRush.maxCombo} 콤보`;
    showRaidFloat(bossRush.success===bossRush.maxCombo?'PERFECT?':important?`🔥 ${bossRush.success} COMBO`:`${bossRush.success} COMBO`);
    updateBossRushUI();
    if(bossRush.raf)cancelAnimationFrame(bossRush.raf);
    setTimeout(()=>startNextCombo(),520);
  }

  function startBossRush(){
    if(!ctx.fishing)return;
    if(!ctx.hasAnyBait || !ctx.hasAnyBait()){ctx.shop20Toast('미끼가 부족합니다.','보스 레이드에도 미끼가 필요합니다.');return;}
    if(!ctx.consumeEquippedBait()){ctx.shop20Toast('미끼가 부족합니다.');return;}
    const boss=ctx.currentBossCache||ctx.getDefaultBoss();
    const cfg=getRaidConfig(boss);
    const modal=ensureBossRushModal();
    bossRush={
      running:true,
      pointer:Math.random()*100,
      dir:Math.random()>.5?1:-1,
      zoneLeft:40,
      zoneWidth:20,
      critWidth:4,
      comboIndex:0,
      success:0,
      maxCombo:cfg.maxCombo,
      crits:0,
      damage:0,
      timeLeft:cfg.times[0],
      timeLimit:cfg.times[0],
      pattern:'',
      patternLabel:'',
      activePatterns:[],
      finalVariance:.96+Math.random()*.08,
      raf:null,
      boss,
      config:cfg,
      lastTs:0
    };
    $('bossRushTitle').textContent=`${boss.name||cfg.name||'월드보스'} 레이드 2.1`;
    $('bossRushSub').textContent=`${cfg.maxCombo}콤보 레이드 2.1 · 시간 단축 · 강화 패턴 · 실패해도 성공 콤보만큼 피해 반영`;
    $('bossRushImg').src=boss.img||ctx.getBoss11Today().img;
    modal.classList.add('show');
    if($('bossRushResult')){$('bossRushResult').classList.remove('show');$('bossRushResult').innerHTML='';}
    const card=$('bossRushCard');
    if(card){card.className='boss-rush-card raid20';}
    if(isFrenzy()){
      ctx.shop20Toast('💀 광폭화 구간','패턴 발생률이 증가합니다.');
    }
    startNextCombo();
    ctx.render();
  }


  function showBossRaidResult(title, combo, max, crits, total, perfect, byFail){
    const result=$('bossRushResult');
    if(!result)return;
    const grade=perfect?(max>=10?'LEGENDARY RAID':'PERFECT RAID'):(byFail?'RAID BREAK':'RAID CLEAR');
    result.innerHTML=`<div class="result-title">${title}</div><div class="result-sub">${grade}</div><div class="result-damage">-${formatNumber(total)} DAMAGE</div><div class="result-mini"><div>콤보<b>${combo}/${max}</b></div><div>정밀타<b>${crits}회</b></div></div>`;
    result.classList.add('show');
  }

  function finishBossRush(byFail){
    if(!bossRush)return;
    bossRush.running=false;
    if(bossRush.raf)cancelAnimationFrame(bossRush.raf);
    const perfect=bossRush.success===bossRush.maxCombo;
    const total=calcBossRushTotalDamage(perfect);
    const combo=bossRush.success;
    const max=bossRush.maxCombo;
    const crits=bossRush.crits;
    const bossName=bossRush.boss?.name||bossRush.config.name||'월드보스';
    if(total>0){
      ctx.addPendingBossDamage(total);
      const title=perfect?'🔥 PERFECT RAID':byFail?'레이드 종료':'레이드 중단';
      ctx.addBoss11LocalLog(`${title} · ${combo}/${max}콤보 / 정밀 ${crits}회`,total);
      const card=$('boss11Card'),pop=$('boss11DamagePop');
      if(card){card.classList.remove('shake');void card.offsetWidth;card.classList.add('shake')}
      if(pop){pop.textContent=`-${formatNumber(total)}`;pop.classList.remove('show');void pop.offsetWidth;pop.classList.add('show')}
      const rushCard=$('bossRushCard');
      if(rushCard&&perfect){rushCard.classList.add('perfect');showRaidFloat(max>=10?'LEGENDARY RAID':'PERFECT RAID');}
      showBossRaidResult(perfect?(max>=10?'🔥 LEGENDARY RAID':'🔥 PERFECT RAID'):(byFail?'⚠ RAID BREAK':'🎣 RAID RESULT'),combo,max,crits,total,perfect,byFail);
      ctx.shop20Toast(perfect?'PERFECT RAID!':'보스 레이드 종료',`${bossName} · ${combo}/${max}콤보 · ${formatNumber(total)} 피해 누적`);
    }else if(byFail){
      ctx.shop20Toast('보스 레이드 실패','피해를 주지 못했습니다.');
    }
    const modal=$('bossRushModal');
    setTimeout(()=>{
      if(modal)modal.classList.remove('show');
      bossRush=null;
      ctx.render();
      if(ctx.currentMultiTab==='boss')ctx.loadMulti();
    }, perfect?760:220);
  }

  document.addEventListener('keydown',e=>{
    if(e.code==='Space'&&bossRush?.running){bossRushHit();e.preventDefault();}
  });
  window.bossRushHit=bossRushHit;
  window.startBossRush=startBossRush;
  window.finishBossRush=finishBossRush;
  window.boss11Attack=function(){startBossRush();};
}
