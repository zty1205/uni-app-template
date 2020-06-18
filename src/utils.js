export function isIPad() {
  let isIpad = navigator && navigator.userAgent.toLowerCase().indexOf('ipad') !== -1;
  // #ifdef MP-IPAD
  isIpad = true;
  // #endif
  return isIpad;
}
