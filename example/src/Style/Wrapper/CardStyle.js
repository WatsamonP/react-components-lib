import { css } from 'styled-components';
import { Colors } from '../../constants/styles'

export default css`
  /* Add shadows to create the "card" effect */
  border: 1px solid ${Colors.GREY};
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 40px 20px;

  /* On mouse-over, add a deeper shadow */
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px 10px;
  }

  /* Add rounded corners */
  .header {
    border-radius: 8px 8px 0 0;
    padding: 5px 16px;
    margin: 7px 0 7px 0;
    border-bottom: 1px solid ${Colors.GREY}; 
    font-weight:bold;
    color: ${Colors.BLUE};
  }
`