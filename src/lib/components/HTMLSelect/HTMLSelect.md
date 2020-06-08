HTMLSelect example:

```js noeditor
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import HTMLSelect from './HTMLSelect';
```

```js
import Form from '../Form/Form';
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import HTMLSelect from './HTMLSelect';


const onSubmit = async (values) => {
  console.log('Select Form', values)
}

  <Form
    onSubmit={onSubmit}
  >
    <HTMLSelect
      name="otherThing"
      type="select"
      options={['one', 'two', 'three']}
      label='First Select'
      labelPlacement='top'
    />
    <HTMLSelect
      name="stuff"
      type="select"
      options={[{ num: 'six' }, { num: 'nine' }]}
      displayKey="num"
      label='Second Select'
    />
    <MuiSubmit />
  </Form>
```
