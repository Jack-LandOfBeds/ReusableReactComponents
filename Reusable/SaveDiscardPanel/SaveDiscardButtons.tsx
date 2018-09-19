import * as React from 'react';
import { ReactMultiButtonPanel } from '../ReactButton/ReactMultiButtonPanel';
import { ReactButtonProps } from '../ReactButton/ReactButton';

export interface SaveDiscardButtonsProps {
    saveButtonProps: ReactButtonProps;
    discardButtonProps: ReactButtonProps;
  }

export class SaveDiscardButtons extends React.Component<SaveDiscardButtonsProps> {

      constructor(props: SaveDiscardButtonsProps) {
          super(props);         
      }

      render() {
          return( <ReactMultiButtonPanel reactButtonArray={[this.props.discardButtonProps, this.props.saveButtonProps]}/> );
      }
  }
