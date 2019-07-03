import React from 'react';
import { getS } from '@/utils';
import './index.scss';

class Home extends React.PureComponent {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <span>hello.{getS()}</span>
      </div>
    );
  }
}

export default Home;
