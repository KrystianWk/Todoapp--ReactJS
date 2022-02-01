import React from 'react'
import TodoItem from './Todoitem'

class Todo extends React.Component {
  state = {
      elements: [
          { id: '3435', isCompleted: true, title: 'zakupy'},
          { id: '3437775', isCompleted: false, title: 'oplacic domene'}
      ]
  }
  
markCompleted(id) {
 const index = this.state.elements
 .findIndex(x => x.id == id)
    const newElements = this.state.elements
        newElements[index].isCompleted = true

        this.setState({ elements: newElements })
}

addItem() {
    const item = {
        id: Math.random(),
        title: this.state.inputValue
    }
    const newElements = [item, ...this.state.elements]
    this.setState({ elements: newElements })
    this.setState({ inputValue: ""})
}


 inputHandler(event) {
     const newValue = event.target.value
    this.setState({ inputValue: newValue })
    }

    render() {
    const elements = this.state.elements.map(e => {
        return  <TodoItem element={e} markClicked = {this.markCompleted.bind(this)}/>
        
    })
        return (
    
        
        <div>  
         <h1>Todo App</h1>
            <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)} />
            <button onClick={this.addItem.bind(this)} >Dodaj zadanie</button>

         {elements}
         </div>  
    
    )   


    }
}

export default Todo