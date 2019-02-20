import React from 'react';

const Red = props => (
  <span style={{ borderRadius: '4px', backgroundColor: '#ff958c', margin: '0px 4px', padding: '0px 4px' }} {...props} >Required</span>)

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse'
}

const getPropType = (propType) => {
  if (propType.value) {
    let propTypes = propType.value.map(key => {
      return key.name
    })
    return propTypes.join(' | ')
  }
  return propType.name
}

const displayValue = (value) => {
  if (value) {
    return value
  }
  return '-'
}

const TableComponent = ({ propDefinitions }) => {
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      return (
        <tr key={property} style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>
          <td style={{ borderRight: '1px solid #eee', textAlign: 'left' }}>
            {property}
            {required ? <Red>*</Red> : null}
          </td>
          <td style={{ borderRight: '1px solid #eee' }}>{getPropType(propType)}</td>
          <td style={{ borderRight: '1px solid #eee' }}>{displayValue(defaultValue)}</td>
          <td style={{ textAlign: 'left' }}>{description}</td>
        </tr >
      );
    }
  );

  return (
    <div style={{ border: '1px solid #eee', borderRadius: '4px', }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #eee' }}>name</th>
            <th style={{ borderBottom: '1px solid #eee' }}>type</th>
            <th style={{ borderBottom: '1px solid #eee' }}>default</th>
            <th style={{ borderBottom: '1px solid #eee' }}>description</th>
          </tr>
        </thead>
        <tbody>{props}</tbody>
      </table>
    </div>
  );
};

export default TableComponent