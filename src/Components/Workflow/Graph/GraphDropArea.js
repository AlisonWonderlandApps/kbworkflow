import React, { Component } from "react";
import {
  DropTarget,
  ConnectDropTarget,
  DropTargetMonitor,
  XYCoord
} from "react-dnd";
import { findDOMNode } from "react-dom";

const styles = {
  container: {
    padding: "10px",
    backgroundColor: "lightpink",
    height: "98%" //what ??
  }
};

const graphTarget = {
  // canDrop(props, monitor) {
  //   // You can disallow drop based on props or item
  //   const item = monitor.getItem();
  //   return canMakeChessMove(item.fromPosition, props.position);
  // },
  canDrop(props, monitor) {
    console.log("component canDrop", props, monitor);
    const item = monitor.getItem();
    return;
  },
  drop(props, monitor, component) {
    console.log("component is dropped");
    if (monitor.didDrop()) {
      return {
        node: monitor.getItem().color
      };
    }
  },
  hover(props, monitor, component) {
    // console.log("component is hovering");
    // This is fired very often and lets you perform side effects
    // in response to the hover. You can't handle enter and leave
    // here—if you need them, put monitor.isOver() into collect() so you
    // can just use componentDidUpdate() to handle enter/leave.

    // You can access the coordinates if you need them
    const clientOffset = monitor.getClientOffset();
    const componentRect = findDOMNode(component).getBoundingClientRect();

    // You can check whether we're over a nested drop target
    const isJustOverThisOne = monitor.isOver({ shallow: true });

    // You will receive hover() even for items for which canDrop() is false
    const canDrop = monitor.canDrop();
  }
  //   drop(props, monitor, component) {
  //   if (monitor.didDrop()) {
  //     // If you want, you can check whether some nested
  //     // target already handled drop
  //     return;
  //   }
  //
  //   // Obtain the dragged item
  //   const item = monitor.getItem();
  //
  //   // You can do something with it
  //   ChessActions.movePiece(item.fromPosition, props.position);
  //
  //   // You can also do nothing and return a drop result,
  //   // which will be available as monitor.getDropResult()
  //   // in the drag source's endDrag() method
  //   return { moved: true };
  // }
};

const Types = {
  NODE: "node"
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

class Graph extends Component {
  render() {
    return this.props.connectDropTarget(
      <div style={styles.container}>{this.props.children}</div>
    );
  }
}

export default DropTarget(Types.NODE, graphTarget, collect)(Graph);
