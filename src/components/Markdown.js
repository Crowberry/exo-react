import React from 'react';
import {markdown} from 'markdown';



class Markdown extends React.Component {
    state  = {element:""}
    render(){
        const {element} =this.state;
        return (
            <div dangerouslySetInnerHTML={{__html: markdown.toHTML(element)}}></div>
        )
    }
}

export default Markdown;