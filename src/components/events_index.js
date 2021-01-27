import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { readEvents } from '../actions';

class EventsIndex extends Component {
  // マウント時に呼ばれるコールバック関数
  componentDidMount() {
    this.props.readEvents() // マウントされたタイミングで、APIからイベント一覧を取得する処理
  }

  renderEvents() {
    return _.map(this.props.events, (event) => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }
    return (
        // <div>{console.log(props.events)}</div>
        <React.Fragment>
          <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
            <ContentAdd />
          </FloatingActionButton>
          <Table>
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Body</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody displayRowCheckbox={false}>
              {this.renderEvents()}
            </TableBody>
          </Table>
        </React.Fragment>

    );
  }
}

// mapStateToProps → stateの情報から、コンポーネントで必要なものを取り出し、コンポーネント内のpropsとしてマッピングする。
const mapStateToProps = state => ({ events: state.events });

// mapDispachToProps → あるActionが発生したときにreducerにtypeに応じた状態遷移を実行させる関数(Dispatch関数)
const mapDispatchToProps = { readEvents }

// stateとactionをコンポーネントに関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
