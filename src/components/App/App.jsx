import React, { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import ResultsContainer from './../ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

const App = () => {

    const [headerText, setHeaderText] = useState('Name It!')
    const [headerExpanded, setHeaderExpanded] = useState(true)
    const [suggestedNames, setSuggestedNames] = useState([])

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!inputText)
        setSuggestedNames(inputText ? name(inputText) : [])
    }

    return (
        <div>
            <Header headerExpanded={headerExpanded} headTitle={headerText} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultsContainer suggestedNames={suggestedNames} />
        </div>
    );

}
// class App extends React.Component {
//     state = {
//         headerText: 'Name It!',
//         headerExpanded: true,
//         suggestedNames: [],
//     };

//     handleInputChange = (inputText) => {
//         this.setState({
//             headerExpanded: !inputText,
//             suggestedNames: inputText ? name(inputText) : []
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText} />
//                 <SearchBox onInputChange={this.handleInputChange} />
//                 <ResultsContainer suggestedNames={this.state.suggestedNames} />
//             </div>
//         );
//     }
// }

export default App