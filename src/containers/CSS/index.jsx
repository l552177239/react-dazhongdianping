import React, {PureComponent} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '$redux/actions/app';

import Header from 'components/Header';
import Center from './subpage/center';
import Animate from './subpage/animate';

import './style.scss';

class CSS extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      content: false,
      title: ''
    };
  }

  componentDidMount() {
    this
      .props
      .appActionList
      .menu({location: 0});
  }

  switchState() {
    switch (this.state.type) {
      case 'center':
        return <Center/>

      case 'animate':
        return <Animate/>
   
      default:
        return <div></div>
    
    }
  }

  changeType(type, title) {
    this.setState({type: type, content: true, title: title});
  }

  currentback() {
    this.setState({type: '', content: false});
  }

  render() {
    return (
      <div>
        {this.state.content
          ? <div>
              <div className='commonHeader'>
                <span
                  className='back-icon'
                  onClick={this
                  .currentback
                  .bind(this)}>
                  <i className='icon-chevron-left'></i>
                </span>
                <h1>{this.state.title}</h1>
              </div>
              <div className='cssContent'>{this.switchState()}</div>
            </div>
          : <div>
            <Header title='CSS效果列表'/>
            <div className='cssList'>
              <ul>
                <li
                  onClick={this
                  .changeType
                  .bind(this, 'center', 'css居中')}>1，css显示居中</li>
                <li
                  onClick={this
                  .changeType
                  .bind(this, 'animate', 'css动画')}>2，css动画</li>
              </ul>
            </div>
          </div>}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    appActionList: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CSS)