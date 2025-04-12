import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/View/LoginView.vue';
import Home from '@/View/HomeView.vue';
import About from '@/View/AboutView.vue';
import Contact from '@/View/ContactView.vue';
import Profile from '@/View/ProfileView.vue';
import Jadwal from '@/View/JadwalView.vue';
import KhsKrs from '@/View/KhsKrsView.vue';
import Dokumen from '@/View/DokumenView.vue';
import Keuangan from '@/View/KeuanganView.vue';
import Dosen from '@/View/DosenView.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home }, 
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/profile', component: Profile },
  { path: '/jadwal', component: Jadwal },
  { path: '/khskrs', component: KhsKrs },
  { path: '/dokumen', component: Dokumen },
  { path: '/keuangan', component: Keuangan },
  { path: '/dosen', component: Dosen },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
