import * as React from 'react';
import { ReactMultiButtonPanel } from '../ReactButton/ReactMultiButtonPanel';
import { ReactButtonProps } from '../ReactButton/ReactButton';

export interface ButtonModalProps {
    title: string;
    message: string;
    buttonsProps: ReactButtonProps[];
    isOpen: boolean;
}

export interface ButtonModalState {
    
}

export class ButtonModal extends React.Component<ButtonModalProps, ButtonModalState> {
  constructor(props: ButtonModalProps) {
    super(props);

  }

  render() {
    return (
        <div className={this.props.isOpen ? 'modal show' : 'modal hide'} role="dialog">
        <div className="modal-dialog" role="document" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
            </div>
            <div className="modal-body">
              <p>{this.props.message}</p>
            </div>
            <div className="modal-footer">
            <ReactMultiButtonPanel reactButtonArray={this.props.buttonsProps} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
    