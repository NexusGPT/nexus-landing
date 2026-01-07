'use client'

import { useEffect } from 'react'

interface PageContentProps {
  html: string
}

export default function PageContent({ html }: PageContentProps) {
  useEffect(() => {
    // Load additional Framer scripts that need to run after page load
    const loadAdditionalScripts = () => {
      // Script for rewriting breakpoints
      const rewriteScript = document.createElement('script')
      rewriteScript.textContent = `
        (()=>{
          function i(){
            for(let e of document.querySelectorAll("[data-framer-original-sizes]")){
              let t=e.getAttribute("data-framer-original-sizes");
              t===""?e.removeAttribute("sizes"):e.setAttribute("sizes",t),e.removeAttribute("data-framer-original-sizes")
            }
          }
          function a(){
            window.__framer_onRewriteBreakpoints=i
          }
          return a
        })()()
      `
      document.body.appendChild(rewriteScript)

      // Script for preserving internal params
      const paramsScript = document.createElement('script')
      paramsScript.textContent = `
        !function(){
          var w="framer_variant";
          function u(a,r){
            let n=r.indexOf("#"),t=n===-1?r:r.substring(0,n),i=n===-1?"":r.substring(n),e=t.indexOf("?"),h=e===-1?t:t.substring(0,e),d=e===-1?"":t.substring(e),s=new URLSearchParams(d),g=new URLSearchParams(a);
            for(let[o,l]of g)s.has(o)||o!==w&&s.append(o,l);
            let c=s.toString();
            return c===""?t+i:h+"?"+c+i
          }
          var p='div#main a[href^="#"],div#main a[href^="/"],div#main a[href^="."]',f="div#main a[data-framer-preserve-params]",m,S=(m=document.currentScript)==null?void 0:m.hasAttribute("data-preserve-internal-params");
          if(window.location.search&&!/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(navigator.userAgent)){
            let a=document.querySelectorAll(S?\`\${p},\${f}\`:f);
            for(let r of a){
              let n=u(window.location.search,r.href);
              r.setAttribute("href",n)
            }
          }
        }()
      `
      document.body.appendChild(paramsScript)
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadAdditionalScripts)
    } else {
      loadAdditionalScripts()
    }
  }, [])

  if (!html || html.trim().length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>No content loaded</h1>
        <p>HTML content is empty. Please check app/page-body.html</p>
      </div>
    )
  }

  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )
}

