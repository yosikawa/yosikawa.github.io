// service-worker.js
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

// ����ł́A���̏����������Ȃ���Service Worker���L���Ɣ��肳��Ȃ��悤�ł�
self.addEventListener('fetch', function(event) {});
