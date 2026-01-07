import { readFileSync } from 'fs'
import { join } from 'path'
import PageContent from './PageContent'

// Server component: read HTML at build time
function getBodyHTML(): string {
  try {
    return readFileSync(join(process.cwd(), 'app/page-body.html'), 'utf-8')
  } catch (e) {
    console.error('Failed to load page body HTML:', e)
    return ''
  }
}

export default function HomePage() {
  const bodyHTML = getBodyHTML()
  
  if (!bodyHTML) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Error loading page content</h1>
        <p>Please check that app/page-body.html exists</p>
      </div>
    )
  }

  return <PageContent html={bodyHTML} />
}

