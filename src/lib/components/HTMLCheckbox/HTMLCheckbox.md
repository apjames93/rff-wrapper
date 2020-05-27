HTMLCheckbox example:

```js noeditor
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import HTMLCheckbox from './HTMLCheckbox';
```

```js
import Form from '../Form/Form';
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import HTMLCheckbox from './HTMLCheckbox';


const onSubmit = async (values) => {
  console.log('HTML Checkbox Form', values)
}

  <Form
    onSubmit={onSubmit}
  >
    <HTMLCheckbox
      name="favoriteSport"
      label="Sports"
      labelPlacement="top"
    />
    <MuiSubmit />
  </Form>
```
