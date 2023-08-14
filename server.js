import express, { json } from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const PORT =8000;
const app=express();
app.use(json());
app.use(cors());

const API_KEY='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';

app.post('/completions',async(req,res)=>{
  const options={
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${API_KEY}`
    },
    body:JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          "content": "How are You?",
        }
      ],
      max_tokens:100
    })
  }
  try {
    const response =await fetch("https://api.openai.com/v1/chat/completions",options);
    const data =await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
})

app.listen(PORT,()=>{console.log("App is listening")});