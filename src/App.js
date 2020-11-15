import './App.css';
import React, {Component} from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postList: [
                '我是默认的第一条'
            ],
            inputValue: ""
        }
    }

    render() {
        // jsx语法
        return (
            <div>
                <ul>
                    {
                        this.state.postList.map((value, index) => {
                            return (
                                <li key={index}>
                                    {value}
                                    <button className="btn1" onClick={this.delete.bind(this, index)}>删除</button>
                                </li>
                            )
                        })
                    }
                </ul>
                {/*<div className='text'> {this.state.inputValue} </div>*/}
                <div>
                        <textarea
                            value={this.state.inputValue}
                            onChange={this.handleInput.bind(this)}
                            name="" id="">
                        </textarea>
                    <br/>
                    <button className='btn2' onClick={this.submit.bind(this)}>添加</button>
                </div>
            </div>
        )
    }
    submit() {
        // console.log(0)
        if (this.state.inputValue !== null && this.state.inputValue !== ''){
            this.setState({
                postList: [...this.state.postList, this.state.inputValue],
                inputValue: ""
            })
        }else {
            alert(`输入框不能为空`)
        }
    }
    handleInput(e) {
        // this.state.inputValue = e.target.value   //这个方法不能直接赋值
        // 需要bind(this)改变this指向，让this指向这个实例
        this.setState({
            inputValue: e.target.value,
        })
    }
    delete(index) {
        // 删除操作需要保留一个副本，在副本上进行操作，该postList是局部的postList,不影响全局的postList
        let postList = [...this.state.postList]
        postList.splice(index, 1)
        // 数组删除操作用splice
        this.setState({
            postList,
        })
    }
}

export default App