import * as React from 'react';
import { ReactButton, ReactButtonProps } from './ReactButton';
export interface ReactMultiButtonPanelProps { reactButtonArray: ReactButtonProps[]; }

export class ReactMultiButtonPanel extends React.Component<ReactMultiButtonPanelProps> {
    constructor(props: ReactMultiButtonPanelProps) {
        super(props);

    }

    render() {
        return (
            this.props.reactButtonArray.map((x) => 
            <ReactButton buttonStyle={x.buttonStyle} buttonClass={x.buttonClass} buttonIcon={x.buttonIcon} title={x.title + ' '} value={x.value} key={x.key} onClick={x.onClick} badge={x.badge} />
        ));
    }
}