import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';

import DataGrid, { Editing, Column, FormItem } from 'devextreme-react/data-grid';
import 'devextreme-react/html-editor';

import { employees } from './data.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <DataGrid
        dataSource={employees}
        showBorders={true}>

        <Editing
            mode="form"
            allowUpdating={true} />
            
        <Column dataField="Prefix" caption="Title" />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="Position" width={170} />
        <Column
            dataField="Notes"
            caption="Notes"
            visible={false}
        >
          <FormItem
            colSpan={2} 
            editorType="dxHtmlEditor"
            editorOptions={{ 
              height: 190,
              toolbar: {
                  items: ["bold", "italic", "underline"]
              } 
            }}
          ></FormItem>
        </Column>
      </DataGrid>
    </div>
  );
}

export default App;
