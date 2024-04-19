// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import StarScale from './starScale';

// Import Image
import bookingLogo from '../../assets/logo/booking_logo.svg';

// Import Style
import {
  CommentSitePresentationWrapper,
  CommentPresentationContainer,
  CommentPresentationIconContainer,
  CommentPresentationIcon,
  CommentPresentationIconBrandContainer,
  CommentPresentationBrandIcon,
  CommentPresentationBrandImage,
  CommentPresentationHashLink
} from '../../utils/style/js/Comment_Style/CommentPresentation_Style';
import { CommentTitle } from '../../utils/style/js/CommentStyle';

function CommentPresentation ({ webSitesList }) {
  const { i18n, t } = useTranslation();

  return (
    <CommentSitePresentationWrapper id='commentWebSitePresentationWrapper'>
      {webSitesList.map((webSite, index) => (
        <CommentPresentationContainer key={index} id={`commentPresentationContainer-${webSite.name}`}>
          <CommentPresentationHashLink to={`#${webSite.name}`}>
            <CommentPresentationIconContainer>
              <CommentPresentationIcon icon={faArrowDown}/>
            </CommentPresentationIconContainer>
            <CommentPresentationIconBrandContainer>
              {webSite.name === 'AirBnB'
                ? (
                <CommentPresentationBrandIcon icon={faAirbnb} />
                  )
                : (
                <CommentPresentationBrandImage src={bookingLogo} />
                  )}
            </CommentPresentationIconBrandContainer>
            <CommentTitle id={`commentTitle-${webSite.name}`} style={{ textAlign: 'center' }}>{webSite.name}</CommentTitle>
            <CommentTitle id={`commentTitle-${webSite.name}-AmountOfVotes`} style={{ textAlign: 'center' }}>{t('AmountOfVotes')} : {webSite[`reviewList${i18n.language}`].length}</CommentTitle>
            <CommentTitle id={`commentTitle-${webSite.name}-AverageRating`} style={{ textAlign: 'center' }}>{t('AverageRating')}: <StarScale scaleValue={webSite.averageRating}/></CommentTitle>
          </CommentPresentationHashLink>
        </CommentPresentationContainer>
      ))}
    </CommentSitePresentationWrapper>
  );
}

CommentPresentation.propTypes = {
  webSitesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      reviewList: PropTypes.arrayOf(
        PropTypes.shape({
          reviewListfr: PropTypes.array.isRequired,
          reviewListen: PropTypes.array.isRequired
        })
      ).isRequired,
      averageRating: PropTypes.number.isRequired
    })
  ).isRequired
};

export default CommentPresentation;
