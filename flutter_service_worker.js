'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c87269dd4be80cd2f8649329e87def83",
"index.html": "04185712e9e16883910d4168636a7756",
"/": "04185712e9e16883910d4168636a7756",
"main.dart.js": "0e27160645d9d6df9ed40893d3850f7c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2d21c636f596d7a1b70c378bb3dc4bc8",
".git/config": "925303bcce90dc404cb1736c4c5de61d",
".git/objects/61/7a5d0bacbb6aa02d7dd2626683054b42bd8759": "f5235538c29f8353cf3d0c758e946e78",
".git/objects/9b/7d294090749dfd47d272abb43505f603290528": "d5d8e548b36e0317f051b6ccff372c9f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/05/7dbf1fd28f91aaa2b742718efd0931774dac04": "30819fb328555641a5170bb1db580383",
".git/objects/a4/eca0348204d400ef572320aba0cf91460931e7": "4c2ac7a89d4953ee09d328a5f6c2e3c8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/c96e24e62e40586e67dbcf08b11d867de57a7e": "805facb3a5b0cbfcc67d24b74c91a752",
".git/objects/4e/ce96331d06cd1f139d7f80988e72d22225d103": "2bba7e7bea64a13ec1219a7240768ec1",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/72f9b8e48f4b5d3274e1d3fc3d9ee37559ed66": "0ab5b37d550216ddb090809da512f2fe",
".git/objects/27/c6d3330d50bc531974ebf342af3c0d75241d28": "17d510460e06322d6ca90a12d1b5392f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/74/47a6fc930c3f3cee1f3d02eaa186adaf76865f": "dba8c006bc3161d2571e07d4e39c3f57",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/5d18d4d5303f59d94a87e567098861a7cf6077": "aefc443e82485fc97c42bce8836a911b",
".git/objects/21/52f77e9bae8e71e781e6b633ae08350ad9020f": "75ea995bddc5a2910aac8f8a7dc3ce25",
".git/objects/2a/6b7c022c9675eb2bc63d56c05889ca705db8d1": "00f3853fc58af10c5a996f9b1b6d9fab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/62/c1f4d940a1142a9f18a56e824ae58e34fdb3d4": "c4b4490a5201b3205dbdfa216ba921d6",
".git/objects/99/9bcf20a690eb07e722a5b0d8a66bb25054d9d2": "4942a2f84170701fc46defc385caa898",
".git/objects/90/d989d0a0f7dbe1f0f7bdff9f5df78bb68a143e": "e83c7a942b7b0c24c27aba7b0856e571",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/0aafdda8c776633616598e2b841ad48a9821b9": "cadc84345b015972ed4b182a6f3beb08",
".git/objects/f7/fb665929327e5eda367726c528168aa2f130f7": "fdd05314d76b0b7d4cc109e4d938c282",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/6d84d463ffa312bfa38668d4f2fdbeb1136ad2": "f2e319daa8c372db61b64f9177a6d8c3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4f/f27974d8ff40ab87a4bd08fd80e13a5f623bef": "d7ec0d465031181097dffede22cd4429",
".git/objects/2e/53e6fd8f885c8a4e122d173f5c74ceed730ac7": "47e86e8ab6566d16bee3a292f58f6d2e",
".git/objects/47/841142b17cc9b45949fb6ffad7fa84d4cad626": "d4314035964bd860ea4cbd579ecbad50",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1f47649e482bb3a345263f258d2e04d9",
".git/logs/refs/heads/master": "1f47649e482bb3a345263f258d2e04d9",
".git/logs/refs/remotes/origin/master": "00b6226ca9847c96fba154ed0512c079",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "183e0acf77fe28e41928bd9af301f058",
".git/refs/remotes/origin/master": "183e0acf77fe28e41928bd9af301f058",
".git/index": "42ecefac1c51e0075a09efa4cba26409",
".git/COMMIT_EDITMSG": "4ac1dcf49d8b721165c4057819f0862b",
"assets/AssetManifest.json": "13954ad42bc0996865ff41df984016ab",
"assets/NOTICES": "db2cdf1c550b2f25d3e561c24d62ea10",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/porro.png": "df7390da04ad44417fcef2adaee706e7",
"assets/assets/images/sedano.png": "85e5b30faf01957415a5ee304f6c9eaa",
"assets/assets/images/patata.png": "9e2d1f3bdfb8788346d1588ec6c86d2d",
"assets/assets/images/basilico.png": "c8eb9f813689e1324c15bf142d479cd1",
"assets/assets/images/pomodoro.png": "4765ad7bb8041a18d2a5b262405c6bb6",
"assets/assets/images/fragola.png": "a0a26dc3db5a78cdcc1aa63c76863f28",
"assets/assets/images/cetriolo.png": "7980987bf055c60e4e249ce4dbb8078a",
"assets/assets/images/cipolla.png": "c9e9957571e059f8cd16e70062ea6b37",
"assets/assets/images/carota.png": "93d2a7a1cd312214d6ad0f904c490bc5",
"assets/assets/images/cavolfiore.png": "3bcbf0ba887a02544d9f462e8fc9dc93",
"assets/assets/images/lattuga.png": "1522f8548f41911742685d20032a90b3",
"assets/assets/images/melanzana.png": "cf579cb106b2954f215abc4a34662c43",
"assets/assets/images/spinacio.png": "e526807be4abd057ab45bd4dc19e5ce1",
"assets/assets/images/cavolocappuccio.png": "787703935613192f06931d1ff1e33afd",
"assets/assets/images/zucca.png": "38d912d6e5c00045b26fe610cebeb6b6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
