import React, { Component } from 'react'
import Description from './Description'
import Title from './Title'
import Image from './Image'
import "./style.css"

export default class SimpleCard extends Component {
  render() {
    return (
      <div className='Card'>
        <Image src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/jtoGUUy/videoblocks-people-having-fun-on-the-bright-carnival-rides-at-night_b1zpqzz-m_thumbnail-1080_01.png"/>
        <Title title="This is a fun card!!"/>
        <Description  description="Here are more details on the fun card!!!" />
      </div>
    )
  }
}
