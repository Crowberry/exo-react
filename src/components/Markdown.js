import React from 'react';
import {markdown} from 'markdown';



class Markdown extends React.Component {
    render(){
        const { children, ...props } = this.props;
        return (
            <div dangerouslySetInnerHTML={{__html: markdown.toHTML(children)}} {...props}></div>
        )
    }
}

export default Markdown;