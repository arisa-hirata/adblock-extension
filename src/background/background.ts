chrome.webRequest.onBeforeRequest.addListener((details) => {
  console.log(details)
  return {
    cancel: true
  }
}, {
  urls: ['*://*.googleadservices.com/*', '*://*.tpc.googlesyndication.com/*', "*://*.g.doubleclick.net/*"],
},['blocking'])
