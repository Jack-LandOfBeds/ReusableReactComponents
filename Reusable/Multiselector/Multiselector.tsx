import * as React from 'react';
import * as Collections from 'typescript-collections';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Multiselector.css';
import { ReactButton, ReactButtonProps } from '../ReactButton/ReactButton';
import { ButtonList, ButtonListProps } from './ButtonList';
import { ReactMultiButtonPanel, ReactMultiButtonPanelProps } from '../ReactButton/ReactMultiButtonPanel';
import { SelectionOption } from '../../../Enums/ApplicationConstants';
interface MultiselectorState { isToggleOn: boolean; }

export interface MultiselectorDataProps { 
    selectedProps: ButtonListProps; 
    availableProps: ButtonListProps; 
    handleCategoryUpdate: (selectionTypeClicked: SelectionOption, key: string, value: string) => void;
}
export interface MultiselectorProps extends MultiselectorDataProps { 
    availableTitle: string; 
    selectedTitle: string; 
    disabled?: boolean;  
}

export class Multiselector extends React.Component<MultiselectorProps, MultiselectorState> {
    constructor(props: MultiselectorProps) {
        super(props);
        this.state = {isToggleOn: false};

        this.handleClickButtonListSelected = this.handleClickButtonListSelected.bind(this);
        this.handleClickButtonListAvailable = this.handleClickButtonListAvailable.bind(this);
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState((prevState: MultiselectorState) => ({
          isToggleOn: !prevState.isToggleOn      
        }));
      }

      handleClickButtonListAvailable(event: React.SyntheticEvent<HTMLButtonElement> | undefined) {
        if (event) {          
            
            var availablePropsDict = this.props.availableProps.dict;
            var availableKey: string = event.currentTarget.value;
            var availableValue: string | undefined = availablePropsDict.getValue(availableKey);
            if (availableValue) {
                this.props.handleCategoryUpdate(SelectionOption.Available, availableKey, availableValue);
            }
            this.forceUpdate();
        }
      }

      handleClickButtonListSelected(event: React.SyntheticEvent<HTMLButtonElement> | undefined) {
        if (event) {          
            
            var selectedPropsDict = this.props.selectedProps.dict;
            var selectedKey: string = event.currentTarget.value;
            var selectedValue: string | undefined = selectedPropsDict.getValue(selectedKey);
            if (selectedValue) {
                this.props.handleCategoryUpdate(SelectionOption.Selected, selectedKey, selectedValue);
            }
            this.forceUpdate();
        }
      }

      showAddWell(show: boolean) {
        if (show) {
          return (
          <div className="col-md-6">   
          <div className="form-group">
              <label>{this.props.availableTitle}</label>
              <div className="well minimize-well">   
              <div className="media">
                  <div className="media-body minimize-media-left">
                        <ButtonList 
                            buttonClass={this.props.availableProps.buttonClass} 
                            buttonIcon={this.props.availableProps.buttonIcon} 
                            dict={this.props.availableProps.dict} 
                            handleClick={this.handleClickButtonListAvailable} 
                            disabled={this.props.disabled}
                        />
                  </div>
                  <div className="media-right minimize-media-right">                                   
                      <ReactButton 
                            key={'discardButton'}
                            buttonClass={'btn btn-link mimimize-btn-close'} 
                            buttonIcon={'glyphicon glyphicon-chevron-left'} 
                            badge={false}
                            title={'Close'} 
                            onClick={this.handleClick}
                            disabled={this.props.disabled}
                      />
                  </div>
                  </div>                                                                                        
              </div>
          </div>
          </div>);
        } else {
            return '';
        }
      }

  render() {
    return (
        <div className="row">
        {this.showAddWell(this.state.isToggleOn)}
        <div className={this.state.isToggleOn ? 'col-md-6' : 'col-md-12'}>   
            <div className="form-group">
                <label>{this.props.selectedTitle}</label>
                <div className="well well-lg"> 
                {this.state.isToggleOn ? '' : (<button className="btn btn-primary btn-react" type="button" onClick={this.handleClick} disabled={this.props.disabled}>
                     <span className="glyphicon glyphicon-plus"/>
                     {' '}
                     <span className="badge">{this.props.availableProps.dict.size()}</span>
                     </button>)}  
                     <ButtonList 
                        buttonClass={this.props.selectedProps.buttonClass} 
                        buttonIcon={this.props.selectedProps.buttonIcon} 
                        dict={this.props.selectedProps.dict} 
                        handleClick={this.handleClickButtonListSelected} 
                        disabled={this.props.disabled}
                     />                   
                </div>
            </div>
        </div>
        </div>  
    );
  }
}
