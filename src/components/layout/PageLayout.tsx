import React from 'react';
import { Route, Switch } from 'react-router';
import Welcome from "../Welcome/Welcome";
import { QRCodePage } from "../QRCode/QRCodePage";

const PageLayout = () => {
    return (
        <main>
            <Switch>
                <Route
                    exact={true}
                    path={"/qr"}
                    component={QRCodePage}
                />
                <Route path={"/"}
                       component={Welcome}/>
            </Switch>
        </main>
    )
}

export default PageLayout;
