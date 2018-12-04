import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import { removeItem, selectItem } from "../../../redux/reducers/ListReducer";

import More from "@material-ui/icons/MoreVert";
import Close from "@material-ui/icons/Close";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const Wrapper = styled.div``;
const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  ${props =>
    props.selected &&
    `
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

  handleRemove = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    const {removeItem} = this.props;
    removeItem(index);
  };

  render() {
    const { listItems, selectedListIndex } = this.props.list;
    const { selectItem } = this.props;
    return (
      <Wrapper>
        <List>
          {listItems.map((listItem, i) => (
            <ListItem
              key={i}
              selected={selectedListIndex === i}
              onClick={() => selectItem(i)}
            >
              <Label>{listItem.label}</Label>
              <Dots>
                <IconButton>
                  <Delete onClick={(e) => this.handleRemove(e, i)}/>
                </IconButton>
              </Dots>
            </ListItem>
          ))}
        </List>
      </Wrapper>
    );
  }
}

const MapStateToProps = (state) => ({
  list: state.list
});

export default connect(MapStateToProps, {removeItem, selectItem})(ListView);
