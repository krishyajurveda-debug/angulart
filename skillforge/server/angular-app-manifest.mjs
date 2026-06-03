
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
    'index.csr.html': {size: 9140, hash: 'b6358c0d0d7a5c84f99dfa3c739a74ea6da87d872d398ddb6817cb8b93997098', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1593, hash: '2f9c0446cf78634eb11cfe11d67d483981b8af23a992c545469ebf888a3ae7a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'callback/index.html': {size: 81870, hash: '14b576674a7f4a1f84e08b16d39332265eedc69044ec1b9722ecf409a3e68504', text: () => import('./assets-chunks/callback_index_html.mjs').then(m => m.default)},
    'terms/index.html': {size: 83397, hash: '31556f0465bfad8af87d6b5c24d09acee4589732b45d5ebc8b64c2ca81f9b959', text: () => import('./assets-chunks/terms_index_html.mjs').then(m => m.default)},
    'index.html': {size: 81870, hash: '14b576674a7f4a1f84e08b16d39332265eedc69044ec1b9722ecf409a3e68504', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WLOGRZ3R.css': {size: 123999, hash: '37SmtufT+N8', text: () => import('./assets-chunks/styles-WLOGRZ3R_css.mjs').then(m => m.default)}
  },
};
