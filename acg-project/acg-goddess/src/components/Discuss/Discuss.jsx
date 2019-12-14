import React, { Component } from 'react';
// 引入antd
import { Table } from 'antd';
import styles from './Dicuss.module.less'

const columns = [
  {
    title: '消息id',
    dataIndex: 'id',
    
  },
  {
    title: '发消息的用户',
    dataIndex: 'user',
  },
  {
    title: '消息所在的文章',
    dataIndex: 'address',
  },
  {
    title: '内容',
    dataIndex: 'con',
  },
  {
    title: '发送时间',
    dataIndex: 'time',
  },
  {
    title: '操作',
    dataIndex: 'handle',
    render: text => <a>{text}</a>,
  },
];
const data = [
  {
    key: '1',
    id: 'Jim Green',
    user: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
    con: 'London No. 1 Lake Park',
    time: 'London No. 1 Lake Park',
    handle: '删除',
  },
  {
    key: '2',
    id: 'Jim Green',
    user: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
    con: 'London No. 1 Lake Park',
    time: 'London No. 1 Lake Park',
    handle: '删除',
  },
  {
    key: '3',
    id: 'Jim Green',
    user: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
    con: 'London No. 1 Lake Park',
    time: 'London No. 1 Lake Park',
    handle: '删除',
  },
  {
    key: '4',
    id: 'Jim Green',
    user: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
    con: 'London No. 1 Lake Park',
    time: 'London No. 1 Lake Park',
    handle: '删除',
  },
];
class Dicuss extends Component {
  render () {
    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          className={styles.modelTable}
        />
      </div>
    );
  }
}

export default Dicuss;