Input example:

```js noeditor
import Submit from '../Submit/Submit';
import Input from './Input';
```

```js
import Form from '../Form/Form';
import Submit from '../Submit/Submit';
import Input from './Input';


const onSubmit = async (values) => {
  console.log('Input Form', values)
}

  <Form
    onSubmit={onSubmit}
  >
    <Input
      name="thing"
      label="thing"
    />
    <Input
      name="number"
      label="number"
      type="number"
    />
    <Input
      name="date"
      label="date"
      type="date"
    />
    <Submit />
  </Form>
```
