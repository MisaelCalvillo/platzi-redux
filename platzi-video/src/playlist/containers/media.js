import React from 'react';
import Media from './../components/media';
import { connect } from 'react-redux';

class MediaContainer extends React.Component {

  openModal = (id) => {
    this.props.dispatch({
      type: 'OPEN_MODAL',
      payload: {
        mediaId: id
      } 
    })
  }

  render () {
    return (
      <Media {...this.props.data.toJS()} openModal={this.openModal} />
    )
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.get('data').get('entities').get('media').get(props.id)
  }
}

export default connect(mapStateToProps)(MediaContainer);