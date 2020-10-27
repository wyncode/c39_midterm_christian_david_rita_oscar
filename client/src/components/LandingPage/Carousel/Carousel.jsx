import React, {Component} from 'react'


class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <div>
        <div className='view-port' style={StyleSheet.view_port}>
          <div className='card-container' style={StyleSheet.card_container}>
             

          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  view_port : {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350px',
    height: '200px',
    backgroundColor: 'red'

  },

  card_container: {
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content',
  }
  


  


}
export default Carousel;