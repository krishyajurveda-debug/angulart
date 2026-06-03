
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
    'index.csr.html': {size: 9136, hash: 'ff45b26a9d11de675cc7b51acbdcd9154cd15e0e25f9c55c61606b740ee8c875', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1589, hash: '8b3a58f85b08db9af3ea728f17f5ccd87098d6426abee590f82b592280bfd8df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81858, hash: '35501b8329c1a0b98a809e8afa7d439142d04f428e862c8ae986c7f3c1b03185', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'callback/index.html': {size: 81858, hash: '35501b8329c1a0b98a809e8afa7d439142d04f428e862c8ae986c7f3c1b03185', text: () => import('./assets-chunks/callback_index_html.mjs').then(m => m.default)},
    'terms/index.html': {size: 83385, hash: '4ba8f9f6e10c76d4b8a7c755a934204b4a90e0e7290b451fccb5525d81f40ae3', text: () => import('./assets-chunks/terms_index_html.mjs').then(m => m.default)},
    'styles-WLOGRZ3R.css': {size: 123999, hash: '37SmtufT+N8', text: () => import('./assets-chunks/styles-WLOGRZ3R_css.mjs').then(m => m.default)}
  },
};
