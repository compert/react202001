import classNames from 'classnames/bind'

/**
 * class 생성자에서 호출하여 공통 함수 호출
 */
export const cBind = (reactComp, styles) => {
  reactComp.cx = classNames.bind(styles)
}
