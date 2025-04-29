self.addEventListener("fetch", function (event) {
  console.log("Fetch intercepted for:", event.request.url);
});

self.addEventListener("sync", function (event) {
  if (event.tag === "sync-tag") {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  console.log("Background sync happening...");
  return Promise.resolve();
}

self.addEventListener("push", function (event) {
  const options = {
    body: "Push notification received!",
  };
  event.waitUntil(
    self.registration.showNotification("PWA Notification", options)
  );
});
