import React from 'react'
import * as R from 'ramda'

// storybook
import { text, boolean, select, object } from '@storybook/addon-knobs/react';

// component
import PopupSearch from '../../src/components/base/PopupSearch'
import { LANGUAGE_LIST } from '../utils/KnobSelectList'

// style_decorate
import SearchIcon from '../assets/icon/magnify-icon.svg'
import ClearIcon from '../assets/icon/cross-black-circular-button.svg'
import PopupStyle from '../Styles/PopupStyle'
import ReturnValue from '../components/ReturnValue'

// data
import master from '../utils/master.json'
const getCurrentLanguage = () => ('th')

// component Config
import { CellMeasurerCache } from 'react-virtualized'
const tableConfig = {
  width: 1200,
  height: 800,
  headerHeight: 100
}
const cache = new CellMeasurerCache({
  defaultHeight: 40,
  fixedWidth: true,
})

class PopupSearchSimpleUse extends React.Component {

  state = {
    displayStyled: true,
    masterTitle: master.title,
    selectedTitle: {},
    columns: [{ label: "คำนำหน้าชื่อ" }]
  }

  handleClickOption = (object) => {
    this.setState({ selectedTitle: object })
  }

  handleStyle = (bool) => (bool? PopupStyle : {})

  render() {
    return (
      <div>
        <PopupSearch
          // componentConfig
          tableConfig={tableConfig}
          cache={cache}

          // data
          columns={this.state.columns}
          options={this.state.masterTitle}
          value={this.state.selectedTitle || this.state.masterTitle[0]}
          placeholder={text('Placeholder', 'กรุณาค้นหาหรือเลือกคำนำหน้าชื่อ')}
          currentLanguage={select("CurrentLanguage", LANGUAGE_LIST, getCurrentLanguage())}
          disabled={boolean("Disabled", false)}
          onClick={this.handleClickOption}

          //style
          styleConfig={(this.handleStyle(boolean("🎨 ENABLE STYLE", true)))}
          searchIcon={<SearchIcon />}
          clearIcon={<ClearIcon />}

          // button
          disabledBackButton={boolean("Disabled BackButton", false)}
          backButtonText={text("BackButtonText", '')}
        />

        {!R.isEmpty(this.state.selectedTitle) &&
          <ReturnValue value={this.state.selectedTitle} />
        }
      </div>
    )
  }
}

export default PopupSearchSimpleUse