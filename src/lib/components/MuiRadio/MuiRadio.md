MuiRadio example:

```js noeditor
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import MuiRadio from './MuiRadio';
```

```js
import Form from '../Form/Form';
import MuiSubmit from '../MuiSubmit/MuiSubmit';
import MuiRadio from './MuiRadio';


const onSubmit = async (values) => {
  console.log('Radio Form', values)
}

  <Form
    onSubmit={onSubmit}
  >
    <MuiRadio
      name="radioName"
      value="testValue1"
      color="default"
      label="radioButton1"
      checkedIcon={{ iconName: 'menu' }}
      icon={{ iconName: 'star' }}
    />
    <MuiRadio
      name="radioName"
      value="testValue2"
      color="default"
      label="radioButton2"
    />
    <MuiSubmit />
  </Form>
```
