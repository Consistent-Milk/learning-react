import React, { Component } from "react";
import './SurveyForm.scss'


class SurveyForm extends Component {
    render() {
        return (
            <div className="container">
                <h1 id="title">Survey Form</h1>
                <p id="description">Please Fill Out the Form Below</p>
                <form id="survey-form">
                    <fieldset>
                        <label id="name-label">
                            Name{" "}
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter Your Name"
                                required
                            />
                        </label>
                        <label id="email-label">
                            Email{" "}
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter Your Email Address"
                                required
                            />
                        </label>
                        <label id="number-label">
                            Age{" "}
                            <input
                                id="number"
                                placeholder="Enter Your Age"
                                type="number"
                                min="18"
                                max="100"
                            ></input>
                        </label>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default SurveyForm;
