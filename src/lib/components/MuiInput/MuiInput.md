MuiInput example:

```js noeditor
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import MuiInput from './MuiInput';
```

```js
import Form from '../Form/Form';
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import MuiInput from './MuiInput';


const onSubmit = async (values) => {
  console.log('MuiInput Form', values)
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
    <MuiSubmit />
  </Form>
```
