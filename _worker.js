export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // 如果请求根路径，重定向到主页面
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return Response.redirect(new URL('/dji-kmz-import.html', url), 301);
    }
    
    // 其他请求正常处理
    return fetch(request);
  }
};