
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/app"
  },
  {
    "renderMode": 0,
    "route": "/app/courses"
  },
  {
    "renderMode": 0,
    "route": "/app/courses/enroll/*/*"
  },
  {
    "renderMode": 0,
    "route": "/app/courses/pay/*/*"
  },
  {
    "renderMode": 0,
    "route": "/app/courses/result/*"
  },
  {
    "renderMode": 0,
    "route": "/app/courses/asses/*"
  },
  {
    "renderMode": 0,
    "route": "/app/courses/edit/*"
  },
  {
    "renderMode": 0,
    "route": "/app/courses/contentdetails/*"
  },
  {
    "renderMode": 0,
    "route": "/app/courses/details/*"
  },
  {
    "renderMode": 0,
    "route": "/app/analytics"
  },
  {
    "renderMode": 0,
    "route": "/app/analytics/*"
  },
  {
    "renderMode": 0,
    "route": "/app/stanalytics"
  },
  {
    "renderMode": 0,
    "route": "/app/adtanalytics"
  },
  {
    "renderMode": 2,
    "route": "/app/terms"
  },
  {
    "renderMode": 0,
    "route": "/app/alist"
  },
  {
    "renderMode": 0,
    "route": "/app/alist/edit/*"
  },
  {
    "renderMode": 0,
    "route": "/app/alist/linktoq/*"
  },
  {
    "renderMode": 0,
    "route": "/app/qlist"
  },
  {
    "renderMode": 0,
    "route": "/app/qlist/edit/*"
  },
  {
    "renderMode": 0,
    "route": "/app/clvlist"
  },
  {
    "renderMode": 2,
    "route": "/app/callback"
  },
  {
    "renderMode": 0,
    "route": "/app/addquestion"
  },
  {
    "renderMode": 0,
    "route": "/app/addnewcourse"
  },
  {
    "renderMode": 0,
    "route": "/app/addcontent"
  },
  {
    "renderMode": 0,
    "route": "/app/addassessment"
  },
  {
    "renderMode": 0,
    "route": "/app/courseplayer/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9140, hash: '8c906e4f87f5a0644147b13f285f8f0206de9420d2424b1fc7cc98bf85d78880', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1593, hash: 'e20029abe803ead74ffb38a6d1368626d9155bcea4f0a9bc2398b8bcc92f040f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81870, hash: '4125ba83b42b1f03b236a953235d47d4300079d90742167a0b71d543b5bb0718', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'callback/index.html': {size: 81870, hash: '4125ba83b42b1f03b236a953235d47d4300079d90742167a0b71d543b5bb0718', text: () => import('./assets-chunks/callback_index_html.mjs').then(m => m.default)},
    'terms/index.html': {size: 83397, hash: '6809489908228410e9cfa1f10997d9d06f28423c23300e2f470dd91644d86467', text: () => import('./assets-chunks/terms_index_html.mjs').then(m => m.default)},
    'styles-WLOGRZ3R.css': {size: 123999, hash: '37SmtufT+N8', text: () => import('./assets-chunks/styles-WLOGRZ3R_css.mjs').then(m => m.default)}
  },
};
