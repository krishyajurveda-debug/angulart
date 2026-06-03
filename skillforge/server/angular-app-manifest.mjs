
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
    'index.csr.html': {size: 9140, hash: '8dc476f92c350aeb8b248c68e813151e5b46fa504f97bcce326cf84c9dad2ad3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1593, hash: '69de77f8a3701d98bc909fe36e2d5b6c56f8f0880c8b6207c5659a3e9c89f035', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81870, hash: 'f9b84c0f119e4750404b19645bcfc9bd71ee292973e3d69d1072ac517baba802', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'callback/index.html': {size: 81870, hash: 'f9b84c0f119e4750404b19645bcfc9bd71ee292973e3d69d1072ac517baba802', text: () => import('./assets-chunks/callback_index_html.mjs').then(m => m.default)},
    'terms/index.html': {size: 83397, hash: 'ea2ab539460b9783dd73f860a1a8d5f7e1e8885a0f6a1417bb33d6824ad1aa3c', text: () => import('./assets-chunks/terms_index_html.mjs').then(m => m.default)},
    'styles-WLOGRZ3R.css': {size: 123999, hash: '37SmtufT+N8', text: () => import('./assets-chunks/styles-WLOGRZ3R_css.mjs').then(m => m.default)}
  },
};
