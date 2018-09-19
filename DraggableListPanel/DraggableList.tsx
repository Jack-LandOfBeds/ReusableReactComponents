import * as React from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { DraggableLine, DraggableLineProps } from './DraggableLine';
import { Item } from './AddEditPanel';
import { match } from 'react-router-dom';

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (draggableStyle: any, isDragging: any) => ({
  userSelect: 'none',
  background: isDragging ? '#adadad' : 'white',
  ...draggableStyle
  
});

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? '#f1f1f1' : 'white',
  width: getDraggableWidth()
});

function getDraggableWidth() {
  let width = window.innerWidth;
  if (width > 1200) {
    return 1170;
  } else if (width < 1200 && width >= 992) {
      return 970;
    } else if (width < 992 && width > 680 ) {
    return 750; 
  } else {
    return 375;
  }
}

function getDraggableInnerWidth() {
  let width = window.innerWidth;
  if (width > 1200) {
    return 960;
  } else if (width < 1200 && width >= 992) {
      return 780;
  } else if (width < 992 && width > 680 ) {
    return 580;
  } else { return 240; }
}

export interface DraggableListState {
  editingItemId: string;
}

interface DraggableListProps { items: Item[]; 
                               handleEdit: (itemId: string) => void; 
                               handleDelete: (event: React.SyntheticEvent<HTMLButtonElement> | undefined) => void; 
                               handleUpdate: (items: Item[]) => void; 
                               match: match<{}>;
                             }

export default class DraggableList extends React.Component<DraggableListProps, DraggableListState> {
  constructor(props: any) {
    super(props);

    this.state = {
        editingItemId: ''
    };
    this.onDragEnd = this.onDragEnd.bind(this);
    this.handleOnEdit = this.handleOnEdit.bind(this);    
    this.handleOnDelete = this.handleOnDelete.bind(this);
  }

  handleOnEdit(itemId: string) {
    this.props.handleEdit(itemId);
  }

  handleOnDelete(event: React.SyntheticEvent<HTMLButtonElement> | undefined) {
    this.props.handleDelete(event);
  }

  onDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
        this.props.items,
        result.source.index,
        result.destination.index
    );
    this.props.handleUpdate(items);
  }
 
  render() {
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                >
                  { this.props.items.map((item: Item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                        {// tslint:disable-next-line:no-shadowed-variable
                        (provided, snapshot) => (
                            <div>
                            <div
                                  ref={provided.innerRef}
                                  style={getItemStyle(
                                      provided.draggableProps.style,
                                      snapshot.isDragging
                                  )}
                                  {...provided.dragHandleProps}
                            >
                                <div className="" >
                                
                                 <DraggableLine 
                                    hidden={item.content.hidden}
                                    value={item.content.value} 
                                    itemId={item.content.itemId} 
                                    onEditing={this.handleOnEdit}
                                    parentItems={this.props.items} 
                                    onDeleting={this.handleOnDelete}
                                    priority={index + 1}
                                    isDisabled={item.content.isDisabled}
                                    match={this.props.match}
                                    width={getDraggableInnerWidth()}
                                 />
                               
                                </div>
                              {provided.placeholder}
                            </div>
                            </div>
                        )}
                      </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
            )}
          </Droppable>
        </DragDropContext>
        </div>
    );
  }
}