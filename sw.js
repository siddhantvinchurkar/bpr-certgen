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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

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
    "url": "certificate-of-appreciation.png",
    "revision": "72babcf6f168e95348b0b8dc36be3a1c"
  },
  {
    "url": "certificate-of-participation.png",
    "revision": "1944507fa8b2570199b0784e30b600e4"
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
    "url": "generateACert.html",
    "revision": "7f7fa0bd0b027a3c499e0a6ccc50b49a"
  },
  {
    "url": "generatePCert.html",
    "revision": "3250cf053d84dcdf2d85ae29380c7edb"
  },
  {
    "url": "header.html",
    "revision": "7c5358b10b778f739544baefcc651c36"
  },
  {
    "url": "index.html",
    "revision": "13387e100e44eb2d4b773a63384c0bd6"
  },
  {
    "url": "main.js",
    "revision": "29855e63ae1e21ede5763502abf6aca6"
  },
  {
    "url": "manifest.json",
    "revision": "3f8bfc06bd6a779a6d17c290b6a8885f"
  },
  {
    "url": "README.md",
    "revision": "44f59ccf9b1d2fb13f5ec449725f5fc9"
  },
  {
    "url": "workbox-config.js",
    "revision": "14a923558b13cc6a03fe505e26325ef8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
