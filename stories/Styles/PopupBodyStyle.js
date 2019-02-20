import { css } from 'styled-components'
import { JoyTheme } from './JoyTheme'

export default css`
  .ReactVirtualized__Table__headerRow {
    width: 100%!important;
    height: calc(100% - 100px)!important;
    position: absolute!important;
  }

  .ReactVirtualized__Table__Grid {
    /* overflow-y:hidden!important; */
    width: 100%!important;
    height: calc(100% - 50px)!important;
    position: absolute!important;
    top: 118px;
  }

  .ReactVirtualized__Grid__innerScrollContainer {
    max-width: 100%!important;
  }

  .ReactVirtualized__Table__rowColumn {
    width: 100%!important;
  }

  .ReactVirtualized__Table__row {
    width: 100%!important;
    text-align: left;
  }

  .table-header {
    height: 40px;
    width: 100%;
    display: flex;
    color: ${JoyTheme.CREAM};
    background-color: ${JoyTheme.NAVY}; 
    padding-top: 14px;
  }

  .table-row {
    min-height: 40px;
    width: 100%!important;
    display: table;
    padding-right: 0!important;
    border: 1px solid ${JoyTheme.CREAM};

    .row {
      padding: 8px 36px!important;

      :hover {
        color: ${JoyTheme.NAVY};
        background-color: ${JoyTheme.LIGHT};
        cursor: pointer;
      }
    }

    .row.active {
      background-color: ${JoyTheme.CREAM}
    }
  }
`