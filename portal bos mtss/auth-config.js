/*
 * Frontend authentication configuration only.
 * Keep passwords, client secrets, Firebase private keys, and token signing
 * secrets on the server. The backend should use secure, HttpOnly cookies.
 */
window.AUTH_CONFIG = Object.freeze({
  // Isi dengan OAuth 2.0 Client ID bertipe Web dari Google Cloud Console.
  googleClientId: '',
  frontendGoogleAuth: true,
  loginEndpoint: '/api/auth/login',
  // Backend harus memulai OAuth Google, memvalidasi callback/state, lalu
  // membuat session HttpOnly sebelum mengarahkan kembali ke halaman ini.
  googleEndpoint: '/api/auth/google',
  logoutEndpoint: '/api/auth/logout',
  sessionEndpoint: '/api/auth/session',
  forgotPasswordUrl: '/api/auth/forgot-password',
  // Semua endpoint wajib memvalidasi session dan role di server.
  // Frontend tidak menyimpan password, token, atau secret.
  requestDefaults: { credentials: 'include', headers: { Accept: 'application/json' } },
  // Endpoint data harus memvalidasi session dan role di server.
  api: {
    dashboard: '/api/dashboard',
    inventory: '/api/inventory',
    budgets: '/api/budgets',
    activities: '/api/activities',
    users: '/api/users'
  },
  // Kontrak tabel minimal untuk implementasi database backend.
  databaseTables: ['users', 'inventory', 'budgets', 'activities'],
  // Mode online: autentikasi, hashing password, session, dan role wajib
  // divalidasi oleh backend. Tidak ada kredensial yang disimpan di frontend.
  localDevelopmentMode: true,
  temporaryAccount: {
    name: 'Akun Demo Bendahara',
    email: 'demo@mtsassunnah.sch.id',
    password: 'DemoBOS2026!',
    role: 'bendahara'
  },
  sessionTimeoutMinutes: 30,
  publicLanding: true
});
