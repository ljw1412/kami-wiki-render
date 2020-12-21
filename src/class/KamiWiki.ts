export class KamiWiki {
  targetSelector = ''
  targetDom: HTMLElement | null = null

  constructor(selector: string | HTMLElement) {
    if (selector) {
      if (typeof selector === 'string') {
        this.targetSelector = selector
        this.targetDom = document.querySelector(selector)
      } else {
        this.targetDom = selector
      }
    }
    if (!this.targetDom) {
      throw new Error('[KamiWiki] 目标元素获取失败')
    }
  }
}
