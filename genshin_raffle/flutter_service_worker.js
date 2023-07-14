'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7763a652224c686f33fbb688673de6d3",
"assets/AssetManifest.json": "71eba5e19ffa67f6f4656f7de3f99d9a",
"assets/assets/Albedo.mp4": "b5058898c2f3983cf8d783a3dcd14bff",
"assets/assets/Alhaitham.mp4": "23763241507b29eb420da408776cbc74",
"assets/assets/Amos'%2520Bow.mp4": "97edba3af5b81c8f1085e20016c5eb8e",
"assets/assets/Aquila%2520Favonia.mp4": "c93e5212a5918b2143e75c8063207ce3",
"assets/assets/Arataki%2520Itto.mp4": "2616c8bfd51d64d1b90aa4a27e6397c3",
"assets/assets/Barbara.jpg": "b9174ec8433676f32386debb2c0a58e2",
"assets/assets/Cyno.mp4": "02d966b29d65ff483748a4e2908d152c",
"assets/assets/Dehya.mp4": "7999dd9e4bbcbc9f3cd08bcfca5b37de",
"assets/assets/Diluc.mp4": "4d1dd9b88ced11b55388096da852c0c7",
"assets/assets/Eula.mp4": "bb9b6e792030c264f4b25f6b10bf525e",
"assets/assets/Ganyu.mp4": "bc391062413dbb9218c8d01cd528f26f",
"assets/assets/Hu%2520Tao.mp4": "41d475fb5ef748a4a60ed7886945847f",
"assets/assets/Jean.mp4": "291294ce6a0fc991b65f4a1b02d0edc9",
"assets/assets/Kaedehara%2520Kazuha.mp4": "8eb6a4536c793ddc648413889c523d92",
"assets/assets/Kamisato%2520Ayaka.mp4": "35ca615ff6c8525bdcf05f24f3013e9d",
"assets/assets/Kamisato%2520Ayato.mp4": "43a1ea50c3330f65af17ebc69739766a",
"assets/assets/Keqing.mp4": "7992cc4893eb210d0e76effbe4e6a287",
"assets/assets/Klee.mp4": "138c1a36699578bf25ab62005c1aa234",
"assets/assets/Lost%2520Prayer%2520to%2520the%2520Sacred%2520Winds.mp4": "fdbf0598e37210ad8d82e8b36463fd7a",
"assets/assets/Mona.mp4": "feb98bb09ace812e86a524d81ac1c36d",
"assets/assets/Nahida.mp4": "987b131791988800c41da1f1725a3155",
"assets/assets/Nilou.mp4": "7b08f2d987a98f41f454087322c7464d",
"assets/assets/Primordial%2520Jade%2520Winged-Spear.mp4": "e76b0002ea5d0c95347bdf4a7f3973c5",
"assets/assets/Qiqi.mp4": "a2ea272a6ede4a3500db5cd26be4fb9e",
"assets/assets/Raiden%2520Shogun.mp4": "d924ac53f59ba1c42f52a99c75a6a686",
"assets/assets/Sangonomiya%2520Kokomi.mp4": "e289673d7f19319204cdd190568f472a",
"assets/assets/Shenhe.mp4": "3378168dc599bc4b9305eaf6279db2a7",
"assets/assets/Skyward%2520Atlas.mp4": "029119281f017829ac3910092dbf7a0f",
"assets/assets/Skyward%2520Blade.mp4": "f06a9f499d6021fc9b47174e64acc73c",
"assets/assets/Skyward%2520Harp.mp4": "f280ffe7f3daeda799b9e84deb92b92b",
"assets/assets/Tartaglia.mp4": "10db738fc3568ede5056451b3a193c2b",
"assets/assets/Tighnari.mp4": "5eb6a45d407686b14cfa12b339584106",
"assets/assets/Venti.mp4": "35d018715ae30b0450ee31f381bbebfc",
"assets/assets/Wanderer.mp4": "3787a5462b84451a7fa2114be42d2224",
"assets/assets/Xiao.mp4": "5d8b1ccf303a7003e07b7d7fb0e4ad61",
"assets/assets/Yae%2520Miko.mp4": "1308077791c04dd883a01a376e98e0c1",
"assets/assets/Yelan.mp4": "6d0353084b0c7b5e2e4579caff504a56",
"assets/assets/Yoimiya.mp4": "a3206393c513edc935145bafeb17d861",
"assets/assets/Zhongli.mp4": "cb1efce07c3684efc4b5a9c0952ebc78",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "94d2655cf9bad6cae58464ee3065f8dd",
"assets/NOTICES": "f48f0e2790cbc421eebe615175075eee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "95c84426a4df78954f49460eae9e39ca",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9cb2e04701fd5f6fe9439705c83e25ca",
"/": "9cb2e04701fd5f6fe9439705c83e25ca",
"main.dart.js": "f5e8f57d4e61df33657c06488db641f3",
"manifest.json": "24a857a682a2694c8921a64d5f8a6e70",
"version.json": "0877c3ae5ef5188c01e13108a2e9eec8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
