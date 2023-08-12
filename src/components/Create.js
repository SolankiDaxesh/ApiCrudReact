import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import baseurl from './environment';
export default function Create() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  <script crossorigin src="Access-Control-Allow-Origin: *"></script>;
  const postData = () => {
    // var regex = '^[0-9]';
    // console.log(title);
    // console.log(price);
    // console.log(rating);
    // console.log(description);
    axios.post(baseurl + 'products/add', {
      title,
      price,
      rating,
      description,
    });
  };

  return (
    <div>
      <Form class="create-form">
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Rating</label>
          <input
            placeholder="Rating"
            type="number"
            onChange={(e) => setRating(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
