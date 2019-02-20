import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'
import CardStyle from '../Styles/CardStyle'
import Highlighter from "react-highlight-words";

const Card = styled.div`
  ${CardStyle}
`

const Display = ({ title = 'Return Value', value, optional, highlight }) => {

  return (
    <div>
      {!(R.isEmpty(value) || R.isNil(value)) && (
        <Card>
          <div className="header">{title}</div>
          <div className="optional">{optional}</div>
          <div className="line"></div>
          <div className="container">
            <pre>
              <Highlighter
                searchWords={[highlight]}
                autoEscape={true}
                textToHighlight={JSON.stringify(value, null, 1)}
              />
            </pre>
          </div>

        </Card>
      )}
    </div>
  )
}

export default Display