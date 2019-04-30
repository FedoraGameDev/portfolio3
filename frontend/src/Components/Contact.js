import React, { Component } from "react";
import { Message, Header, Form } from "semantic-ui-react";
import sendmailfn from "sendmail";
import sanitizeHtml from "sanitize-html";

const INITIAL_STATE = {
    email: "",
    message: "",
    messageValid: true,
    emailValid: true
}

class Contact extends Component
{
    constructor(props)
    {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onChange = event =>
    {
        this.setState({ [event.target.name]: event.target.value });
    }

    sanitize = input =>
    {
        let temp = document.create
    }

    onSubmit = () =>
    {
        const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        const { email, message } = this.state;
        const emailValid = emailRegex.test(email);
        const messageValid = message != "";

        this.setState({ emailValid, messageValid });

        if (emailValid && messageValid)
        {
            let sendmail = sendmailfn({ silent: true });
            console.log(sendmail);
            sendmail({
                from: email,
                replyTo: email,
                to: "jimmy.satt@gmail.com",
                subject: "New email from portfolio website",
                html: sanitizeHtml(message)
            },
                (error, reply) =>
                {
                    console.log(error && error.stack);
                    console.dir(reply);
                });
        }
    }

    render()
    {
        const { email, message } = this.state;

        return (
            <div style={{ textAlign: "center" }}>
                <Message color="black" style={{ textAlign: "left" }}>
                    <Message.Header><Header as="h1" color="blue">Contact Me</Header></Message.Header>
                    <Message.Content>
                        <Form inverted onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Input label="Email" name="email" type="text" placeholder="email" value={email} onChange={this.onChange} />
                            </Form.Group>
                            <Form.TextArea label="Message" name="message" placeholder="message" value={message} onChange={this.onChange} />
                            <Form.Button primary type="submit">Submit</Form.Button>
                        </Form>
                    </Message.Content>
                </Message>
            </div>
        )
    }
}

export default Contact;