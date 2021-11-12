/* file_name : _error.jsx
 * desc :전역에서 Error 처리를 공통으로 하고자 할 때, 
         공통적으로 사용할 수 있는 Error Page를 작성할 수 있습니다.

Why This Error Occurred
You added a custom /_error page without adding a custom /404 page. 
Adding a custom /_error typically opts your application out of having the automatic static optimization applied to the 404 page.

Possible Ways to Fix It
Add a pages/404.js with the 404 page you would like to show.

공식적으로는 pages/404.jsx 이렇게 사용하라고함.
 */

function Error({ statusCode }) {
 return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
 }
 Error.getInitialProps = ({ res, err }) => {
 const statusCode = res ? res.statusCode : err ? err.statusCode : 404
 return { statusCode }
 }
 export default Error;