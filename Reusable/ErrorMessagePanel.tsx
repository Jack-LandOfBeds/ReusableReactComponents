import * as React from 'react';

interface MessagePanelProps {
    class: string;
    title: string;
    message?: string;
    resetMessage: () => void;
   }

export const MessagePanel: React.SFC<MessagePanelProps> = (props) => {
return ( 
    <div>
        { props.message ? (
            <div className="well" style={{marginBottom: 0, borderRadius: 0}}>
            <div className={props.class} style={{marginBottom: 0}}>
                <div className="panel-heading">
                    <h3 className="panel-title">{props.title}
                    <button type="button" className="close" onClick={props.resetMessage}><span className="glyphicon glyphicon-remove"/></button>
                    </h3>
                </div>
                <div className="panel-body">
                    {props.message}
                </div>
            </div>
        </div>) : ''}
    </div>
    );
   };