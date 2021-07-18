import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from './routes';

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                render={(props: RouteComponentProps<any>) => (
                                    <route.component {...props} {...route.props} />
                                )}
                            />
                        );
                    })}
                </Switch>
            </BrowserRouter>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.querySelector('#root'),
);
