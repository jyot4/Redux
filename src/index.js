import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { Provider } from 'react-redux'
// import Store from './Store';
// import Counter from './Counter';
// import Table from './tableWithRedux/Table';
// import TableStore from './tableWithRedux/TableStore';
// import Tables from './tableWithRedux/TableStore';
// import ReduxCounter from './Counter/ReduxCounter';
// import ReduxStore from './Counter/ReduxStore';



// import Tables from './2KiTable/TableStore2';
// import Table2 from './2KiTable/Table2';

import product from './API/ProductStore'
import Product from './API/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //   <Provider store= {ReduxStore}>
  //  <ReduxCounter/>
  // </Provider>

  // <Provider store={Tables}>
  //   <Table />
  // </Provider>

  // <Provider store={Tables}>
  //   <Table2/>
  // </Provider>


  <Provider store = {product}>
<Product/>
  </Provider>



);


