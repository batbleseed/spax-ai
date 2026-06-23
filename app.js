const chat=document.getElementById('chat');

if(!localStorage.getItem('groq_api_key')){
 const k=prompt('Enter your Groq API Key (gsk_...)');
 if(k) localStorage.setItem('groq_api_key',k);
}

function add(text,type){
 const d=document.createElement('div');
 d.className='msg '+type;
 d.textContent=text;
 chat.appendChild(d);
 chat.scrollTop=chat.scrollHeight;
}

function newChat(){
 chat.innerHTML='';
}

function changeKey(){
 const k=prompt('New Groq API Key:');
 if(k) localStorage.setItem('groq_api_key',k);
}

async function sendMessage(){
 const input=document.getElementById('message');
 const text=input.value.trim();
 if(!text) return;

 add(text,'user');
 input.value='';

 const thinking=document.createElement('div');
 thinking.className='msg ai';
 thinking.textContent='Thinking...';
 chat.appendChild(thinking);

 try{
   const apiKey=localStorage.getItem('groq_api_key');
   const response=await fetch('https://api.groq.com/openai/v1/chat/completions',{
      method:'POST',
      headers:{
        'Authorization':'Bearer '+apiKey,
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        model:'llama-3.3-70b-versatile',
        messages:[{role:'user',content:text}]
      })
   });

   const data=await response.json();
   thinking.remove();
   add(data.choices[0].message.content,'ai');
 }catch(e){
   thinking.remove();
   add('Connection error. Check API key and browser console.','ai');
 }
}