import React from 'react';
import './App.css';
import ListItems from './ListItems.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(e) {
    this.setState ({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e) {
    e.preventDefault();
    if(this.state.currentItem.text !== "") {
      const newItems = [...this.state.items, this.state.currentItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }

  render() {
    return(
      <div className="task-box">
        <header>
          <form id="todo-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter task" value={this.state.currentItem.text} onChange={this.handleInput} />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
