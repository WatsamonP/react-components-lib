import React from 'react';
import './Styles/Switch.css'
import { translate } from 'react-i18next';


class SwitchLang extends React.Component {

  handleChangeLang = () => {
    const { i18n } = this.props;
    i18n.language === 'th' ? i18n.changeLanguage("en") : i18n.changeLanguage("th");
  }

  render() {


    return (
      <label className="switch">
        <input className="switch-input" type="checkbox" onClick={this.handleChangeLang} />
        <span className="switch-label" data-th="TH" data-en="EN"></span>
        <span className="switch-handle"></span>
      </label>
    )
  }
}

export default translate()(SwitchLang)