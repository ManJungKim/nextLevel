/* file_name : cookies.jsx
 * desc : 쿠키파일. 핸들러에서 쿠키 생성 후 보내줌.
 */
import cookies from '../../utils/cookies'

const handler = (req, res) => {
  // The cookie middleware will add the `set-cookie` header
  res.cookie('deeroxNET', 'this-is-deerox-cookies-you-can-check-this-out-in-here')
  // Return the `set-cookie` header so we can display it in the browser and show that it works!
  res.end(res.getHeader('Set-Cookie'))
}

export default cookies(handler)