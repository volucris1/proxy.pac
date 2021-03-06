function FindProxyForURL(url, host) {
  var useSocks = [
    "2ip.ru",
    "torproject.org",
    "*.torproject.*",
    "protonmail.com",
    "*.protonmail.com",
    "thenina.com",
    "pling.com",
    "deezer.com",
    "www.bbc.com",
    "rutracker.org",
    "hd.lordfilm-2022.net",
    "www.hostinger.com",
	"linkedin.com",
  ];

  for (var i= 0; i < useSocks.length; i++) {
      if (shExpMatch(host, useSocks[i])) {
          return "SOCKS localhost:9050";
      }
  }

  if (isResolvable(host))
    return "DIRECT";
  else
    return "SOCKS localhost:9050";
}

