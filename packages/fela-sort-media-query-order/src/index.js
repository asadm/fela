/* @flow */
import sortFn from 'sort-css-media-queries'

import type DOMRenderer from '../../../flowtypes/DOMRenderer'

export default function sortMediaQueryOrder() {
  return (renderer: DOMRenderer) => {
    renderer.mediaQueryOrder = renderer.mediaQueryOrder.sort(sortFn)
    return renderer
  }
}
