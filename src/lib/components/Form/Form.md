Form example:

```js noeditor
import Form from './Form';
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import MuiInput from '../MuiInput/MuiInput';
import MuiSelect from '../MuiSelect/MuiSelect';
```

```js
import Form from './Form';
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import MuiInput from '../MuiInput/MuiInput';
import MuiSelect from '../MuiSelect/MuiSelect';


const onSubmit = async (values) => {
  console.log('Input Form', values)
}

  <Form
    onSubmit={onSubmit}
  >
    <MuiInput
      name="thing"
      label="thing"
    />
    <MuiInput
      name="number"
      label="number"
      type="number"
    />
    <MuiInput
      name="date"
      label="date"
      type="date"
    />
    <MuiSelect
      name="stuff"
      options={[{ num: 'six' }, { num: 'nine' }]}
      displayKey="num"
    />
    <MuiSubmit />
  </Form>
```
