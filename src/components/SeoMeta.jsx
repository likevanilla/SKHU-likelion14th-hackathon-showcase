import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { teams } from '../data/siteData'

const siteName = 'LIKELION SKHU 14th Hackathon'
const defaultTitle = '성공회대 멋쟁이사자처럼 14기 해커톤 쇼케이스'
const defaultDescription =
  '성공회대 멋쟁이사자처럼 14기 해커톤 쇼케이스. 참가팀 서비스 소개, 부스 이벤트, 전시 일정을 한곳에서 확인하세요.'
const defaultImage = '/favicon/android-chrome-512x512.png'
const siteUrl = 'https://www.14th-hackathon-skhu.store'

const routeMeta = {
  '/': {
    title: defaultTitle,
    description: defaultDescription,
  },
  '/event': {
    title: `부스 이벤트 | ${siteName}`,
    description:
      '해커톤 부스 방문, 팀 서비스 피드백, 럭키드로우 참여 방법과 현장 안내를 확인하세요.',
  },
  '/teams': {
    title: `참가팀 소개 | ${siteName}`,
    description:
      '성공회대 멋쟁이사자처럼 14기 해커톤 참가팀과 서비스 소개를 둘러보세요.',
  },
}

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/)

    if (match) {
      element.setAttribute(match[1], match[2])
    }

    document.head.appendChild(element)
  }

  element.setAttribute(attribute, value)
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  link.setAttribute('href', url)
}

function getMeta(pathname) {
  if (pathname.startsWith('/teams/')) {
    const teamId = pathname.split('/')[2]
    const team = teams.find((item) => item.id === teamId)

    if (team) {
      return {
        title: `${team.name} | 참가팀 소개 | ${siteName}`,
        description: `${team.tagline} ${team.description}`,
      }
    }
  }

  return routeMeta[pathname] ?? routeMeta['/']
}

function SeoMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getMeta(pathname)
    const canonicalUrl = `${siteUrl}${pathname}`
    const imageUrl = `${siteUrl}${defaultImage}`

    document.title = meta.title
    setCanonical(canonicalUrl)

    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[property="og:url"]', 'content', canonicalUrl)
    setMeta('meta[property="og:image"]', 'content', imageUrl)
    setMeta('meta[name="twitter:title"]', 'content', meta.title)
    setMeta('meta[name="twitter:description"]', 'content', meta.description)
    setMeta('meta[name="twitter:image"]', 'content', imageUrl)
  }, [pathname])

  return null
}

export default SeoMeta
