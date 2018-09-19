import * as React from 'react';

interface PanelErrorMessageProps {
    message?: string;
   }

export const PanelErrorMessage: React.SFC<PanelErrorMessageProps> = (props) => {
return ( 
    <div>
        { props.message ? (
        <div className="panel panel-danger">
            <div className="panel-heading">
                <h3 className="panel-title">Error</h3>
            </div>
            <div className="panel-body">
                {props.message}
            </div>
        </div>) : ''}
    </div>
    );
   };