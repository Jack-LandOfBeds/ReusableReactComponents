import * as React from 'react';
import { Item } from './AddEditPanel';
import { Link, withRouter, match } from 'react-router-dom';

export interface AddLineProps { isDisabled: boolean; match: match<{}>; }
export interface AddLineState { value: string; }

const EnterKeyName: string = 'Enter';

export class AddLine extends React.Component<AddLineProps, AddLineState> {
    constructor(props: AddLineProps) {
        super(props);
        this.state = { value: ''};
    }

    addLineStyle() {
        return {
            width: '82%',
            margin: '10px',
            display: 'inline-block',
        };
      }  

    addButtonStyle() {
        return {
            width: '10.4%',
            display: 'inline-block'
        };
    }

    render() {
        return (
            <div>
                <Link
                    className={'btn btn-success btn-block' + (this.props.isDisabled ? ' disabled' : '')}
                    to={`${this.props.match.path}/Add`}
                >
                Add
                </Link>
            </div>
        );
    }
}