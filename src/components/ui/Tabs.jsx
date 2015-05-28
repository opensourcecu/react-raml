import React from 'react';

import styles from './Tabs.css';

export class Tab extends React.Component {

  render() {

    const style = this.props.selected ? styles.isSelected : styles.isNotSelected;

    return (
      <a href="#" className={style} onClick={this.props.onSelect}>{this.props.children}</a>
    );
  }

}

export default class Tabs extends React.Component {

  handleSelect(key, e) {
    e.preventDefault();
    if (this.props.onSelect) {
      this.props.onSelect(key);
    }
  }

  render() {

    const tabs = this.props.tabs.map(({ key, name }) => (
      <Tab key={key} selected={this.props.activeKey === key} onSelect={this.handleSelect.bind(this, key)}>{name}</Tab>
    ));

    return (
      <div className={styles.root}>
        {tabs}
      </div>
    );
  }

}
