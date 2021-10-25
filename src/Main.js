import {Component} from 'react'
import Hornedbeasts from './Hornedbeasts'

class Main extends Component {
  render(){
    return(
      <>
      <h3>Horned Beast</h3>
      <Hornedbeasts title={'UNIWHAL'} imgurl={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'} name={'unicorn'} description={'A unicorn and a narwhal nuzzling their horns'}/>
      <Hornedbeasts title={'Rhino Family'} imgurl={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'}name={'unicorn'} description={'Parent rhino with two babies'}/>
      </>
    )
  }
}
export default Main;