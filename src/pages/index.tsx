import woopers from '../../woopers.json'

function Home(props) {
  return (
    <>
      <div className="branding">
        <img src={props.wooper} className="item"></img>
        <br/>
        <a href="https://discord.gg/Xv7DtPVAV9" className="button item" >join today</a>
        <br/>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  var wooper = woopers[Math.floor(Math.random()*woopers.length)]
  return {
    props: {
      wooper: wooper
    },
  }
}
  
export default Home