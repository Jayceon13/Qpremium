
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about', component: () => import('pages/AboutPage.vue') },
      { path: '/contacts', component: () => import('pages/ContactPage.vue') },
      { path: '/examples', component: () => import('pages/ExamplesPage.vue') },
      { path: '/services', component: () => import('pages/ServicesPage.vue') },
      { path: '/doctors', component: () => import('pages/DoctorsPage.vue') }
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
