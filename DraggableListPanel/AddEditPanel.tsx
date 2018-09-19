import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DraggableList from './DraggableList';
import { AddLine } from './AddLine';
import { DummyApi } from '../WebApiServices/DummyApi';
import { PanelErrorMessage } from './PanelErrorMessage';
import { ReactButtonProps } from '../Reusable/ReactButton/ReactButton';
import { SaveDiscardPanel } from '../Reusable/SaveDiscardPanel/SaveDiscardPanel';
import { match } from 'react-router-dom';
import { MessagePanel } from '../Reusable/ErrorMessagePanel';
import SearchDraggableList from './SearchDraggableList';

interface AddEditProps { title?: string; 
                         saveButtonProps: ReactButtonProps;  
                         discardButtonProps: ReactButtonProps;
                         api: AddEditPanelApi;
                         unsavedChanges: boolean;
                         items: Item[]; 
                         message?: string;
                         match: match<{}>;
                         messageTitle: string;
                         messageClass: string;
                         resetMessage: () => void;
                         updateListItems: (items: Item[]) => void;
                       }

export interface ItemContent { value: string; itemId: string; importanceValue?: number; isDisabled?: boolean; hidden?: boolean; }

export interface AddEditPanelApi {
  handleUpdate: (items: Item[]) => void; 
  handleDelete: (event: React.SyntheticEvent<HTMLButtonElement> | undefined) => void;
  handleEdit: (itemId: string) => void;
  getAll: () => Promise<Item[]>;
}

export interface Item {
  id: string;
  content: ItemContent;
}

export class AddEditPanel extends React.Component<AddEditProps> {

    constructor(props: AddEditProps ) {
        super(props);    
    } 

  render() {
    return (
      <div>    
        <div style={{position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 100}} >
          <MessagePanel message={this.props.message} resetMessage={this.props.resetMessage} title={this.props.messageTitle} class={this.props.messageClass} />
        </div>
        <div className="row">
              <h3>{this.props.title}</h3>  
              <div className="row" style={{marginBottom: '3px'}}>   
              <div className="col-md-10" style={{lineHeight: '0'}}>
                <SearchDraggableList items={this.props.items} filterList={this.props.updateListItems}/> 
              </div>
              <div className="col-md-2">            
              <AddLine match={this.props.match} isDisabled={this.props.unsavedChanges}/>
              </div>
              </div>
            </div>
            <div className="row">
            <DraggableList 
                           handleUpdate={this.props.api.handleUpdate} 
                           handleEdit={this.props.api.handleEdit} 
                           handleDelete={this.props.api.handleDelete} 
                           items={this.props.items} 
                           match={this.props.match}
            />
            </div>
            <div style={{position: 'fixed', bottom: 0, left: 0, width: '100%'}} >
            <SaveDiscardPanel 
              saveButtonProps={this.props.saveButtonProps} 
              discardButtonProps={this.props.discardButtonProps} 
              unsavedChanges={this.props.unsavedChanges}
              message={'Do You Want To Save Changes To The Group Order?'} 
            />
            </div>
      </div>
    );
  }
}