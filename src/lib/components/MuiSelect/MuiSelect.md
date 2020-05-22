Select example:

```js noeditor
import Form from '../Form/Form';
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import MuiSelect from './MuiSelect';
```

```js
import Form from '../Form/Form';
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import MuiSelect from './MuiSelect';

const onSubmit = async (values) => {
  console.log('Select Form', values)
}

  <Form
    onSubmit={onSubmit}
  >
    <MuiSelect
      name="otherThing"
      type="select"
      options={['one', 'two', 'three']}
    />
    <MuiSelect
      name="stuff"
      type="select"
      options={[{ num: 'six' }, { num: 'nine' }]}
      displayKey="num"
    />
    <MuiSubmit />
  </Form>
```
