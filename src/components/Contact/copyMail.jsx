import React from 'react';

import colors from '../../utils/style/jsx/colors';
import { t } from 'i18next';

class CopyEmailLink extends React.Component {
  constructor(props) {
    super(props);
    this.emailLinkRef = React.createRef();
    this.state = {
      isCopied: false,
    };
  }

  copyToClipboard = (e) => {
    e.preventDefault();
    const emailLink = this.emailLinkRef.current;
    const range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    this.setState({ isCopied: true });

    setTimeout(() => {
      this.setState({ isCopied: false });
    }, 2000);
  };

  render() {
    return (
      <span>
        <a
          href={`mailto:${this.props.email}`}
          ref={this.emailLinkRef}
          onClick={this.copyToClipboard}
        >
          {this.props.email}
        </a>
        {this.state.isCopied && (
          <div
            style={{
              position: 'fixed',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: 'cursive',
              fontStyle: 'italic',
              backgroundColor: colors.title,
              color: '#fff',
              padding: '10px',
              borderRadius: '5px',
              zIndex: 1000,
            }}
          >
            {t("EmailCopiedToClipboard")}
          </div>
        )}
      </span>
    );
  }
}

export default CopyEmailLink;
