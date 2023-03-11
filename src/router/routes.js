
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), meta: { key: '' } },
      { path: '/about', component: () => import('pages/AboutPage.vue'), meta: { key: '/about' } },
      { path: '/contacts', component: () => import('pages/ContactPage.vue'), meta: { key: '/contacts' } },
      { path: '/examples', component: () => import('pages/ExamplesPage.vue'), meta: { key: '/examples' } },
      { path: '/services', component: () => import('pages/ServicesPage.vue'), meta: { key: '/services' } },
      { path: '/doctors', component: () => import('pages/DoctorsPage.vue'), meta: { key: '/doctors' } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
