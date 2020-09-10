import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import DataFromServer from './components/dataFromServer/DataFromServer';
import './App.css';
import PersonList from './components/personList/PersonList';
import AddPersonButton from './components/addPersonButton/AddPersonButton';
import CreateEditPersonModal from './components/createEditPersonModal/CreateEditPersonModal';
import StatusModal from './components/statusModal/StatusModal';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <DataFromServer/>
        <PersonList/>
        <AddPersonButton/>
        <CreateEditPersonModal/>
        <StatusModal/>
      </Provider>
    </div>
  );
}

export default App;
