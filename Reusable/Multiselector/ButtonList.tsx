import * as React from 'react';
import * as Collections from 'typescript-collections';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactButton, ReactButtonProps } from '../ReactButton/ReactButton';

export interface ButtonListProps { buttonClass?: string; buttonIcon?: string; buttonStyle?: React.CSSProperties; dict: Collections.Dictionary<string, string>; disabled?: boolean; }
export interface ButtonListPropsConstructor extends ButtonListProps { handleClick: (event: React.SyntheticEvent<HTMLButtonElement> | undefined) => void; }

export class ButtonList extends React.Component<ButtonListPropsConstructor> {
    constructor(props: ButtonListPropsConstructor) {       
        super(props);     
    }

    mapButtonListPropsToListOfReactButton(buttonClass: string | undefined, 
                                          buttonIcon: string | undefined, 
                                          buttonStyle: React.CSSProperties | undefined,
                                          titleValueDict: Collections.Dictionary<string, string>, 
                                          handleClick: (event: React.SyntheticEvent<HTMLButtonElement> | undefined) => void) {
        let reactButtonsPropsArray: ReactButtonProps[] = new Array();
        
        titleValueDict.forEach(function(key: string, value: string) {
            var reactButtonProps: ReactButtonProps = { key: key, buttonClass : buttonClass, buttonIcon: buttonIcon, buttonStyle: buttonStyle, value: key, title: value, onClick: handleClick };
            reactButtonsPropsArray.push(reactButtonProps);
        });   

        const reactButtonArray: JSX.Element[] = reactButtonsPropsArray.map((x) => (
            <ReactButton 
                         buttonClass={x.buttonClass} 
                         buttonIcon={x.buttonIcon} 
                         title={x.title + ' '} 
                         buttonStyle={this.props.buttonStyle} 
                         value={x.value} 
                         key={x.key} 
                         onClick={handleClick} 
                         badge={true}
                         disabled={this.props.disabled} 
            />  
        ));

        return reactButtonArray;     
    }

    render() {
        return (
            <span>
                {this.mapButtonListPropsToListOfReactButton(this.props.buttonClass, this.props.buttonIcon, this.props.buttonStyle, this.props.dict, this.props.handleClick)}
        </span>
        );
    }
}
