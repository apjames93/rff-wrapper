MuiSubmit example:

```js noeditor
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import HTMLInput from './HTMLInput';
```

```js
import Form from '../Form/Form';
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import HTMLInput from './HTMLInput';


const onSubmit = async (values) => {
  console.log('Input Submit Form', values)
}

  <Form
    onSubmit={onSubmit}
  >
    <HTMLInput
      name="favoriteSport"
      label="Sports"
      placeholder="Sports"
    />
    <MuiSubmit />
  </Form>
```
