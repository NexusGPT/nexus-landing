'use client'

import { useEffect } from 'react'

export default function FramerAppear() {
  useEffect(() => {
    // Load appear configs
    const loadConfig = async () => {
      try {
        const [appearRes, breakpointsRes] = await Promise.all([
          fetch('/lib/framer-appear-config.json'),
          fetch('/lib/framer-breakpoints.json'),
        ])
        const appearConfig = await appearRes.text()
        const breakpointsConfig = await breakpointsRes.text()

        // Create appear config script
        const appearScript = document.createElement('script')
        appearScript.type = 'framer/appear'
        appearScript.id = '__framer__appearAnimationsContent'
        appearScript.textContent = appearConfig
        document.head.appendChild(appearScript)

        // Create breakpoints script
        const breakpointsScript = document.createElement('script')
        breakpointsScript.type = 'framer/appear'
        breakpointsScript.id = '__framer__breakpoints'
        breakpointsScript.textContent = breakpointsConfig
        document.head.appendChild(breakpointsScript)

        // Initialize appear animations after animator is loaded
        const checkAnimator = setInterval(() => {
          if (typeof window !== 'undefined' && (window as any).animator) {
            clearInterval(checkAnimator)
            const initScript = document.createElement('script')
            initScript.setAttribute('data-framer-appear-animation', 'no-preference')
            initScript.textContent = `
              (()=>{
                function c(i,o,m){
                  if(window.__framer_disable_appear_effects_optimization__||typeof animator>"u")return;
                  let e={detail:{bg:document.hidden}};
                  requestAnimationFrame(()=>{
                    let a="framer-appear-start";
                    performance.mark(a,e);
                    animator.animateAppearEffects(
                      JSON.parse(window.__framer__appearAnimationsContent.text),
                      (s,p,d)=>{
                        let t=document.querySelector(s);
                        if(t)for(let[r,f]of Object.entries(p))
                          animator.startOptimizedAppearAnimation(t,r,f,d[r])
                      },
                      i,o,
                      m&&window.matchMedia("(prefers-reduced-motion:reduce)").matches===!0,
                      animator.getActiveVariantHash(JSON.parse(window.__framer__breakpoints.text))
                    );
                    let n="framer-appear-end";
                    performance.mark(n,e);
                    performance.measure("framer-appear",{start:a,end:n,detail:e.detail})
                  })
                }
                return c
              })()("data-framer-appear-id","__Appear_Animation_Transform__",false)
            `
            document.body.appendChild(initScript)
          }
        }, 100)

        return () => {
          clearInterval(checkAnimator)
          if (document.head.contains(appearScript)) {
            document.head.removeChild(appearScript)
          }
          if (document.head.contains(breakpointsScript)) {
            document.head.removeChild(breakpointsScript)
          }
        }
      } catch (e) {
        console.error('Failed to load framer appear configs:', e)
      }
    }

    loadConfig()
  }, [])

  return null
}

