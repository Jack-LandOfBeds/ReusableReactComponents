import * as React from 'react';

export interface ReactButtonProps { buttonClass?: string; 
                                    buttonIcon?: string; 
                                    buttonIconLeft?: string;
                                    value?: string; 
                                    title?: string; 
                                    badge?: boolean; 
                                    onClick?: (event: React.SyntheticEvent<HTMLButtonElement> | undefined) => void; 
                                    buttonStyle?: React.CSSProperties;   
                                    disabled?: boolean;       
                                    key: string;                        
                                  }

export class ReactButton extends React.Component<ReactButtonProps> {
    constructor(props: ReactButtonProps) {
        super(props);

    }

    render() {
        return (
            <button style={this.props.buttonStyle} className={this.props.buttonClass} type="button" value={this.props.value} onClick={this.props.onClick} disabled={this.props.disabled} >
             <span className={this.props.buttonIconLeft}/>
             {this.props.title}{' '}
             {this.props.badge ? (<span className="badge"><span className={this.props.buttonIcon}/></span>) : (<span className={this.props.buttonIcon}/>)}
             </button>
        );
    }
}