## :star: Getting Start

> base on [:bookmark: react-select ](https://github.com/JedWatson/react-select)

> :fire: Need to use **State**<br>
> :tada: Work with **Master Data**
>> :warning: it not working correctly. In better way, look **Simple Use** story. 

## Usage
```js
import { DatePickerComponent } from 'react-components-lib'
import master from './utils/master.json'

const identityResources = master.identityResources

<Dropdown
  value={null}
  options={identityResources}
  placeholder={"เอกสารที่ใช้แสดง"}
  onClick={this.handleOnClick}
  currentLanguage={'th'}
  />
```
