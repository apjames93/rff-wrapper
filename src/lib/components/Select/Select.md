Select example:

```js noeditor
import Submit from '../Submit/Submit';
import Select from './Select';
```

```js
import Form from '../Form/Form';
import Submit from '../Submit/Submit';
import Select from './Select';


const onSubmit = async (values) => {
  console.log('Select Form', values)
}

  <Form
    onSubmit={onSubmit}
  >
    <Select
      name="otherThing"
      type="select"
      options={['one', 'two', 'three']}
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
