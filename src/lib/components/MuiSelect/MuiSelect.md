MuiSelect example:

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
    <div>
      <MuiSelect
        name="otherThing"
        type="select"
        options={['one', 'two', 'three']}
      />
    </div>
    <div>
      <MuiSelect
        name="stuff"
        type="select"
        options={[{ num: 'six' }, { num: 'nine' }]}
        displayKey="num"
      />
    </div>
    <MuiSubmit />
  </Form>
```
