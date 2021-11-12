/* file_name : _error.jsx
 * desc :전역에서 Error 처리를 공통으로 하고자 할 때, 
         공통적으로 사용할 수 있는 Error Page를 작성할 수 있습니다.
 */

function Error({ statusCode }) {
 return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
 }
 Error.getInitialProps = ({ res, err }) => {
 const statusCode = res ? res.statusCode : err ? err.statusCode : 404
 return { statusCode }
 }
 export default Error;