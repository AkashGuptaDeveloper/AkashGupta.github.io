'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2beb400c08fd3c6c8766f4e01b930319",
"assets/assets/background.png": "0614a717659df3fd409c60ff04fac983",
"assets/assets/certificates/flutter-cert.pdf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/certificates/flutter-cert.png": "907053a7600c48f553d4287e45960569",
"assets/assets/certificates/me.jpg": "b07d78ab3e6200afd9cb1694562f8bbb",
"assets/assets/certificates/Resume-RyanLertola.pdf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/certificates/Resume-RyanLertola.png": "1d99ab511204543c42d2316437e68a28",
"assets/assets/certificates/resume.png": "336b85fbf9ce815f7c5f598d0e6f84f7",
"assets/assets/certificates/treehouse-cert.pdf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/certificates/treehouse-cert.png": "416719bb952a342f01dece71e06ce71b",
"assets/assets/certificates/WesBosReact-cert.png": "bb055f56882902279a1359daad647bc1",
"assets/assets/certificates/WesBosReactCert.pdf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/Fonts/Raleway-Italic.ttf": "b43297391b7d5d5d7b135958668c1876",
"assets/assets/Fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/assets/Fonts/Raleway-SemiBold.ttf": "5a25c50b181b07279489ce5bb6a9545c",
"assets/assets/images/Ar/Untitled11.png": "8cc32c6b00a14d626b1201fc532ea770",
"assets/assets/images/Ar/Untitledaa.png": "11fd156036f13624711df0d87ca46731",
"assets/assets/images/Company/bsli.jpg": "102e0c878cda1d85dcadaf8448623c0a",
"assets/assets/images/Company/gravipass.png": "ee4609336fd1202e6248b19e8394c71f",
"assets/assets/images/Company/iems.jpg": "479660b9b7fd944f23d023a3c31c5a05",
"assets/assets/images/Company/ITDose.png": "2cf614102b3cc34683f5da4d6a28edfa",
"assets/assets/images/Company/xenium.jpg": "92081534863599c09c95c2e0b68c3db8",
"assets/assets/images/Isfc/isfc.png": "fdddd3f52263c69e4f0ef4a24e8b4bd5",
"assets/assets/images/Isfc/isfc1.png": "32d6306ac21795669f9c6461c0d0b22b",
"assets/assets/images/Isfc/isfc2.png": "815a8fec3d0ce859d79ee3f8745edabe",
"assets/assets/images/Mdsons/splash.jpg": "def1d2542c8c3aea66d8af461464ea7a",
"assets/assets/images/Mdsons/splash1.jpg": "d1c5d4c528666d4957afe119fcafe592",
"assets/assets/images/Mdsons/splash2.jpg": "6cef5745298dd5f5fe0b0af107d27c91",
"assets/assets/images/MediMile/mediamile.png": "42fdfd2acd3ccacf4a8adffa59084257",
"assets/assets/images/MediMile/mediamile1.png": "1692d48b3d8456595279982d5260c3a7",
"assets/assets/images/MediMile/mediamile2.png": "effcf3395422e184bb34f419bac4a010",
"assets/assets/images/MediMile/mediamilea.png": "122c75fb8ca55e9182f911d94f67e2b2",
"assets/assets/images/MediMile/mediamiles.png": "8653cd141352dfdfae1983a3a32e7ece",
"assets/assets/images/Tetoota/tetoota.png": "592aa78cdbd5fc68b799068f11a1c705",
"assets/assets/images/Tetoota/tetoota2.png": "3cfa6679a5108dd946d8d43ce3ac2f66",
"assets/assets/images/Tetoota/tetoota4.png": "a473d8df3d0b3484c0409e7fe14f7117",
"assets/assets/images/Tetoota/tettota1.png": "9304db292541b8191a40cb9e9ba243ab",
"assets/assets/images/Thekedaar/Thedaar1.png": "60bcc3f993f6402debe79a5bf5be1a98",
"assets/assets/images/Thekedaar/Thedaar3.png": "7019da310ee93e739d731346f14d967c",
"assets/assets/images/Thekedaar/Thekedaar2.png": "5c3bef9870e405b7134b08663ba1b8f3",
"assets/assets/images/Thekedaar/Thekedaar4.png": "4906532b4973e877e97917f0f8594e7a",
"assets/assets/images/TheSuccessPath/TheSuccess.png": "33567bef975e66e8adfcf35226521721",
"assets/assets/images/TheSuccessPath/TheSuccessPath.png": "6eafea3d2168a744a82b41f22b2cd36b",
"assets/assets/images/TheSuccessPath/TheSuccessPathlogo.png": "908b5595e1b0da771b221fa09588e6d4",
"assets/assets/images/TheSuccessPath/TheSuccessPathlogos.png": "f7acd5779a93614f17522dafcd8ebd4f",
"assets/assets/images/TheSuccessPath/TheSuccessPathlogoss.png": "6029850e12d462b62bc5a5245485ddb1",
"assets/assets/images/TheSuccessPath/TheSuccessPaths.png": "deb4514359f8274c37ca09f4559779b5",
"assets/assets/images/wcschool/Untitleds.png": "baa002ba4f6ecfa194e4942321afc248",
"assets/assets/images/wcschool/Untitledw.png": "9c84d6644e9fd18700e70ad5a0bf6a81",
"assets/assets/images/wcschool/wcschools.png": "3c7278de6acb6ad644505e1c1b0bc30b",
"assets/assets/images/wcschool/wcscool.png": "2b5011d4b63a56298dae1cb090b677cb",
"assets/assets/person.jpg": "97e3ef4d84dbcf76c42e8b4fd41fd0b9",
"assets/assets/skills_icons/androidstudio80.png": "758d4b75d8dfe44011e03cdacf74b548",
"assets/assets/skills_icons/commandline80.png": "26904fde86522a161ae01f6d46dbbdb1",
"assets/assets/skills_icons/css80.png": "8df7dc80bef91233787d970fd9524f7f",
"assets/assets/skills_icons/dart80.png": "759f9161b8e872c788eeb75b10d63ca2",
"assets/assets/skills_icons/express80.png": "8795a88c982cb0f47e035fcc8f381110",
"assets/assets/skills_icons/firebase80.png": "f11f3d84aaaf83db88919301e9a72590",
"assets/assets/skills_icons/firebaseblue80.png": "7da58e76706545be8332b3de696b53d3",
"assets/assets/skills_icons/flutter80.png": "c836f244d43b4e9a11660d0836b58ed6",
"assets/assets/skills_icons/github80.png": "77617d7a820778575228f3e6799f727b",
"assets/assets/skills_icons/html80.png": "0877f43a87df17a9ae796a23cb59a2cd",
"assets/assets/skills_icons/javascript80.png": "4e4752dc335b95d350de5638939851ce",
"assets/assets/skills_icons/jquery80.png": "68a7051984d557ff3e3370bcdb281a03",
"assets/assets/skills_icons/json80.png": "efa77ce462ce24c6b8d9c2e692343b99",
"assets/assets/skills_icons/kotlin76.png": "15a54ff81d5634af918355f8564c1d9e",
"assets/assets/skills_icons/kotlin80.png": "c75c8b0077ffbb5e4bb1e1780b23bf6f",
"assets/assets/skills_icons/mongodb80.png": "a032b6fb4ba9ccc196ede7d0ee5ab9ee",
"assets/assets/skills_icons/mongoose76.png": "b941f4b9d9458538b776a705480db481",
"assets/assets/skills_icons/mysql80.png": "8f2010b7ab02ed31a34ccd4afcfaa97a",
"assets/assets/skills_icons/node80.png": "b14064fc8595481edf428f7dc4564de1",
"assets/assets/skills_icons/nodejs80.png": "46d0a6bd4c817d3f34da7ba82e615541",
"assets/assets/skills_icons/npm80.png": "e70125196956145e17103c00eab80268",
"assets/assets/skills_icons/pugtrans80.png": "779fc745f3ad46f6f50679b8f4996f51",
"assets/assets/skills_icons/react80.png": "8929e5f570a83393dcc3b4a3b30d854e",
"assets/assets/skills_icons/restapi80.png": "872f5e5b63411f206d9450df9e071118",
"assets/assets/skills_icons/vscode80.png": "96745dbadf71595fa9dc738cf6608227",
"assets/FontManifest.json": "fbfb2dba370adbde8ddaf4d9c8348d81",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "eb5ee671975a9f51e23248607931d5cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "902d88f88f8b673cc281fd0bc7a7d374",
"/": "902d88f88f8b673cc281fd0bc7a7d374",
"main.dart.js": "0c25b4e0212315d4570aa2e8a53229a5",
"manifest.json": "05e30b08d1efbc81613e1c2ea74512eb"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
