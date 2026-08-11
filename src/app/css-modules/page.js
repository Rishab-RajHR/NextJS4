import page from '../page.module.css';
import custom from '../custom.module.css';

const CSSModules = () => {
  return (
    <>
      {/* <h2 className='main'>CSS Modules In Next JS 16</h2> */}
      <h2 className={custom.main}>Basil Joseph from Calicut</h2>
      <h2 className={page.main}>Alex Pandian</h2>
    </>
  )
}

export default CSSModules