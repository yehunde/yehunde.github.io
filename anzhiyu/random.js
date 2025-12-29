var posts=["2025/12/29/这是一篇新的博文-1/","2025/12/29/这是一篇新的博文/","2025/12/29/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };