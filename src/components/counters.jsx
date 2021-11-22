import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        console.log('counters - rendered');
        
        // object destructuring
        const {onReset, onDelete, counters, onIncrement, onDecrement} = this.props
       
        return (
            <div>
                <button 
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">Reset
                </button>

                { counters.map(counter =>  
                <Counter 
                    key={counter.id} 
                    onDelete={onDelete} 
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    // value={counter.value} 
                    // id={counter.id} 
                    counter={counter}
                >                    
                </Counter>                
                )}
            </div>  
        );
    }


    // render() { 
    //     const {onReset, onDelete, Counters, onIncrement} = this.props
       
    //     return (
    //         <div>
    //             <button 
    //                 onClick={this.props.onReset}
    //                 className="btn btn-primary btn-sm m-2">Reset
    //             </button>

    //             { this.props.counters.map(counter =>  
    //             <Counter 
    //                 key={counter.id} 
    //                 onDelete={this.props.onDelete} 
    //                 onIncrement={this.props.onIncrement}
    //                 // value={counter.value} 
    //                 // id={counter.id} 
    //                 counter={counter}
    //             >                    
    //             </Counter>                
    //             )}
    //         </div>  
    //     );
    // }

}
 
export default Counters;