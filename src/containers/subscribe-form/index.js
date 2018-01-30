import React from 'react';
import './subscribe-form.css';

const url = ' http://localhost:3004/subcriptions';

class SubscribeForm extends React.Component {
    state = {
        email: {
            value: '',
            error: null,
        },
        success: false
    };

    handleInput = (e) => {
        this.setState({
            email: {
                ...this.state.email,
                value: e.target.value,
                error: null
            }
        })
    };

    handleForm = (e) => {
        e.preventDefault();

        const email = this.state.email.value;
        const regex = /(.+)@(.+){2,}\.(.+){2,}/;

        if (regex.test(email)) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email})
            })
                .then(res => res.json())
                .then(() => {
                    this.setState({
                        email: {
                            ...this.state.email,
                            value: '',
                        },
                        success: true
                    });
                    this.clearMsg();
                })
        }
        else {
            this.setState({
                email: {
                    ...this.state.email,
                    error: "Please, enter a valid email."
                }
            });
        }
    };

    clearMsg = () => {
        setTimeout(()=> this.setState({
            success: false
        }), 4000)
    };

    render() {
        const err = this.state.email.error;
        return (
            <aside className="subscribe-panel">
                <div className="container">
                    {!this.state.success ? (
                        <React.Fragment>
                            <h4 className="title">Subscribe to us</h4>
                            <form onSubmit={(e) => this.handleForm(e)}>
                                <input className="input-style"
                                       type="text"
                                       onChange={(e) => this.handleInput(e)}
                                       placeholder="yourmail@gmail.com"
                                       value={this.state.email.value}
                                />
                                {err && (<p className="error">{err}</p>)}
                            </form>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                eaque exercitationem fugit ipsa laudantium libero maiores nostrum obcaecat!</p>
                        </React.Fragment>
                    ) : (
                        <p className="success-msg">Thank you for subscription.</p>
                    )}
                </div>
            </aside>
        );
    }
}

export default SubscribeForm;