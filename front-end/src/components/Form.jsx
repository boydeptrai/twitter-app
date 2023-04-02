import React from 'react';
import '../css/Form.css';

export default function Form() {
  return (
    <section className="form-section">
        <form className="form">
          <textarea
            type="text"
            name="content"
            id="content"
            className="content"
            placeholder="What's happening?"
          ></textarea>
          <button className="btn" type="submit">Tweet</button>
        </form>
      </section>
  )
}
