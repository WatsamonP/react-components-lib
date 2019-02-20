import React from "react"
import styled from 'styled-components'
import classnames from 'classnames'

import * as R from 'ramda'
import { filterOptions, isContainsStringItem } from '../../../utils/filter'
import { CellMeasurerCache, CellMeasurer, Column, Table } from 'react-virtualized'
// TODO
// import textinput
/******************************************************* */
const Wrapper = styled.div`
  ${props => props.styleConfig || `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FFF;
    z-index: 300;
  `};
`
const PopupWrapper = styled.div`
`

const Icon = styled.i` 
`

const ClearButton = styled.button`
  background-color: Transparent;
  border: none;
  overflow: hidden;
  outline:none;
`
const Header = styled.div`${props => props.styled || ''};`
const Body = styled.div`${props => props.styled || ''};`
const Footer = styled.div`${props => props.styled || ''};`
const BackButton = styled.button`${props => props.styled || ''};`

const SearchInput = styled.input`
`

const Title = styled.span`
  ${props => props.styled || ``};
  padding: 0 36px;
`

/******************************************************** */
export const defaultColumns = [
  {
    label: 'popupSearch.title.default',
  },
]

const defaultCache = new CellMeasurerCache({
  defaultHeight: 40,
  fixedWidth: true,
})


export const getRowData = options => ({ index }) => options[index]

const condition = (searchText, currentLanguage) => isContainsStringItem(['translations', currentLanguage, 'label'], searchText)

const RenderHeader = ({ dataKey, label }) => (
  <Title key={dataKey}>
    {label}
  </Title>
)

const RenderColumn = (
  options,
  config,
  cacheTemp,
  testId = {},
  value,
  currentLanguage) => ({ dataKey, parent, rowIndex }) => {
    const option = options[rowIndex]

    return (
      <CellMeasurer
        cache={cacheTemp}
        columnIndex={0}
        key={dataKey}
        parent={parent}
        rowIndex={rowIndex}
      >
        <div className={`row ${classnames({ active: option.code === value.code })}`} id={`popup-search-item-${testId.testSectionId}-${testId.testId}-${option.code}`}>
          {R.path(['translations', currentLanguage, 'label'], option)}
        </div>
      </CellMeasurer>
    )
  }

/******************************************************** */

class Popup extends React.PureComponent {
  constructor(props) {
    super(props)
    const { options = [], value, currentLanguage } = this.props
    this.state = {
      searchText: R.pathOr('', ['translations', currentLanguage, 'label'], value),
      searchOptions: R.ifElse(
        R.either(R.isNil, R.isEmpty),
        R.always(options),
        v => [v]
      )(value),
    }
  }

  onClickRow = ({ index }) => {
    const { handlePopup = R.identity, onClick = R.identity } = this.props
    const { searchOptions } = this.state
    onClick(searchOptions[index])
    handlePopup()
  }

  handleSearch = (e) => {
    const { options = [], currentLanguage } = this.props
    const value = R.pathOr('', ['target', 'value'], e)
    this.setState({
      searchText: value,
      searchOptions: filterOptions([condition(value, currentLanguage)], options),
    })
  }

  render() {
    const { props = {} } = this.props
    const {
      columns = defaultColumns,
      popupSearch = {},
      testId = {},
      styleConfig = {},
      tableConfig = {},
      currentLanguage,
      cache = defaultCache
    } = this.props

    const { width = 1200, height = 800, headerHeight = 100, rowHeight = defaultCache.rowHeight } = tableConfig;
    const { searchText, searchOptions } = this.state
    const { searchIcon = {}, clearIcon = {} } = this.props
    const { value } = this.props

    return (
      <Wrapper styleConfig={styleConfig}>
        <PopupWrapper className="popupWrapper">
          <Header className="popupHeader">
            <SearchInput
              className="popupTextInput"
              type="text"
              value={searchText}
              onChange={this.handleSearch}
            />
            <Icon className="popupIcon">{searchIcon}</Icon>
            {
              searchText && (
                <ClearButton className="popupClearIcon" onClick={this.handleSearch}>
                  {clearIcon || "Clear"}
                </ClearButton>)
            }
          </Header>


          <Body className="popupBody">
            <Table
              deferredMeasurementCache={cache}
              width={width}
              height={height}
              headerHeight={headerHeight}
              rowHeight={rowHeight}
              rowCount={searchOptions.length}
              rowGetter={getRowData}
              rowClassName="table-row"
              headerClassName="table-header"
              onRowClick={this.onClickRow}
            >
              {
                columns.map(config => {
                  return (
                    <Column
                      key={`popup-${config.label}`}
                      dataKey={`popup-${config.label}`}
                      width={100}
                      cellRenderer={RenderColumn(searchOptions, config, cache, testId, value, currentLanguage)}
                      label={popupSearch.title || config.label}
                      headerRenderer={RenderHeader}
                    />
                  )
                })
              }
            </Table>
          </Body>


          <Footer className="popupFooter">
            <span style={{ display: 'inline' }}>
              {this.props.leftButtonOption ? this.props.leftButtonOption() : ''}
            </span>

            <span style={{ display: 'inline' }}>
              {this.props.disabledBackButton ? '' :
                <BackButton
                  className="popupButton"
                  onClick={this.props.handlePopup}>
                  {this.props.backButtonText || "Back"}
                </BackButton>}
            </span>

            <span style={{ display: 'inline' }}>
              {this.props.rightButtonOption ? this.props.rightButtonOption() : ''}
            </span>
          </Footer>
        </PopupWrapper>
      </Wrapper>
    )
  }
}

export default Popup;