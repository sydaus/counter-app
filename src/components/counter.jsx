import React, { Component } from 'react';

/*  basic render
class Counter extends Component {
    render() { 
        return ( 
            <div>
                <h1>Hello World</h1>
                <button>Increment</button>
            </div>
         );
    }
}
 
export default Counter;
*/


/*

RENDER PICTURE / CONDITION TO DISPLAY DIFFERENT THINGS 

class Counter extends Component {
    state = {
        count: 0,  //state can include any data that the component need
        imageUrl: 'https://picsum.photos/200'
    }
    render() {
        // React.createElement('div'); this line is not need becase we have already import component class, in this extension it will automatically do it 
        return (
        <React.Fragment>
            <img src={this.state.imageUrl} alt="" />
            <span>{this.formatCount()}</span>
            <button>Increment</button>
        </React.Fragment>);

    }

        formatCount() {
            const {count } = this.state;
            return count === 0 ? 'Zero' : count;

        }

}

    export default Counter;

*/

/*
USE BOOTSTRAP TO STYLE COMPONENTS

    class Counter extends Component {
        state = {
            count: 0,  //state can include any data that the component need
         
        }
        render() {
            // React.createElement('div'); this line is not need becase we have already import component class, in this extension it will automatically do it 
     
            return (
            <React.Fragment>
                <span className = "badge bg-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary  btn-sm">Increment</button>
            </React.Fragment>);
    
        }
    
            formatCount() {
                const {count } = this.state;
                return count === 0 ? 'Zero' : count;
    
            }
    
    }
    
        export default Counter;
    */
    

        /*
        
        ADD LISTS

        class Counter extends Component {
            state = {
                count: 1,  //state can include any data that the component need
                tags: ['tag1', 'tag2', 'tag3']
            }
            render() {
                // React.createElement('div'); this line is not need becase we have already import component class, in this extension it will automatically do it 
                // let classes = this.getBadgeClasses();
                
                return (
                <React.Fragment>
                    <span className = {this.getBadgeClasses()} >{this.formatCount()}</span>
                    <button className="btn btn-secondary  btn-sm">Increment</button>
                    <ul>
                        {this.state.tags.map( tag => <li key={tag}>{tag}</li>)}
                    </ul>
                </React.Fragment>);
        
            }
        
            getBadgeClasses() {
                let classes = "badge m-2 bg-";
                classes += (this.state.count === 0) ? "warning" : "primary";
                return classes;
            }

            formatCount() {
                const {count } = this.state;
                return count === 0 ? 'Zero' : count;
    
            }
        
        }
        
            export default Counter;


*/


/*
//RENDER WHEN NO TAGS 
class Counter extends Component {
    state = {
        count: 1,  //state can include any data that the component need
        tags: []
    }

    renderTags () {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map( tag => <li key={tag}>{tag}</li>)}</ul>;        
    }


    render() {        
        return (
        <div>
            {this.state.tags.length === 0 && "Please create a tag!"} 
            {this.renderTags()}
        </div>
            );
    }
}

    export default Counter;
*/


/*
class Counter extends Component {
    state = {
        count: this.props.counter.value,  //state can include any data that the component need
 
    }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement() {
    //     console.log("Increment Clicked", this.state.count);
    // };

    // handleIncrement = () => {
    //     console.log("Increment Clicked", this);
    // };

    // handleIncrement = () => {
    //     this.setState({count: this.state.count + 1})
    // };

    handleIncrement = product => {
        // console.log(product);
        this.setState({count: this.state.count + 1});
    };

    // doHandleIncrement = () => {
    //     this.handleIncrement({id: 1});

    // };

    // handleDecrement = product => {
    //     this.state.count === 0 ? this.setState({count: 0}) : this.setState({count: this.state.count -1});
    // }

    render() {
        // React.createElement('div'); this line is not need becase we have already import component class, in this extension it will automatically do it 
        // let classes = this.getBadgeClasses();

        // console.log('props', this.props);        
        return (
        <div>
          
            {/* props stand for properties, and they are read only. but they can transfer data to  other componets.
        state is local and can not used out of the component. */ 
        /*
            <span className = {this.getBadgeClasses()} >{this.formatCount()}</span>
            <button 
                onClick={ this.handleIncrement }  
                className="btn btn-secondary  btn-sm"
            >
                Increment                
            </button>

            <button 
                onClick={()=> this.props.onDelete(this.props.counter.id) }  
                className="btn btn-danger  btn-sm m-2"
            >
                Delete                
            </button>

        </div>);

    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

}

    export default Counter;

    */

    class Counter extends Component {
        componentDidUpdate(prevProps, prevState) {
            console.log('prevProps', prevProps);
            console.log('prevState', prevState);
            if (prevProps.counter.value !== this.props.counter.value) {
                // Ajax call and get new data from the server
            }
        }

        componentWillUnmount(){
            console.log('counter - unmount');
        }

        render() {
            console.log('counter - rendered');
               
            return (
            <div className="row">  
                <div className="col-1">
                    <span className = {this.getBadgeClasses()} >{this.formatCount()}</span>
                </div>

                <div className="col">
                    <button 
                        onClick={ () => this.props.onIncrement(this.props.counter) }  
                        className="btn btn-secondary  btn-sm"
                    >
                        +               
                    </button>

                    <button 
                        onClick={ () => this.props.onDecrement(this.props.counter) }  
                        className="btn btn-secondary  btn-sm m-2"
                        disabled={this.props.counter.value === 0 ? 'disabled' : ''} 
                    >
                        -               
                    </button>
        
                    <button 
                        onClick={()=> this.props.onDelete(this.props.counter.id) }  
                        className="btn btn-danger  btn-sm"
                    >
                        Delete                
                    </button>
                </div> 
                        
                
                
    
            </div>);
    
        }
    
        getBadgeClasses() {
            let classes = "badge m-2 bg-";
            classes += (this.props.counter.value === 0) ? "warning" : "primary";
            return classes;
        }
    
        formatCount() {
            const {value } = this.props.counter;
            return value === 0 ? 'Zero' : value;
        }
    
    }
    
        export default Counter;