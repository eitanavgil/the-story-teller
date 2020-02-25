import React, {Fragment, useState} from 'react';

enum LoginTypes {
    ks = "ks",
    email = "email",
}

function Login() {
    const [loginType, setLoginType,] = useState<LoginTypes>(LoginTypes.ks);

    return (
        <Fragment>
            <div className="body"></div>
            <div className="grad"></div>
            <div className="login">
                {loginType === LoginTypes.ks &&
                <Fragment>
                    <input type="text" placeholder="ks" name="ks"/><br/>
                </Fragment>
                }
                {loginType === LoginTypes.email &&
                <Fragment>
                    <input type="text" placeholder="username" name="user"/><br/>
                    <input type="password" placeholder="password" name="password"/><br/>
                    <input type="button" value="Login"/>
                </Fragment>
                }
            </div>
        </Fragment>
    );
}

export default Login;
