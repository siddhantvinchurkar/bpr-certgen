/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d02d8236b1e2c2b4529eeabaf041ae8e"
  },
  {
    "url": "404.js",
    "revision": "8cbe7f5ba2430da5719300505ed612d2"
  },
  {
    "url": "favicon-black.png",
    "revision": "a38c0b75dfa749c9f744d1c54f998398"
  },
  {
    "url": "favicon.png",
    "revision": "381223f820e1246d54b5f696d856187e"
  },
  {
    "url": "firebase.json",
    "revision": "88b40157de8bf7d337333c04ab01da4a"
  },
  {
    "url": "footer.html",
    "revision": "21011dd07012de003a757f9ab0021fa0"
  },
  {
    "url": "header.html",
    "revision": "14587e11877efdbd012fb92e06297c26"
  },
  {
    "url": "index.html",
    "revision": "36eb4d668aecbbee5273e9981641ab60"
  },
  {
    "url": "main.js",
    "revision": "8cbe7f5ba2430da5719300505ed612d2"
  },
  {
    "url": "manifest.json",
    "revision": "3f8bfc06bd6a779a6d17c290b6a8885f"
  },
  {
    "url": "README.md",
    "revision": "c136a9021978d48533d7a0995e01f7e2"
  },
  {
    "url": "workbox-config.js",
    "revision": "14a923558b13cc6a03fe505e26325ef8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
