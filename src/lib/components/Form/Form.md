Input example:

```js noeditor
import Form from './Form';
import Submit from '../Submit/Submit';
import Input from '../Input/Input';
import Select from '../Select/Select';

```

```js
import Form from './Form';
import Submit from '../Submit/Submit';
import Input from '../Input/Input';
import Select from '../Select/Select';


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

    <Select
      name="stuff"
      type="select"
      options={[{ num: 'six' }, { num: 'nine' }]}
      displayKey="num"
    />

    <Submit />
  </Form>
```
