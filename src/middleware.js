// import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';

// function middleware(request) {
//     const url=request.nextUrl.clone();
//     let isLogin=request.cookies.get('logged');
//     if(!isLogin){
//         if(request.nextUrl.pathname.startsWith('/Dashboard'))
//         {
//             return NextResponse.rewrite(new URL('/',request.url))
//         }
//     }else{
//         if(url.pathname==='/')
//         {
//             url.pathname='/Dashboard'
//             return NextResponse.redirect(url);
//         }
//     }
//   if (request.nextUrl.pathname.startsWith('/Login')) {
//     return NextResponse.rewrite(new URL('/', request.url));
//   }
// }

// export default { middleware };

import { NextResponse } from "next/server";

export default function middleware(req) {
  console.log(req);
  let verify = req.cookies.get("token");
  console.log(verify);
  let url = req.url;
  console.log("url" + url);

if(verify && (url==="http://localhost:3000/SignIn" || url==="http://localhost:3000/SignUp")){
  return NextResponse.redirect("http://localhost:3000/");
}
if(!verify && (url==="http://localhost:3000/")){
  return NextResponse.redirect("http://localhost:3000/SignIn");
}


  // if (!verify ) {
  //   if (url !== "http://localhost:3000/SignIn") {
  //     return NextResponse.redirect("http://localhost:3000/SignIn");
  //   }
  // }
  // if (verify) {
  //   {
  //     if (verify !== undefined) {
  //       if (url !== "http://localhost:3000/") {
  //         return NextResponse.redirect("http://localhost:3000/");
  //       }
  //     }
  //   }
  // }
}
