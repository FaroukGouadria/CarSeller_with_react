import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
    return (
        <div className="login-form-container">
            <span className="fas fa-times" id="close-login-form"></span>
                <form action="">
                    <h3>user login</h3>
                    <input type="email" placeholder="email" className="box"/>
                     <input type="password" placeholder="password" className="box"/>
                     <p>forget your password <Link to="#">Click Here</Link></p>
                      <input type="submit" value="login_now" className="btn"/>
                        <p>or login with</p>
                        <div className="buttons">
                        <Link href="#" className="btn">google</Link>
                        <Link href="#" className="btn">facebook</Link> 
                        </div>
                        <p>Don't have an account ? <Link to="#">Create One</Link></p>
                        </form>

       </div>
    );
}

export default login;
