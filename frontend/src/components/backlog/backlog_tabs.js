import React from 'react';
import PropTypes from 'prop-types';
import Tab from './tab';

class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    console.log("WHAT" ,this.props.children[0].props.label);
    console.log('props', this.props)

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;
            
            return (
              <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem}/>
              );
            })}
        </ol>
        <div className="tab-content">
          {
            this.props.children[0].props.children.length > 5 || this.props.children[1].props.children.length > 5 ? <p>Scroll to view more games</p> : null
          }
          
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;