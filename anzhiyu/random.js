var posts=["2025/12/29/Hexo博客系列CM大佬的教学/","2025/12/29/美女图片赵丽颖/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };