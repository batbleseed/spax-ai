
const box=document.getElementById('messages');
let history=[{role:'system',content:'You are Spax AI, a helpful galaxy-themed assistant.'}];

if(!localStorage.getItem('groq_api_key')) setApiKey();

function setApiKey(){
 const k=prompt('Enter your Groq API key (gsk_...)');
 if(k) localStorage.setItem('groq_api_key',k);
}
function add(text,type){
 const d=document.createElement('div');
 d.className='msg '+type;
 d.textContent=text;
 box.appendChild(d);
 box.scrollTop=box.scrollHeight;
}
function saveConversation(){
 localStorage.setItem('spax_current_chat',JSON.stringify(history));
}
function newChat(){
 history=[{role:'system',content:'You are Spax AI, a helpful galaxy-themed assistant.'}];
 box.innerHTML='';
 saveConversation();
}
async function sendMessage(){
 const input=document.getElementById('message');
 const text=input.value.trim();
 if(!text) return;
 add(text,'user');
 history.push({role:'user',content:text});
 input.value='';

 const thinking=document.createElement('div');
 thinking.className='msg ai';
 thinking.textContent='Spax is thinking...';
 box.appendChild(thinking);

 try{
 const r=await fetch('https://api.groq.com/openai/v1/chat/completions',{
 method:'POST',
 headers:{
 'Authorization':'Bearer '+localStorage.getItem('groq_api_key'),
 'Content-Type':'application/json'
 },
 body:JSON.stringify({
 model:document.getElementById('model').value,
 messages:history
 })
 });
 const data=await r.json();
 thinking.remove();
 const reply=data.choices[0].message.content;
 add(reply,'ai');
 history.push({role:'assistant',content:reply});
 saveConversation();
 }catch(e){
 thinking.remove();
 add('Error connecting to Groq. Check API key or model.','ai');
 }
}
