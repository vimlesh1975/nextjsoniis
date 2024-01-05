import excuteQuery from './db';

export async function POST(req, res) {
  const body = await req.json();
 
  const aa = await excuteQuery(body.query ,'');
  // console.log(aa)
  return new Response(JSON.stringify(aa));
}
