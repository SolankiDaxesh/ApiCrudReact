import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const Create = () => (
  <Form class="create-form">
    <Form.Field>
      <label>Title</label>
      <input placeholder="Title" />
    </Form.Field>
    <Form.Field>
      <label>Price</label>
      <input placeholder="Price" />
    </Form.Field>
    <Form.Field>
      <label>Rating</label>
      <input placeholder="Rating" type="number" />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <input placeholder="Description" />
    </Form.Field>

    <Button type="submit">Submit</Button>
  </Form>
);

export default Create;
