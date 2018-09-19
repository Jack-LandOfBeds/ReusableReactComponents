import * as React from 'react';
import { Item } from './AddEditPanel';

export interface SearchDraggableListProps {
    items: Item[];
    filterList: (items: Item[]) => void;
}

export interface SearchDraggableListState {
     text: string;
}

export default class SearchDraggableList extends React.Component<SearchDraggableListProps, SearchDraggableListState> {

  constructor(props: SearchDraggableListProps) {
    super(props);
    this.state = {
        text: '',
    };
    
    this.filterList = this.filterList.bind(this);
    this.clear = this.clear.bind(this);
  }

//   componentDidMount() {
      
//   }

  filterList(event: React.ChangeEvent<HTMLInputElement> | undefined) {
      if (event) {
        this.setState({text: event.target.value});
        let initialList = this.props.items;
        let updatedList = initialList.filter((item) => {
            if (item.content.value.toLowerCase().search(event.target.value.toLowerCase()) !== -1) {
                item.content.hidden = false;
            } else {
                item.content.hidden = true;
            }
            return item;
        });
        this.props.filterList(updatedList);
    }
  }
  clear (event: React.MouseEvent<HTMLElement> | undefined) {
    this.setState({text: ''});
    this.filterList({ target: { value: ''}} as React.ChangeEvent<HTMLInputElement>);

  }

  clearIconStyle() {
      return {
        marginLeft: '-24px',
        fontSize: '26px', 
        verticalAlign: 'sub',
        cursor: 'pointer'
      } as React.CSSProperties;
  }

  searchStyle() {
    return {
        display: 'inline'
    } as React.CSSProperties;
}

  render() {
    return (
      <div>
        <span>
            <input value={this.state.text} style={this.searchStyle()} className={'form-control'} type="search" placeholder="Search..." onChange={this.filterList}/>
            <span style={this.clearIconStyle()} onClick={this.clear}>&times;</span>
        </span>
      </div>
    );
  }
}
