
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/courses"
  },
  {
    "renderMode": 0,
    "route": "/courses/enroll/*/*"
  },
  {
    "renderMode": 0,
    "route": "/courses/pay/*/*"
  },
  {
    "renderMode": 0,
    "route": "/courses/result/*"
  },
  {
    "renderMode": 0,
    "route": "/courses/asses/*"
  },
  {
    "renderMode": 0,
    "route": "/courses/edit/*"
  },
  {
    "renderMode": 0,
    "route": "/courses/contentdetails/*"
  },
  {
    "renderMode": 0,
    "route": "/courses/details/*"
  },
  {
    "renderMode": 0,
    "route": "/analytics"
  },
  {
    "renderMode": 0,
    "route": "/analytics/*"
  },
  {
    "renderMode": 0,
    "route": "/stanalytics"
  },
  {
    "renderMode": 0,
    "route": "/adtanalytics"
  },
  {
    "renderMode": 2,
    "route": "/terms"
  },
  {
    "renderMode": 0,
    "route": "/alist"
  },
  {
    "renderMode": 0,
    "route": "/alist/edit/*"
  },
  {
    "renderMode": 0,
    "route": "/alist/linktoq/*"
  },
  {
    "renderMode": 0,
    "route": "/qlist"
  },
  {
    "renderMode": 0,
    "route": "/qlist/edit/*"
  },
  {
    "renderMode": 0,
    "route": "/clvlist"
  },
  {
    "renderMode": 2,
    "route": "/callback"
  },
  {
    "renderMode": 0,
    "route": "/addquestion"
  },
  {
    "renderMode": 0,
    "route": "/addnewcourse"
  },
  {
    "renderMode": 0,
    "route": "/addcontent"
  },
  {
    "renderMode": 0,
    "route": "/addassessment"
  },
  {
    "renderMode": 0,
    "route": "/courseplayer/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9136, hash: '532d43796764878e753c3b96650aa61d40763f08c5e03cd128d8cf640cf8e727', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1589, hash: '9a41547014b325dbbda978e4535d9f5d384609cd68ddc8073911d84f617ef7bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81858, hash: '249f3ca287e8e8e4fb1a76b3bd95b4a4ba028dd27d21648c0f5efa0f4b206bbf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'callback/index.html': {size: 81858, hash: '249f3ca287e8e8e4fb1a76b3bd95b4a4ba028dd27d21648c0f5efa0f4b206bbf', text: () => import('./assets-chunks/callback_index_html.mjs').then(m => m.default)},
    'terms/index.html': {size: 83385, hash: '8102c9d210fba4b9ae9b237b2628df024afacfd34d586bbe2491d509e4f7885c', text: () => import('./assets-chunks/terms_index_html.mjs').then(m => m.default)},
    'styles-WLOGRZ3R.css': {size: 123999, hash: '37SmtufT+N8', text: () => import('./assets-chunks/styles-WLOGRZ3R_css.mjs').then(m => m.default)}
  },
};
