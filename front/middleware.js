// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const url = new URL(request.url);

//   // Пример перенаправления с `/search` на `/admin`
//   if (url.pathname === '/info') {
//     const query = url.searchParams.get('query');
//     if (query) {
//       url.pathname = '/admin';
//       return NextResponse.redirect(url);
//     }
//   }

//   return NextResponse.next(); // Позволяет обработке продолжиться
// }