import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

import More from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'


const Wrapper = styled.div`
  
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  ${props => props.selected&&`
    background-color: #f6f6f6;
    p {
      color: #4EA0F5;
      font-weight: bold;
    }
  `}
`;
const Label = styled.p`
  flex: 1;
  text-align: left;
`;
const Dots = styled.div`
  width: auto;
`;

class ListView extends Component {
  render() {
    const { listItems } = this.props;
    return (
      <Wrapper>
        <List>
        {listItems.map(listItem  => (
          <ListItem selected={listItem.selected}>
            <Label>{listItem.label}</Label>
            <Dots><IconButton><More /></IconButton></Dots>
          </ListItem>
        ))}
        </List>
      </Wrapper>
    );
  }
}

export default ListView;
