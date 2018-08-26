import React, {Component} from 'react';

export default class UnstructuredSelect extends Component {
  constructor(props){
    super(props);
    this.state={};
    this.onChange = this.onChange.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
  }

  // on mount construct an object that includes options labels and a value of any type
  componentDidMount(){
    let index = 0;
    const optionsObject = this.props.options.reduce((allOption, currentOptionObject) => {

      if (currentOptionObject instanceof Object && !(currentOptionObject instanceof Array) ) {
        globalIndex++;
        return allOption.concat({
          index: globalIndex,
          value: currentOptionObject.object,
          label: currentOptionObject.object
        });
      } else if (currentOptionObject instanceof Array){
        return allOption.concat(
          currentOptionObject.map((currentItem) => {
            globalIndex++;
            return {
              index: globalIndex,
              value: currentItem,
              label: currentItem
            }
          })
        );
      } else {
        globalIndex++;
        return allOption.concat({
          index: globalIndex,
          value: currentOptionObject,
          label: currentOptionObject
        });
      }
    }, [])

    this.setState({
      options: optionsObject
    });
  }

  // Use the object in state of complex types and the index to convert the options value (which is an index) into the appropriate complex value
  onChange(event){
    const value = this.state.options.filter((option)=>{return option.index===event.target.value})[0].value;
    this.props.onChange(value)
  }

  renderOptions(){
    if (!this.state.options) return <div />
    else{
      return(
        <select
          onChange={this.onChange}
        >
        {
          this.state.options.map((option)=>{
            return(
              <option key={option.index} value={option.index}>{option.label}</option>
            )
          })
        }
        </select>
      )
    }
  }
  render(){
    return(
      <div>
       {this.renderOptions()}
      </div>
    )
  }
}
