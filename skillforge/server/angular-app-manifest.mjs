
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
    'index.csr.html': {size: 9136, hash: 'bfed4349c694ca58f81c8884282254cc68f754616cf09bdca1f3191e83712856', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1589, hash: '854354f8d4a2b9a288892d8c773e5ed50b3d97f8ef88e9403d899728f4a9a6be', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81858, hash: '073ad6ea247493ec3bcc348e09dbffc8988374ec592e83aae4140628853de47b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'callback/index.html': {size: 81858, hash: '073ad6ea247493ec3bcc348e09dbffc8988374ec592e83aae4140628853de47b', text: () => import('./assets-chunks/callback_index_html.mjs').then(m => m.default)},
    'terms/index.html': {size: 83385, hash: '298d8199b90d2c5f472cfeb0e809cf6713a2b7eecb3be2079013d5235c60709f', text: () => import('./assets-chunks/terms_index_html.mjs').then(m => m.default)},
    'styles-WLOGRZ3R.css': {size: 123999, hash: '37SmtufT+N8', text: () => import('./assets-chunks/styles-WLOGRZ3R_css.mjs').then(m => m.default)}
  },
};
