import {env} from "cloudflare:workers";
export async function POST(request:Request){
if(request.headers.get("origin")&&request.headers.get("origin")!==new URL(request.url).origin)return Response.json({error:"Invalid origin"},{status:403});
let body;try{body=await request.json();}catch{return Response.json({error:"Invalid request"},{status:400});}
const {name,email,dietary=""}=body??{};
if(typeof name!=="string"||!name.trim()||name.length>100||typeof email!=="string"||email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||typeof dietary!=="string"||dietary.length>500)return Response.json({error:"Kontrolli sisestatud andmeid."},{status:400});
try{if(!env.DB)throw Error("Database unavailable");await env.DB.prepare("INSERT INTO rsvps (name,email,dietary) VALUES (?,?,?) ON CONFLICT(email) DO NOTHING").bind(name.trim(),email.trim().toLowerCase(),dietary.trim()).run();return Response.json({confirmed:true});}catch(error){console.error("RSVP save failed",error);return Response.json({error:"Palun proovi uuesti."},{status:503});}}
