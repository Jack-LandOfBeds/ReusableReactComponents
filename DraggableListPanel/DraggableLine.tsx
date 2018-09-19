import * as React from 'react';
import { DraggableListState } from './DraggableList';
import { Item, ItemContent } from './AddEditPanel';
import { Link, match } from 'react-router-dom';

export interface DraggableLineProps extends ItemContent { match: match<{}>; }
export interface DraggableLinePropsConstructor 
                    extends DraggableLineProps {
                        onEditing: (itemId: string) => void;
                        onDeleting: (event: React.SyntheticEvent<HTMLButtonElement> | undefined) => void; parentItems: Item[];
                        priority: number; 
                        width: number;
                    }
interface DraggableLineState { editState: boolean;  inputValue: string; isHovering: boolean; }

const EnterKeyName: string = 'Enter';

export class DraggableLine extends React.Component<DraggableLinePropsConstructor, DraggableLineState> {
constructor(props: DraggableLinePropsConstructor) {
super(props);
this.state = {editState: false, inputValue: this.props.value, isHovering: false};
this.handleEditClick = this.handleEditClick.bind(this);
this.setHover = this.setHover.bind(this);
this.parentStyle = this.parentStyle.bind(this);
}

handleEditClick() {
     this.props.onEditing(this.props.itemId);
}

divStyle() {
    return {
        width: this.props.width + 'px',
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '6px',
        marginTop: '6px',
        display: 'inline-block',
    };
  }
  
priorityStyle() {
    return {
        width: '3%',
        display: 'inline',
        fontWeight: 600,
        color: '#777'
    } as React.CSSProperties ;
}

  parentStyle() {
    
    if (this.state.isHovering) {
        return {
            paddingTop: '1px', 
            paddingBottom: '1px',
            backgroundColor: '#f5f5f5'
        };
    }
    return{paddingTop: '1px', paddingBottom: '1px'};
  }
  setHover(hover: boolean) {
    this.setState({isHovering:  hover});
    return;
  }

    render() {
        return (
            this.props.hidden ? '' : (
        <div className={'row'} style={this.parentStyle()} onMouseEnter={() => this.setHover(true)} onMouseLeave={() => this.setHover(false)}>                      
                       <div className={'col-md-10 col-xs-8'}>
                       <div className={'col-md-1 col-xs-2'}>    
                <span style={this.priorityStyle()}>
                {this.props.priority}{'  '}</span>
                </div>
                <div className={'col-md-11 col-xs-10'}>
                {this.state.inputValue} {'   '}
                </div>
                </div>
                <div className={'col-md-1 col-xs-2'} style={{paddingRight: '2px'}}>
                <Link
                    id={'edit' + this.props.itemId}
                    className={'btn btn-warning btn-sm btn-block' + (this.props.isDisabled ? ' disabled' : '')}
                    to={`${this.props.match.path}/Edit/` + (this.props.itemId)}
                >
                Edit
                </Link>
                </div>
                <div className={'col-md-1 col-xs-2'} style={{paddingLeft: '2px'}}>

                <button id={'delete' + this.props.itemId} className="btn btn-danger btn-sm btn-block" onClick={this.props.onDeleting} disabled={this.props.isDisabled} value={this.props.itemId} >
                    Delete
                </button>
            </div>                        
        </div>    
        ));
    }
}