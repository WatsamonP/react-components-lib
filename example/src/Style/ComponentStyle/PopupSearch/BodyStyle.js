import { css } from 'styled-components'
import { Colors } from '../../../constants/styles'

export default css`
  .ReactVirtualized__Table__headerRow {
    width: 100%!important;
    height: calc(100% - 100px)!important;
    position: absolute!important;
  }

  .ReactVirtualized__Table__Grid {
    width: 100%!important;
    height: calc(100% - 180px)!important;
    position: absolute!important;
    top: 120px;
  }

  .ReactVirtualized__Grid__innerScrollContainer {
    max-width: 100%!important;
  }

  .table-header {
    height: 40px;
    width: 100%;
    background-color: ${Colors.GREY};
    display: flex;
  }

  .table-row {
    /*min-height: 60px;*/
    width: 100%!important;
    /*border: 1px solid ${Colors.GREY};*/
    display: table;
    padding-right: 0!important;
    .row {
      padding: 14px 36px!important;
      display: inline-block;
      width: 100%;
    }
    .row.active {
      background-color: ${Colors.BLUE};
    }
  }
`