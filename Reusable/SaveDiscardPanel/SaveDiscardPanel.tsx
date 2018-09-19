import * as React from 'react';
import { SaveDiscardButtons } from './SaveDiscardButtons';
import { ReactButtonProps } from '../ReactButton/ReactButton';

export interface SaveDiscardPanelProps {
  saveButtonProps: ReactButtonProps;
  discardButtonProps: ReactButtonProps;
  unsavedChanges: boolean;
  message?: string;
  
}

export class SaveDiscardPanel extends React.Component<SaveDiscardPanelProps> {
  constructor(props: SaveDiscardPanelProps) {
    super(props);
  }
  
  spanStyleButtons() {
    return {
        float: 'right' as any,
        display: 'inline'
    };
  } 

  headingStyle() {
    return {
        display: 'inline-block'
    };
  } 

  render() {
    return (
    <div>
      {this.props.unsavedChanges ? (
        <div className="well" style={{margin: 0, borderRadius: '0px'}}>      
        <h4 style={this.headingStyle()}>{this.props.message}</h4>
        <span style={this.spanStyleButtons()}>
      <SaveDiscardButtons saveButtonProps={this.props.saveButtonProps} discardButtonProps={this.props.discardButtonProps} /> 
      </span> 
      </div> 
      ) : ''}
    </div>
    );
  }
}
