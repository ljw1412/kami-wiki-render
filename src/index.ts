import { KamiWiki } from './class/KamiWiki'

export function KamiWikiRender(selector: string | HTMLElement) {
  return new KamiWiki(selector)
}

export default KamiWikiRender
