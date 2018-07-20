import React from 'react';
import { Link,NavLink } from "react-router-dom";
import style from './pagination.scss';

export default class PageLink extends React.Component{
  render() {
    if(this.props.item!=='...')
    return <NavLink activeClassName={style.nowPage} to={`${this.props.url==='/'?'':this.props.url}/page/${this.props.item}`} >{this.props.item}</NavLink>
    else return(<span>...</span>);
  }
}