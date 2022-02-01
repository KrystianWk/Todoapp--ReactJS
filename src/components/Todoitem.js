import React from 'react'

const TodoItem = props => {
    const MarkHandler = () => props.markClicked(props.element.id)  
    
    return ( <div className="card">
      <div className= {props.element.isCompleted ? 'completed' : ''}> 
      
       
      <h2>{props.element.title}</h2>
        <button onClick={MarkHandler}>Zakończone</button>
        </div>
        </div>
    )
      }        
        


export default TodoItem