'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "51a013f7e9ae591e24c6d0029084e1f9",
"/": "51a013f7e9ae591e24c6d0029084e1f9",
"manifest.json": "eb83fcbcb2904702dbfd8df90b1fa541",
"version.json": "57c62549eebdff80b8da8ec68bc7e464",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/assets/images/background39.jpg": "b3b9e21b68745a0fda1f023f76663ced",
"assets/assets/images/background33.jpg": "669b906dd0b61030da798298fd7730d3",
"assets/assets/images/tmdb.svg": "24a6fdb93a3bb0275107bfc71637cb21",
"assets/assets/images/background20.jpg": "c6eb3dde23e70a0f7ebbbc4cc5806f2d",
"assets/assets/images/tmdb.png": "44bd2581970edea5b463dfa04c0ad8ae",
"assets/assets/images/background47.jpg": "e89fd2c0b3250ddadb909463f8d862f4",
"assets/assets/images/background12.jpg": "f44aa397ab88c237ea958462ea87bb7f",
"assets/assets/images/background32.jpg": "6bb388f58f6f7073a9ab6307d90c0508",
"assets/assets/images/background44.jpg": "003064822096c4bf1ab51e05ca0ba837",
"assets/assets/images/background13.jpg": "1491088b92fe3f2aa3ac31fce3fdaf97",
"assets/assets/images/background40.jpg": "68fd1c186e509f8b3f0cecbf70f64e05",
"assets/assets/images/background22.jpg": "08612a1681e687ceb92e2459f5d69f75",
"assets/assets/images/background38.jpg": "f5ade401bbf7026e7e5034935937f9ea",
"assets/assets/images/background31.jpg": "b7e0a33070e7968077f1a586e7efe250",
"assets/assets/images/background29.jpg": "3cc044dec9d14d899f17cc2c8164dc18",
"assets/assets/images/background42.jpg": "f33170e1e1b0a2ec41880c54d1b06285",
"assets/assets/images/background27.jpg": "01decd67f663be12fdf5fe6cc2f9cc7f",
"assets/assets/images/background46.jpg": "0c7fe8fa5262d6db2991b14df7835f96",
"assets/assets/images/background36.jpg": "919ab5e6bd910a52c76575cd9b3cbaa6",
"assets/assets/images/background18.jpg": "259dc6474840b343db638281bf84692d",
"assets/assets/images/background45.jpg": "d57fe497eca8813e9caf4e93320146e7",
"assets/assets/images/background34.jpg": "98a4b1828fbba4f0ffb046a8fd3b76af",
"assets/assets/images/background17.jpg": "2a35193f43079ec862b0d73965c240c3",
"assets/assets/images/background21.jpg": "8ebc5541d9a7ddeb8ff962c2e01800cf",
"assets/assets/images/background28.jpg": "d72dec07f17705ee0a15d197e7bff3ee",
"assets/assets/images/background35.jpg": "efd4addc8e97bbdabf7908e0596a2025",
"assets/assets/images/background37.jpg": "b4d28c76b34cad2943eca9c15e24978d",
"assets/assets/images/background11.jpg": "19b2040bfd0e1109021b5b03c708f250",
"assets/assets/images/background24.jpg": "610b449f830d3a88cbb8249b592f3f83",
"assets/assets/images/background30.jpg": "5c25948ea7728545ee7d4791d44b2433",
"assets/assets/images/background16.jpg": "bbd881d2e022e57352ecf494aec9a20b",
"assets/assets/images/background25.jpg": "e2e861004f8157061b925a9f26465e90",
"assets/assets/images/background14.jpg": "1bb6fdd01f6f5234a03c57c2141317fd",
"assets/assets/images/background19.jpg": "4276afab3116bf0907c4990aa201a38c",
"assets/assets/images/background43.jpg": "aa61de03c93f68152b6bdf16f65005a6",
"assets/assets/images/background15.jpg": "75633539577bcfaf42bd3e971bf2a20d",
"assets/assets/images/background23.jpg": "3c6e63d8aa7ef28a5317f66a10bcf477",
"assets/assets/images/background41.jpg": "ad35f101b483be44ff174e1d70731d0b",
"assets/assets/images/background26.jpg": "3a207120d326c57a35683744379a1aaf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/AssetManifest.json": "7c26a19415e038468ff69290343a2403",
"assets/NOTICES": "99e10e6576e27991ec6739d5137e9df8",
"main.dart.js": "5905cfa27af1d1b823200a6b6c4ba3f2",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
