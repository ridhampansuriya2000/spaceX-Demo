import React from "react";
import configureStore from "./store";
import { Provider } from "react-redux";
import Route from "./route";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "theme";
const App = () => {
  const store = configureStore();

  return (
    <>
      <ThemeProvider>
        <Provider store={store}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Router>
            <Route />
          </Router>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
