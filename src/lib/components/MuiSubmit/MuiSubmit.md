MuiSubmit example:

```js noeditor
import MuiSubmit from './MuiSubmit';
import MuiInput from '../MuiInput/MuiInput';
```

```js
import Form from '../Form/Form';
import MuiSubmit from './MuiSubmit';
import MuiInput from '../MuiInput/MuiInput';


const onSubmit = async (values) => {
  console.log('Input Submit Form', values)
}

  <Form
    onSubmit={onSubmit}
  >
    <MuiInput
      name="thing"
      label="thing"
    />
    <MuiSubmit />
  </Form>
```
