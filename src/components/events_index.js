import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'

import { readEvents } from '../actions';

class EventsIndex extends Component {
  // マウント時に呼ばれるコールバック関数
  componentDidMount() {
    this.props.readEvents() // マウントされたタイミングで、APIからイベント一覧を取得する処理
  }

  renderEvents() {
    return _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
        // <div>{console.log(props.events)}</div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
    );
  }
}

// mapStateToProps → stateの情報から、コンポーネントで必要なものを取り出し、コンポーネント内のpropsとしてマッピングする。
const mapStateToProps = state => ({ events: state.events });

// mapDispachToProps → あるActionが発生したときにreducerにtypeに応じた状態遷移を実行させる関数(Dispatch関数)
const mapDispatchToProps = { readEvents }

// stateとactionをコンポーネントに関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
