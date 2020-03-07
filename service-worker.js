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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1bd9ddbd42226183007a935556ab7db3"
  },
  {
    "url": "advanced/index.html",
    "revision": "4dcdb185217281747c6e2208e10b642f"
  },
  {
    "url": "advanced/java-code-style.html",
    "revision": "424f24bfca293045941e5c36878b3311"
  },
  {
    "url": "advanced/java-crypto.html",
    "revision": "a18a1da734c7cf780a8aec76fc506b67"
  },
  {
    "url": "advanced/java-locale.html",
    "revision": "39a8d0768c8a5e4696a3f39e18bfc6a9"
  },
  {
    "url": "advanced/java-regex.html",
    "revision": "95e01d9699b447e84a42787b64b886b1"
  },
  {
    "url": "advanced/jdk8.html",
    "revision": "36bb61c43d7fc5d984fed27603ddac07"
  },
  {
    "url": "assets/css/0.styles.e9d65cce.css",
    "revision": "95594d8c369d49259936729ad7dae065"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8c899971.js",
    "revision": "fbbec4d506b36b9ca4484f3edfa0d77e"
  },
  {
    "url": "assets/js/11.350d5fe0.js",
    "revision": "95c5356b7a2c9296a9e44a32a34faab0"
  },
  {
    "url": "assets/js/12.2199728e.js",
    "revision": "3f99025ee26a1b1f5a5f2415b1f104d8"
  },
  {
    "url": "assets/js/13.967fce6c.js",
    "revision": "82367b3e859925181f9cc7c1f121ab16"
  },
  {
    "url": "assets/js/14.8275d0bd.js",
    "revision": "d9ef311f7310b9aedc3553d4a092a1e3"
  },
  {
    "url": "assets/js/15.6a09a144.js",
    "revision": "93b02df6225008ba74de1d3502da016c"
  },
  {
    "url": "assets/js/16.19f02ba1.js",
    "revision": "91fc68bf3bd16ace604dc199629acf12"
  },
  {
    "url": "assets/js/17.ed1ae7cf.js",
    "revision": "867a3d535177302ebc4adc51845c894c"
  },
  {
    "url": "assets/js/18.9542df9d.js",
    "revision": "b1bac4cee3b6432b056a1ff4b8902013"
  },
  {
    "url": "assets/js/19.33815bc9.js",
    "revision": "67a41980efc77c63b5cfdf5bfd22c75b"
  },
  {
    "url": "assets/js/20.b48a1605.js",
    "revision": "8e00f3798464acc5fd858037717cfdb5"
  },
  {
    "url": "assets/js/21.84842e19.js",
    "revision": "8cf6b4e119f9db6eed242531f592bf21"
  },
  {
    "url": "assets/js/22.9856136d.js",
    "revision": "78c33e6040bf00b44c8b13b2c83e9d60"
  },
  {
    "url": "assets/js/23.078a7e69.js",
    "revision": "ce7228b7be721be7d6d99289edbf2da8"
  },
  {
    "url": "assets/js/24.8961f549.js",
    "revision": "00b6bea88ead5233f776fdaf21684c9d"
  },
  {
    "url": "assets/js/25.f5d70f7e.js",
    "revision": "6bb1dc3c160a07e59074c99799e9009b"
  },
  {
    "url": "assets/js/26.adedecef.js",
    "revision": "b8659bb314b9f9f43ce371e9d017ac7f"
  },
  {
    "url": "assets/js/27.f475d82e.js",
    "revision": "b8e73730bbf95b76dd6bba0fca67f226"
  },
  {
    "url": "assets/js/28.3f8ad064.js",
    "revision": "042d880d0e3a50aecc65a0f631ff873f"
  },
  {
    "url": "assets/js/29.b5314d44.js",
    "revision": "69f010c831ddcd961e0ced86fb9eeab5"
  },
  {
    "url": "assets/js/30.f0531d6e.js",
    "revision": "52a7b25df6a329d13b76322bfa79e40f"
  },
  {
    "url": "assets/js/31.11f77e70.js",
    "revision": "a23a6df7797515e9f86a84994952effd"
  },
  {
    "url": "assets/js/32.2048c2de.js",
    "revision": "5671638968a2138da421060c632b9829"
  },
  {
    "url": "assets/js/33.ac464a7a.js",
    "revision": "c0184aa165e59ef29105304e07b98d3b"
  },
  {
    "url": "assets/js/34.41b97081.js",
    "revision": "2e853f7cf755d1639e0b15be684fa3bb"
  },
  {
    "url": "assets/js/35.95494b37.js",
    "revision": "57752caa310e4a822b17df8db1ae8769"
  },
  {
    "url": "assets/js/36.9eaef114.js",
    "revision": "b60df8dc3abc5f145806a6d48b15db55"
  },
  {
    "url": "assets/js/37.3b4e6b6f.js",
    "revision": "021f5eeeff4db7cd7b6140ff37a487a0"
  },
  {
    "url": "assets/js/38.8599d9b0.js",
    "revision": "dc38ef49d61176de5a8597f6503fa928"
  },
  {
    "url": "assets/js/39.143cacbc.js",
    "revision": "0a1856a76b3bc0c77ce79cea97db1bf0"
  },
  {
    "url": "assets/js/4.13456b84.js",
    "revision": "321199a2baf1c67694dde4d11bfa9b8f"
  },
  {
    "url": "assets/js/40.d1838ae1.js",
    "revision": "d07e08c19e8356ee8def14d10bf47c4f"
  },
  {
    "url": "assets/js/41.2fa20809.js",
    "revision": "8bc9238ce230ccf7cab8583f57feb673"
  },
  {
    "url": "assets/js/42.59c1ab82.js",
    "revision": "274c5ae0ecfe2af6305478c4ba007010"
  },
  {
    "url": "assets/js/43.7ef1889c.js",
    "revision": "ed132a7f65bbba7f87b43cb4eb8d9392"
  },
  {
    "url": "assets/js/44.b0f638dd.js",
    "revision": "4fb2cf899fb1f54ba6ff929296cd6017"
  },
  {
    "url": "assets/js/45.7b50418b.js",
    "revision": "e7cb813d3633b2ff6db5176eff2567c6"
  },
  {
    "url": "assets/js/46.e4d1c39f.js",
    "revision": "157b4687eef14899b15e6e8927aecbc3"
  },
  {
    "url": "assets/js/47.b7cfbd0c.js",
    "revision": "e27ef6be5ab715349094a58425e6c469"
  },
  {
    "url": "assets/js/48.e661dc3b.js",
    "revision": "94d7539e035bb97e309458fd07cdeabf"
  },
  {
    "url": "assets/js/49.8783fd36.js",
    "revision": "7f3299412a311bf6a0481d5a79b35a1d"
  },
  {
    "url": "assets/js/5.65836544.js",
    "revision": "b3d8431c1930f7f84f8d7f05213025fd"
  },
  {
    "url": "assets/js/50.885a9acc.js",
    "revision": "310b2251201a1340c110db208d9a09d7"
  },
  {
    "url": "assets/js/51.202cb367.js",
    "revision": "bb797fb1e082b28f98b7cc36b1dfe050"
  },
  {
    "url": "assets/js/52.53409cde.js",
    "revision": "d199780b30e48bc64e6689ecf7ea75ae"
  },
  {
    "url": "assets/js/53.400a404c.js",
    "revision": "38e2a3457c426f932fdcf7cbd012328f"
  },
  {
    "url": "assets/js/54.5410b72b.js",
    "revision": "b45262af23fbfaf7bcaab907664f9364"
  },
  {
    "url": "assets/js/55.c904afaa.js",
    "revision": "2f265ed30619dbc8ab30b0311f795b8a"
  },
  {
    "url": "assets/js/56.2b2538de.js",
    "revision": "7e480cee53bb2dbb25761d41573df0f7"
  },
  {
    "url": "assets/js/57.cae5cfaf.js",
    "revision": "a9686368e7614c2a9a514ab0a4520dbc"
  },
  {
    "url": "assets/js/58.3a2e559c.js",
    "revision": "9911e135ad2f1359ebb53538fb13477a"
  },
  {
    "url": "assets/js/59.2464138f.js",
    "revision": "6e7afdfa9a88958121eaa64b33122f09"
  },
  {
    "url": "assets/js/6.76e266d6.js",
    "revision": "3c828b7d44b690a2979175305e4680e3"
  },
  {
    "url": "assets/js/60.7dc4947f.js",
    "revision": "130de78f0700572b670c773c5d72efe6"
  },
  {
    "url": "assets/js/61.4da8e90f.js",
    "revision": "bbc590523bba1d4baac448960c4c60b9"
  },
  {
    "url": "assets/js/62.6c617e5b.js",
    "revision": "58ea0b7cc0d30b45a5e5e659523cd2a0"
  },
  {
    "url": "assets/js/7.477def74.js",
    "revision": "2bcf0e6e963708a7a6365656eea15915"
  },
  {
    "url": "assets/js/8.7e86464c.js",
    "revision": "450da796bc33c7b43026fb2add95598b"
  },
  {
    "url": "assets/js/9.9c34e164.js",
    "revision": "290669199a6b60d5c22e128d1858322f"
  },
  {
    "url": "assets/js/app.3de50782.js",
    "revision": "31bf1e73d6c82708e8daae305c477a86"
  },
  {
    "url": "assets/js/vendors~flowchart.184dd07e.js",
    "revision": "5b66181fc88313edae0f0aca72eb1fe9"
  },
  {
    "url": "assets/js/vendors~notification.de05f6a9.js",
    "revision": "7817d5615d6727de9916e1b879896bed"
  },
  {
    "url": "basics/index.html",
    "revision": "e090da1309dadade1ab1c84a5a3b5a66"
  },
  {
    "url": "basics/java-annotation.html",
    "revision": "6a5b8b7b31006a1b3c1a88389f6a8320"
  },
  {
    "url": "basics/java-array.html",
    "revision": "d4f3d20c792ed9bcc0682cffef2c3216"
  },
  {
    "url": "basics/java-basic-grammar.html",
    "revision": "f6c4b2ccce25c71be972dddb3c4df0ae"
  },
  {
    "url": "basics/java-class.html",
    "revision": "4460891f5de1713285200af03c83e8cc"
  },
  {
    "url": "basics/java-common-tool-class.html",
    "revision": "1ef231784d57d4cff53796d2b9b64e87"
  },
  {
    "url": "basics/java-control-statement.html",
    "revision": "abbd77c68d7cdc7b93318dbd6ffbd464"
  },
  {
    "url": "basics/java-data-type.html",
    "revision": "a105addffbfd9352e834a14582f05f0b"
  },
  {
    "url": "basics/java-develop-env.html",
    "revision": "58bbd1a83112655ee1acd4a3286ed2c8"
  },
  {
    "url": "basics/java-enum.html",
    "revision": "5ae7cca2ad8c700c59d1d4d947c88f80"
  },
  {
    "url": "basics/java-exception.html",
    "revision": "21fc7b1f3315ef3eb766543d6a9251d8"
  },
  {
    "url": "basics/java-generic.html",
    "revision": "e9ca8a1ac28b2111edffeda4a1819d06"
  },
  {
    "url": "basics/java-method.html",
    "revision": "b6252a9648fd998073d6535d1320b7ef"
  },
  {
    "url": "basics/java-oop.html",
    "revision": "09d4ae8d0da19b1319bd1bf88cd9e20d"
  },
  {
    "url": "basics/java-reflection.html",
    "revision": "77f42ea280268dc1f45dd8c1275d038f"
  },
  {
    "url": "concurrent/index.html",
    "revision": "e2955fbd58591b53d615af8423331612"
  },
  {
    "url": "concurrent/java-atomic-class.html",
    "revision": "9dc3e7115b94686eb477ede08e736834"
  },
  {
    "url": "concurrent/java-concurrent-basic-mechanism.html",
    "revision": "4360f36df53c70eb44c4bbaea0d2322d"
  },
  {
    "url": "concurrent/java-concurrent-container.html",
    "revision": "f445822b3e2444f94f7813d335732b21"
  },
  {
    "url": "concurrent/java-concurrent-interview.html",
    "revision": "bb8ba92a156f3cf3824010dded7ade0b"
  },
  {
    "url": "concurrent/java-concurrent-introduction.html",
    "revision": "4d82130d927d68a9db5564c3141f4432"
  },
  {
    "url": "concurrent/java-concurrent-tools.html",
    "revision": "1639d7b3be45e1202c576647c1e54b8f"
  },
  {
    "url": "concurrent/java-lock.html",
    "revision": "7810c5110d037973cb1bf9a414492744"
  },
  {
    "url": "concurrent/java-memory-model.html",
    "revision": "499c246b759b53d67eedcbe7d0b1183c"
  },
  {
    "url": "concurrent/java-thread-pool.html",
    "revision": "4debebaa248feb13fead588346df5469"
  },
  {
    "url": "concurrent/java-thread.html",
    "revision": "0522694b789def46dc1c2aed9842397c"
  },
  {
    "url": "container/index.html",
    "revision": "2dbad4ef2acc69db7a16ed095b9339bc"
  },
  {
    "url": "container/java-container-list.html",
    "revision": "417ffa3509a739fb37a14d1e18da8cd2"
  },
  {
    "url": "container/java-container-map.html",
    "revision": "4fcaaf7aebb4dbaad1174c93672662a0"
  },
  {
    "url": "container/java-container-queue.html",
    "revision": "47ecef22bf5f15508bca7cf1a68b01bd"
  },
  {
    "url": "container/java-container-set.html",
    "revision": "f4814fbc2783b310f0e484433514d494"
  },
  {
    "url": "container/java-container.html",
    "revision": "e60713016b50d7d1bf42f94f42430da9"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "e82409397ade20dd0f2e9209fb296d4d"
  },
  {
    "url": "io/index.html",
    "revision": "11998af2094ca83c16630bae8bd18739"
  },
  {
    "url": "io/java-bio.html",
    "revision": "57ffe6638818c18f93959a07e0ad4964"
  },
  {
    "url": "io/java-io-base.html",
    "revision": "57161e0067acf9eb86a284d6504899e3"
  },
  {
    "url": "io/java-net.html",
    "revision": "93e2f21ecc8093e248e8a903c72ffc37"
  },
  {
    "url": "io/java-nio.html",
    "revision": "d13ec5f87994e09f496f18a5e899de1f"
  },
  {
    "url": "io/java-serialization.html",
    "revision": "4d6e830e0bcfdd977d012a6fdaec54f5"
  },
  {
    "url": "jvm/index.html",
    "revision": "3307d2c22265cd08bbe447c3f02efe2d"
  },
  {
    "url": "jvm/jvm-action.html",
    "revision": "e6c4821469cdee0b66c38390ca9584de"
  },
  {
    "url": "jvm/jvm-architecture.html",
    "revision": "cdf9debeb939261c138d7089e734f253"
  },
  {
    "url": "jvm/jvm-bytecode.html",
    "revision": "57389f3e4f140edccaa3c47327bd3396"
  },
  {
    "url": "jvm/jvm-class-loader.html",
    "revision": "40d96c4d05e9bf1c4e630a2f8ce2d57e"
  },
  {
    "url": "jvm/jvm-gc.html",
    "revision": "ca5e5650677634bd689bd692adf71510"
  },
  {
    "url": "jvm/jvm-memory.html",
    "revision": "6f7f8ba8550bab3cbc12c3946aedd7fa"
  },
  {
    "url": "jvm/jvm-tools.html",
    "revision": "4f82e1dbb02dc13a4a676acf4d5f5411"
  },
  {
    "url": "jvm/troubleshooting.html",
    "revision": "785788329979ee1f489f9c9b7d5ac276"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
