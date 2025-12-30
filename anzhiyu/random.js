var posts=["2025/12/29/Hexo博客系列CM课程2/","2025/12/29/Hexo博客系列CM课程1/","2025/12/30/水边姑娘/","2025/12/29/美女图片赵丽颖/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };