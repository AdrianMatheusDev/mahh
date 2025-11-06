export function startHearts(){
  const canvas = document.getElementById('hearts-canvas');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = innerWidth;
  let H = canvas.height = innerHeight;
  const hearts = [];

  function Heart(x,y,sz,vy,angle,va,color){
    this.x=x;this.y=y;this.sz=sz;this.vy=vy;this.angle=angle;this.va=va;this.color=color;
  }
  Heart.prototype.step = function(){
    this.y += this.vy;
    this.x += Math.sin(this.y*0.01)*0.4;
    this.angle += this.va;
    if(this.y - this.sz > H) { this.y = -20 - Math.random()*60; this.x = Math.random()*W; }
  };
  Heart.prototype.draw = function(g){
    g.save();
    g.translate(this.x,this.y);
    g.rotate(this.angle);
    g.fillStyle=this.color;
    // simple rounded heart shape
    g.beginPath();
    const s = this.sz/2;
    g.moveTo(0,-s/1.4);
    g.bezierCurveTo(-s,-s,-s*1.4,-s/3,0,s);
    g.bezierCurveTo(s*1.4,-s/3,s,-s,0,-s/1.4);
    g.fill();
    // soft glow
    g.globalAlpha = 0.12;
    g.fillStyle = this.color;
    g.beginPath();
    g.arc(0,0,this.sz*1.1,0,Math.PI*2);
    g.fill();
    g.restore();
    g.globalAlpha = 1;
  };

  function randColor(){
    // verdes suaves e tons esmeralda
    const a = 0.6 + Math.random()*0.35;
    const g = 160 + Math.floor(Math.random()*95);
    const r = 10 + Math.floor(Math.random()*40);
    const b = 80 + Math.floor(Math.random()*80);
    return `rgba(${r},${g},${b},${a})`;
  }

  for(let i=0;i<36;i++){
    hearts.push(new Heart(Math.random()*W, Math.random()*H, 12+Math.random()*34, 0.25+Math.random()*1.0, Math.random()*Math.PI*2, (Math.random()-0.5)*0.04, randColor()));
  }

  function onResize(){ W = canvas.width = innerWidth; H = canvas.height = innerHeight; }
  addEventListener('resize', onResize);

  function loop(){
    ctx.clearRect(0,0,W,H);
    // subtle overlay to tint towards green
    ctx.fillStyle = 'rgba(4,28,18,0.06)';
    ctx.fillRect(0,0,W,H);

    for(const h of hearts){
      h.step();
      h.draw(ctx);
    }
    requestAnimationFrame(loop);
  }
  loop();
}